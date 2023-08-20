import {finalBalance, finalBalanceAtMaturity, finalBalanceWithPeriods, getFrequencyEnum} from "../interest-calculator";

describe('tests enum generator function', () => {
    it('tests enum generator with a valid string', () => {
        expect(getFrequencyEnum("Monthly")).toEqual(12)
    })

    it('tests enum generator with an invalid string', () => {
        expect(getFrequencyEnum("weekly")).toEqual(undefined)
    })

    it('tests enum generator for at maturity', () => {
        expect(getFrequencyEnum("at maturity")).toEqual(0)
    })
})

describe('tests final balance with periods function', () => {
    it('tests monthly finalBalance', () => {
        expect(finalBalanceWithPeriods(10000, 1.10, "monthly", 3)).toEqual(10335)
    })
})

describe('tests final balance at maturity function', () => {
    it('tests balance at maturity', () => {
        expect(finalBalanceAtMaturity(10000, 1.10, 3)).toEqual(10330)
    })
})
describe('tests final balance', () => {
    it('tests balance with period', () => {
        expect(finalBalance("monthly", 10000, 1.1, 3)).toEqual(10335)
    })

    it('tests balance at maturity', () => {
        expect(finalBalance("at maturity", 10000, 1.1, 3)).toEqual(10330)
    })
})