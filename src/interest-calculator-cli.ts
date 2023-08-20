import {finalBalance} from "./interest-calculator";
import {program} from 'commander';

// CLI Configuration
program
    .name("Interest Calculator CLI")
    .version('0.0.1')
    .description('Calculates the ending balance of a deposit ' +
        'given the investment term, annual interest and interest payment frequency');

program
    .requiredOption('--interestPaymentFrequency <string>', 'How ofter the term deposit pays interests')
    .requiredOption('--initialBalance <double>', 'Initial amount')
    .requiredOption('--annualInterest <double>', 'Annual interest, e.g. 1.23 for 1.23%')
    .requiredOption('--investmentTerm <integer>', 'number of years the investment will run');

// Process input arguments
program.parse();
const options = program.opts();
const interestPaymentFrequency = options.interestPaymentFrequency;
const initialBalance = options.initialBalance;
const annualInterest = options.annualInterest;
const investmentTerm = options.investmentTerm;

// Run Application
const result = finalBalance(interestPaymentFrequency, initialBalance, annualInterest, investmentTerm);
const formattedResult: string = result.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Print outputs
console.log('Input arguments:');
console.log('interestPaymentFrequency:', interestPaymentFrequency);
console.log('initialBalance:', initialBalance);
console.log('annualInterest:', annualInterest);
console.log('investmentTerm:', investmentTerm);
console.log('---------------------------');
console.log('Final Balance:', formattedResult);
