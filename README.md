# Deposit calculator

## Description

This application is a term deposit calculator. 
It will determine the accumulated savings based on the amount initially invested, the term on the investment and the interest rate offered.\
The application is written in `Typescript` and uses `Jest` as a testing framework.\
The application does not include a User Interface, but can be run through the terminal. 

## Assumptions

- All proceeds obtained are reinvested into the term deposit for its duration.
- Only the following interest payment frequencies are supported: `Monthly, Quarterly, Annualy, At maturity`
- The interest given as input is always nominal per annum.
- The investment term must be given in years and must be >= 1.

## Design and Entry Points

The application is divided into the following files.
- `interest-calculator.ts` contains all the application logic, with `finalBalance` being the only entry point. 
- `interest-calculator-cli.ts` contains the interface related code and uses the function above to perform the financial calculations. The CLI is used on top of `Commander`, a popular library for this purpose.
- `interest-calculator.test.ts` contains tests for the application logic as well as tests for the validation Errors. 

## Installation 

To install all the dependencies of the application: `npm install`.\
The code needs to be compiled before running the CLI. Run `npm run build`. All compiled files will go into the `dist` directory.\
To run the tests: `npm test`.

## How to use the Deposit Calculator CLI

As the application runs on the terminal, to calculate the result of a term deposit run the following command:
```
npm run build && node dist/interest-calculator-cli.js --interestPaymentFrequency Monthly --initialBalance 10000 --annualInterest 1.1 --investmentTerm 3
```
The inputs used to calculate the term deposit are the following:\
- `interestPaymentFrequency`: can be Monthly, Quarterly, Annually and At Maturity.
- `initialBalance`: The initial amount in the term deposit.
- `annualInterest`: Annual interest rate e.g. 1.23 for 1.23%.
- `investmentTerm`: The number of years for the deposit.

If you've provided an invalid value for any of these inputs, don't worry, you'll see a message saying what the value should look like. 

## What further work could be done

A simple User Interface would be great to better interact with the application. It would just require input boxes to provide the values used to calculate the term deposit.\
This would also facilitate error handling to give feedback to the user when an invalid value is provided.\
If we were going to continue using the CLI to interact with the application, I would introduce a cleaner way to show the user the validation errors. 

