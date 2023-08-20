import {
    finalBalance,
    validatedInterestPaymentFrequencyEnum
} from "../interest-calculator";

describe('tests enum generator function', () => {
    it('tests enum generator with a valid string', () => {
        expect(validatedInterestPaymentFrequencyEnum("Monthly")).toEqual(12)
    })

    it('tests enum generator with an invalid string', () => {
        expect(validatedInterestPaymentFrequencyEnum("weekly")).toEqual(undefined)
    })

    it('tests enum generator for at maturity', () => {
        expect(validatedInterestPaymentFrequencyEnum("at maturity")).toEqual(0)
    })
})

describe('tests final balance', () => {
    it('tests balance with period', () => {
        expect(finalBalance("monthly", 10000, 1.1, 3)).toBeCloseTo(10335.35, 2)
    })

    it('tests balance at maturity', () => {
        expect(finalBalance("at maturity", 10000, 1.1, 3)).toBeCloseTo(10330.00, 2)
    })
})