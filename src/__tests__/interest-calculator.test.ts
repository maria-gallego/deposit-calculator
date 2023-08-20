import {
    finalBalance,
    finalBalanceAtMaturity,
    finalBalanceWithPeriods,
    paymentFrequencyValue
} from "../interest-calculator";

describe('tests enum generator function', () => {
    it('tests enum generator with a valid string', () => {
        expect(paymentFrequencyValue("Monthly")).toEqual(12)
    })

    it('tests enum generator with an invalid string', () => {
        expect(paymentFrequencyValue("weekly")).toEqual(undefined)
    })

    it('tests enum generator for at maturity', () => {
        expect(paymentFrequencyValue("at maturity")).toEqual(0)
    })
})

describe('tests final balance with periods function', () => {
    it('tests monthly finalBalance', () => {
        expect(finalBalanceWithPeriods(10000, 1.10, "monthly", 3)).toBeCloseTo(10335.35, 2)
    })
})

describe('tests final balance at maturity function', () => {
    it('tests balance at maturity', () => {
        expect(finalBalanceAtMaturity(10000, 1.10, 3)).toBeCloseTo(10330.00, 2)
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