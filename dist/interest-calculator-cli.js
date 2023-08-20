"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interest_calculator_1 = require("./interest-calculator");
const commander_1 = require("commander");
// CLI Configuration
commander_1.program
    .name("Interest Calculator CLI")
    .version('0.0.1')
    .description('Calculates the ending balance of a deposit ' +
    'given the investment term, annual interest and interest payment frequency');
commander_1.program
    .requiredOption('--interestPaymentFrequency <string>', 'How ofter the term deposit pays interests')
    .requiredOption('--initialBalance <double>', 'Initial amount')
    .requiredOption('--annualInterest <double>', 'Annual interest, e.g. 1.23 for 1.23%')
    .requiredOption('--investmentTerm <integer>', 'number of years the investment will run');
// Process input arguments
commander_1.program.parse();
const options = commander_1.program.opts();
const interestPaymentFrequency = options.interestPaymentFrequency;
const initialBalance = options.initialBalance;
const annualInterest = options.annualInterest;
const investmentTerm = options.investmentTerm;
// Run Application
const result = (0, interest_calculator_1.finalBalance)(interestPaymentFrequency, initialBalance, annualInterest, investmentTerm);
const formattedResult = result.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
// Print outputs
console.log('Input arguments:');
console.log('interestPaymentFrequency:', interestPaymentFrequency);
console.log('initialBalance:', initialBalance);
console.log('annualInterest:', annualInterest);
console.log('investmentTerm:', investmentTerm);
console.log('---------------------------');
console.log('Final Balance:', formattedResult);
