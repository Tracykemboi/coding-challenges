# coding-challenges
Solutions to coding challenges
Challenge 1: Student Grade Generator 

      Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40     
Solution Steps
Understanding the Problem:
        We need to create a function that takes a student’s mark as input and returns the corresponding grade.
        The function should handle different ranges of marks and map them to the appropriate grade.
Function Design:
        We’ll create a function called calculateGrade(mark).
        This function will take a single argument, mark, representing the student’s score.
Grade Ranges and Conditions:
        We’ll use conditional statements (if-else) to determine the grade based on the input mark.
        The order of conditions matters: we’ll start with the highest grade (A) and work our way down.
Implementing the Function:
        We’ll write the function code, ensuring it covers all possible scenarios.
        The function will return the appropriate grade based on the input mark.
        The calculateGrade function takes a single parameter, mark.
        It checks the mark against different ranges using if-else statements.
        If the mark satisfies a condition, it returns the corresponding grade (‘A’, ‘B’, ‘C’, ‘D’, or ‘E’).
        The order of conditions ensures that the highest applicable grade is returned.
        If none of the conditions match, it defaults to ‘E’ (less than 40).

challenge 2 :Speed Detector Program

        The Speed Detector program aims to determine whether a driver should receive demerit points based on their car’s speed. The rules are as follows:

        If the speed is less than 70 km/h, the program should print “Ok.”
        For every 5 km/h above the speed limit (70 km/h), the driver receives one demerit point.
        If the driver accumulates more than 12 demerit points, the program should print “License suspended.”
Solution Approach
Input Prompt:
        We prompt the user to input the car’s speed (in km/h).
        The input is a numeric value representing the car’s speed.
Calculate Demerit Points:
        We calculate the number of demerit points based on the input speed.
        For every 5 km/h above the speed limit (70 km/h), we add one point.
        We use the formula: demeritPoints = Math.floor((speed - speedLimit) / speedIncrements).
Check License Status:
        If the total demerit points exceed 12, we print “License suspended.”
        Otherwise, we print the total points.

challenge 3:Net Salary Calculator
       This program calculates an individual’s net salary based on the provided basic salary and benefits. It considers various deductions, including PAYE (Tax), NHIF, and NSSF. Below, you’ll find details on how to use the program and explanations of the functions involved.
Input:
       Provide the basicSalary (the individual’s base salary) and benefits (additional compensation, if any).
       These values should be positive numbers.
Functions:
calculateNetSalary(basicSalary, benefits)
       Description:
       Calculates the net salary by subtracting PAYE, NSSF, and NHIF from the gross salary.
       Parameters:
       basicSalary: The individual’s base salary (positive number).
       benefits: Additional compensation (positive number).
       Returns:
       The net salary after deductions
calculatePAYE(grossSalary)
       Description:
       Calculates PAYE (Tax) based on the monthly taxable pay (gross salary).
       Parameters:
       grossSalary: The total salary before deductions.
       Returns:
       The PAYE amount.   
calculateNSSF(grossSalary)
       Description:
       Calculates NSSF deduction based on pensionable pay (gross salary).
       Parameters:
       grossSalary: The total salary before deductions.
       Returns:
       The NSSF deduction.  
calculateNHIF(grossSalary)
        Description
        Calculates NHIF deduction based on gross salary.
        Parameters:
        grossSalary: The total salary before deductions.
        Returns:
        The NHIF deduction.
        
References
        KRA Tax Rates
        KRA Individual Tax Calculator