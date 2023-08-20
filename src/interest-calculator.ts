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
      return undefined
   }
}

export const finalBalanceWithPeriods = (
    initialBalance: number,
    annualInterest: number,
    periodsInYear: string,
    investmentTerm: number
) => {
   const periodsInYearValue = paymentFrequencyValue(periodsInYear)
   const interest = annualInterest/100
   const interestPerPeriod = interest / periodsInYearValue
   const periodsInvested = periodsInYearValue * investmentTerm
   return initialBalance * (1 + interestPerPeriod) ** periodsInvested
}

export const finalBalanceAtMaturity = (
    initialBalance: number,
    annualInterest: number,
    investmentTerm: number
) => {
   const interest =  annualInterest/100
   return (initialBalance * interest * investmentTerm) + initialBalance
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