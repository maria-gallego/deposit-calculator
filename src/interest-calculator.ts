enum PaymentFrequency {
   MONTHLY = 12,
   QUARTERLY = 4,
   ANNUALLY = 1,
   ATMATURITY = 0
}

export function getFrequencyEnum(paymentString: string): PaymentFrequency | undefined {
   const transformedString = paymentString.toUpperCase().replace(/\s/g, "")
   return PaymentFrequency [transformedString as keyof typeof PaymentFrequency]
}

const paymentFrequencyValue = (paymentString: string) => {
   const frequencyValue = getFrequencyEnum(paymentString)

   if (frequencyValue !== undefined) {
      return frequencyValue
   } else {
      console.log('handle error')
   }
}
export const interestRate = (annualInterestRate: number) => {
   return annualInterestRate/100
}

export const finalBalanceWithPeriods = (
    initialBalance: number,
    annualInterest: number,
    periodsInYear: string,
    investmentTerm: number
) => {
   const periodsInYearValue = paymentFrequencyValue(periodsInYear)
   const interest = interestRate(annualInterest)
   const interestPerPeriod = interest / periodsInYearValue
   const periodsInvested = periodsInYearValue * investmentTerm
   const result = initialBalance * (1 + interestPerPeriod) ** periodsInvested

   return parseInt(result.toFixed(0))
}

export const finalBalanceAtMaturity = (
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
) => {
   const interest = interestRate(annualInterest)
   const result = (initialBalance * interest * investmentTerm) + initialBalance

   return parseInt(result.toFixed(0))
}

export const finalBalance = (
    periodsInYear: string,
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
) => {
   const periodsInYearValue = paymentFrequencyValue(periodsInYear)
   if (periodsInYearValue === 0) {
      return finalBalanceAtMaturity(initialBalance, annualInterest, investmentTerm)
   } else {
      return finalBalanceWithPeriods(initialBalance, annualInterest, periodsInYear, investmentTerm)
   }
}