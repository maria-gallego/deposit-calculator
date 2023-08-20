"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalBalance = exports.validatedInterestPaymentFrequencyEnum = void 0;
const error_handling_1 = require("./error-handling");
var InterestPaymentFrequency;
(function (InterestPaymentFrequency) {
    InterestPaymentFrequency[InterestPaymentFrequency["MONTHLY"] = 12] = "MONTHLY";
    InterestPaymentFrequency[InterestPaymentFrequency["QUARTERLY"] = 4] = "QUARTERLY";
    InterestPaymentFrequency[InterestPaymentFrequency["ANNUALLY"] = 1] = "ANNUALLY";
    InterestPaymentFrequency[InterestPaymentFrequency["ATMATURITY"] = 0] = "ATMATURITY";
})(InterestPaymentFrequency || (InterestPaymentFrequency = {}));
const validatedInterestPaymentFrequencyEnum = (paymentString) => {
    const transformedString = paymentString.toUpperCase().replace(/\s/g, "");
    const frequencyEnum = InterestPaymentFrequency[transformedString];
    if (frequencyEnum !== undefined) {
        return frequencyEnum;
    }
    else {
        throw new error_handling_1.ValidationError("Payment Frequency must be Monthly, Quarterly, Annually or At Maturity");
    }
};
exports.validatedInterestPaymentFrequencyEnum = validatedInterestPaymentFrequencyEnum;
const validatedInterest = (annualInterest) => {
    if (annualInterest > 0) {
        return annualInterest / 100;
    }
    else {
        throw new error_handling_1.ValidationError("Interest must be entered as a percentage greater than 0, like 1.5");
    }
};
const validatedBalance = (balance) => {
    if (balance > 0) {
        return balance;
    }
    else {
        throw new error_handling_1.ValidationError("The initial balance must be a number greater than 0");
    }
};
const validatedInvestmentPeriod = (investmentTerm) => {
    if (investmentTerm > 0) {
        return investmentTerm;
    }
    else {
        throw new error_handling_1.ValidationError("The investment term is the number of years the money will be invested and must be greater than 0");
    }
};
const finalBalanceWithPeriods = (initialBalance, annualInterest, interestPaymentFrequency, investmentTerm) => {
    const interestValue = validatedInterest(annualInterest);
    const interestPerPeriod = interestValue / interestPaymentFrequency;
    const periodsInvested = interestPaymentFrequency * validatedInvestmentPeriod(investmentTerm);
    return validatedBalance(initialBalance) * (1 + interestPerPeriod) ** periodsInvested;
};
const finalBalanceAtMaturity = (initialBalance, annualInterest, investmentTerm) => {
    const interestValue = validatedInterest(annualInterest);
    return (initialBalance * interestValue * validatedInvestmentPeriod(investmentTerm)) + initialBalance;
};
const finalBalance = (interestPaymentFrequency, initialBalance, annualInterest, investmentTerm) => {
    const interestPaymentFrequencyEnum = (0, exports.validatedInterestPaymentFrequencyEnum)(interestPaymentFrequency);
    if (interestPaymentFrequencyEnum === 0) {
        return finalBalanceAtMaturity(initialBalance, annualInterest, investmentTerm);
    }
    else {
        return finalBalanceWithPeriods(initialBalance, annualInterest, interestPaymentFrequencyEnum, investmentTerm);
    }
};
exports.finalBalance = finalBalance;
