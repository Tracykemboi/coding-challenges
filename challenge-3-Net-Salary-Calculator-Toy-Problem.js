// Function to calculate net salary
function calculateNetSalary(basicSalary,benefits) {
    const grossSalary=basicSalary+benefits
    const paye = calculatePAYE(grossSalary)
    const nssf=calculateNSSF(grossSalary)
    const nhif=calculateNHIF(grossSalary)
    // Function to calculate PAYE (Tax) based on monthly taxable pay(grossSalary)
    function calculatePAYE(grossSalary) {
        if (grossSalary <= 24000) {
            return grossSalary * 0.10;
        } else if (grossSalary <= 32333) {
            return grossSalary * 0.25;
        } else if (grossSalary <= 500000) {
            return grossSalary * 0.30;
        } else if (grossSalary <= 800000) {
            return grossSalary * 0.325;
        } else {
            return grossSalary * 0.35;
        }
    }
    // Function to calculate NSSF deduction based on pensionable pay(grossSalary)
    function calculateNSSF(grossSalary) {
        return grossSalary *0.06
    
    }
    // Function to calculate NHIF deduction based on grossSalary(gross Pay)
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) {
          return 150;
        } else if (grossSalary <= 7999) {
          return 300;
        } else if (grossSalary <= 11999) {
          return 400;
        } else if (grossSalary <= 14999) {
          return 500;
        } else if (grossSalary <= 19999) {
          return 600;
        } else if (grossSalary <= 24999) {
          return 750;
        } else if (grossSalary <= 29999) {
          return 850;
        } else if (grossSalary <= 34999) {
          return 900;
        } else if (grossSalary <= 44999) {
          return 1000;
        } else if (grossSalary <= 49999) {
          return 1100;
        } else if (grossSalary <= 59999) {
          return 1200;
        } else if (grossSalary <= 69999) {
          return 1300;
        } else if (grossSalary <= 79999) {
          return 1400;
        } else if (grossSalary <= 89999) {
          return 1500;
        } else if (grossSalary <= 99999) {
          return 1600;
        } else {
          return 1700;
        }
      }
      
    const netSalary = grossSalary-paye-nssf-nhif// formula to calculate net salary

    return netSalary;
}