import {ValidationError} from "./error-handling";

enum PaymentFrequency {
   MONTHLY = 12,
   QUARTERLY = 4,
   ANNUALLY = 1,
   ATMATURITY = 0
}

export const paymentFrequencyValue = (paymentString: string): PaymentFrequency | undefined => {
   const getFrequencyEnum = (paymentString: string) => {
      const transformedString = paymentString.toUpperCase().replace(/\s/g, "")
      return PaymentFrequency[transformedString as keyof typeof PaymentFrequency]
   }

   if (getFrequencyEnum(paymentString) !== undefined) {
      return getFrequencyEnum(paymentString)
   } else {
      throw new ValidationError("Payment Frequency mst be Monthly, Quarterly, Annually or At Maturity")
   }
}

const validatedInterest = (annualInterest: number) => {
   if (annualInterest > 0) {
      return annualInterest/100
   } else {
      throw new ValidationError("Interest must be entered as a percentage greater than 0, like 1.5")
   }
}

const validatedBalance = (balance: number) => {
   if (balance > 1000) {
      return balance
   } else {
   throw new ValidationError("The initial balance must be a number greater than 1000")
   }
}

const validatedInvestmentPeriod = (investmentPeriod: number) => {
   if (investmentPeriod > 1-12) {
      return investmentPeriod
   } else {
      throw new ValidationError("The initial balance must be a number greater than 1000")
   }
}
export const finalBalanceWithPeriods = (
    initialBalance: number,
    annualInterest: number,
    periodsInYear: string,
    investmentTerm: number
) => {
   const paymentFrequency = paymentFrequencyValue(periodsInYear)
   const interestValue = validatedInterest(annualInterest)
   const interestPerPeriod = interestValue / paymentFrequency
   const periodsInvested = paymentFrequency * validatedInvestmentPeriod(investmentTerm)
   return validatedBalance(initialBalance) * (1 + interestPerPeriod) ** periodsInvested
}

export const finalBalanceAtMaturity = (
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
) => {
   const interestValue =  validatedInterest(annualInterest)
   return (initialBalance * interestValue * validatedInvestmentPeriod(investmentTerm)) + initialBalance
}

export const finalBalance = (
    interestPaymentFrequency: string,
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
) => {
   const investmentFrequencyValue = paymentFrequencyValue(interestPaymentFrequency)
   if (investmentFrequencyValue === 0) {
      return finalBalanceAtMaturity(initialBalance, annualInterest, investmentTerm)
   } else {
      return finalBalanceWithPeriods(initialBalance, annualInterest, interestPaymentFrequency, investmentTerm)
   }
}