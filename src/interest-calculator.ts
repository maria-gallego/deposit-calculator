enum InterestPaymentFrequency {
   MONTHLY = 12,
   QUARTERLY = 4,
   ANNUALLY = 1,
   ATMATURITY = 0
}

export const validatedInterestPaymentFrequencyEnum = (paymentString: string): InterestPaymentFrequency => {
   const transformedString = paymentString.toUpperCase().replace(/\s/g, "")
   const frequencyEnum =
       InterestPaymentFrequency[transformedString as keyof typeof InterestPaymentFrequency]

   if (frequencyEnum !== undefined) {
      return frequencyEnum
   } else {
      throw new ValidationError("Payment Frequency must be Monthly, Quarterly, Annually or At Maturity")
   }
}

export class ValidationError extends Error {
   constructor(message: string) {
      super(message)
      this.name = "ValidationError"
   }
}

const validatedInterest = (annualInterest: number): number => {
   if (annualInterest >0) {
      return annualInterest/100
   } else {
      throw new ValidationError("Interest must be entered as a percentage and must be greater than 0 (e.g. 1.5)")
   }
}

const validatedBalance = (balance: number): number => {
   if (balance > 0) {
      return balance
   } else {
   throw new ValidationError("The initial balance must be a number greater than 0")
   }
}

const validatedInvestmentPeriod = (investmentTerm: number): number => {
   if (investmentTerm >= 1) {
      return investmentTerm
   } else {
      throw new ValidationError("The investment term is the number of years the money will be invested and must be >= 1")
   }
}
const finalBalanceWithPeriods = (
    initialBalance: number,
    annualInterest: number,
    interestPaymentFrequency: InterestPaymentFrequency,
    investmentTerm: number
): number => {
   const interestValue = validatedInterest(annualInterest)
   const interestPerPeriod = interestValue / interestPaymentFrequency
   const periodsInvested = interestPaymentFrequency * validatedInvestmentPeriod(investmentTerm)
   return validatedBalance(initialBalance) * (1 + interestPerPeriod) ** periodsInvested
}

const finalBalanceAtMaturity = (
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
): number => {
   const interestValue =  validatedInterest(annualInterest)
   return (initialBalance * interestValue * validatedInvestmentPeriod(investmentTerm)) + initialBalance
}

export const finalBalance = (
    interestPaymentFrequency: string,
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
): number => {
   const interestPaymentFrequencyEnum = validatedInterestPaymentFrequencyEnum(interestPaymentFrequency)
   if (interestPaymentFrequencyEnum === 0) {
      return finalBalanceAtMaturity(initialBalance, annualInterest, investmentTerm)
   } else {
      return finalBalanceWithPeriods(initialBalance, annualInterest, interestPaymentFrequencyEnum, investmentTerm)
   }
}