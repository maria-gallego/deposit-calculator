# Deposit calculator

## Description

This application is a term deposit calculator. 
It will determine the accumulated savings based on the amount initially invested, the term on the investment and the interest rate offered.\
The application is written in `Typescript` and uses `Jest` as a testing framework.\
The application does not include a User Interface, but can be run through the terminal. 

## Assumptions

All proceeds obtained are reinvested into the term deposit for its duration.

## Installation 

To install all the dependencies of the application: `npm install`.\
The code needs to be compiled. Run `npm run build`.\
To run the tests: `npm test`.

## How to use the Deposit Calculator

As the application runs on the terminal, to calculate the result of a term deposit run the following command:\
```
npm run build && node dist/interest-calculator-cli.js --interestPaymentFrequency <INSERT VALUE> --initialBalance <INSERT VALUE> --annualInterest <INSERT VALUE> --investmentTerm <INSERT VALUE>
```
The inputs used to calculate the term deposit are the following:\
Please replace <INSERT VALUE> with the desired inputs in the command provided above.
- interestPaymentFrequency: can be Monthly, Quarterly, Annually and At Maturity.
- initialBalance: The initial amount in the term deposit.
- annualInterest: Annual interest rate e.g. 1.23 for 1.23%.
- investmentTerm: The number of years for the deposit.\

If you've provided and invalid value for any of these inputs, don't worry, you'll see a message saying what the value should look like. 

## What further work could be done

A simple User Interface would be great to better interact with the application. It would just require input boxes to provide the values used to calculate the term deposit.\
This would also facilitate error handling to give feedback to the user when an invalid value is provided.
