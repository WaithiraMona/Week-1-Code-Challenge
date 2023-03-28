
# Week-1-Code-Challenge

This repository consists of 3 code challenges:

Challenge 1: Student Grade Generator

It is a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

This program prompts the user to enter the student's marks, and then uses conditional statements (if-else) to determine the corresponding grade. If the marks are greater than 79, the grade is A. If the marks are between 60 and 79, the grade is B. If the marks are between 50 and 59, the grade is C. If the marks are between 40 and 49, the grade is D. And if the marks are less than 40, the grade is E. The program then outputs the grade using the console.log() function

Challenge 2: Speed Detector

The program takes an input of the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

Challenge 3: Net Salary Calculator

Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

NB: Used KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm 

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

## Run Locally

Clone the project

```bash
  git clone git@github.com:WaithiraMona/Week-1-Code-Challenge.git
```

Go to the project directory

```bash
  cd Week-1-Code-Challenge
```
Go into the preferred code challenge folder
```bash
  cd Student Grade
```

Install dependencies

```bash
  npm install
```

Run the file using node <filename.js>

```bash
  node Grade.js
```

Do the same for the other folders.