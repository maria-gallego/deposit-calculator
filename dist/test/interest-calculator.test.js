"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interest_calculator_1 = require("../interest-calculator");
const error_handling_1 = require("../error-handling");
describe('tests enum generator function', () => {
    it('tests enum generator with a valid string', () => {
        expect((0, interest_calculator_1.validatedInterestPaymentFrequencyEnum)("Monthly")).toEqual(12);
    });
    it('tests enum generator for at maturity', () => {
        expect((0, interest_calculator_1.validatedInterestPaymentFrequencyEnum)("at maturity")).toEqual(0);
    });
});
describe('tests final balance', () => {
    it('tests balance with period', () => {
        expect((0, interest_calculator_1.finalBalance)("monthly", 10000, 1.1, 3)).toBeCloseTo(10335.35, 2);
    });
    it('tests balance at maturity', () => {
        expect((0, interest_calculator_1.finalBalance)("at maturity", 10000, 1.1, 3)).toBeCloseTo(10330.00, 2);
    });
});
describe('tests error handling for input values', () => {
    it('error handling for invalid input for interest payment frequency', () => {
        expect(() => {
            (0, interest_calculator_1.finalBalance)("weekly", 10000, 0, 3);
        }).toThrowError(new error_handling_1.ValidationError("Payment Frequency must be Monthly, Quarterly, Annually or At Maturity"));
    });
    it('error handling for invalid input for interest rate', () => {
        expect(() => {
            (0, interest_calculator_1.finalBalance)("monthly", 10000, 0, 3);
        }).toThrowError(new error_handling_1.ValidationError("Interest must be entered as a percentage greater than 0, like 1.5"));
    });
    it('error handling for invalid input for initial balance', () => {
        expect(() => {
            (0, interest_calculator_1.finalBalance)("monthly", -10000, 1.1, 3);
        }).toThrowError(new error_handling_1.ValidationError("The initial balance must be a number greater than 0"));
    });
    it('error handling for invalid input for investment term', () => {
        expect(() => {
            (0, interest_calculator_1.finalBalance)("monthly", 10000, 1.1, 0);
        }).toThrowError(new error_handling_1.ValidationError("The investment term is the number of years the money will be invested and must be greater than 0"));
    });
});
