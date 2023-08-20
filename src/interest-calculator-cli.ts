import {finalBalance} from "./interest-calculator";
const { program } = require('commander');


// Define version and description
program
    .name("Interest Calculator CLI")
    .version('0.0.1')
    .description('Calculates the ending balance of a deposit ' +
        'given the investment term, annual interest and interest payment frequency');

// Define input flags
program
    .option('--interestPaymentFrequency <string>', 'foo bar monthly, etc..')
    .option('--initialBalance <number>', 'fooo dsfsdafdsaf')
    .option('--annualInterest <number>', 'e.g. 1.23 for 1.23%')
    .option('--investmentTerm <integer>', 'number of years the investment will run');

// Parse command-line arguments
program.parse();
const options = program.opts();

// Access input flag values
const interestPaymentFrequency = options.interestPaymentFrequency;
const initialBalance = options.initialBalance;
const annualInterest = options.annualInterest;
const investmentTerm = options.investmentTerm;

// // Your application logic goes here
console.log('Input arguments:');
console.log('interestPaymentFrequency:', interestPaymentFrequency);
console.log('initialBalance:', initialBalance);
console.log('annualInterest:', annualInterest);
console.log('investmentTerm:', investmentTerm);
console.log('---------------------------');
console.log('final balance:', finalBalance(interestPaymentFrequency, initialBalance, annualInterest, investmentTerm));

