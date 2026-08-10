// ==========================================
// FORMAT CURRENCY
// ==========================================

function formatCurrency(amount) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);

}



// ==========================================
// INTEREST CALCULATOR
// ==========================================

function calculateInterest() {

    const principal = parseFloat(
        document.getElementById("principal").value
    );

    const rate = parseFloat(
        document.getElementById("rate").value
    );

    let time = parseFloat(
        document.getElementById("time").value
    );

    const timeUnit =
        document.getElementById("timeUnit").value;

    const interestType =
        document.getElementById("interestType").value;

    const frequency =
        parseInt(
            document.getElementById("compoundFrequency").value
        );


    // Validate input

    if (
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(time) ||
        principal <= 0 ||
        rate < 0 ||
        time <= 0
    ) {

        alert("Please enter valid interest details.");

        return;
    }


    // Convert months to years

    if (timeUnit === "months") {

        time = time / 12;
    }


    let interest;

    let totalAmount;


    // Simple Interest

    if (interestType === "simple") {

        interest =
            (principal * rate * time) / 100;

        totalAmount =
            principal + interest;

    }


    // Compound Interest

    else {

        totalAmount =
            principal *
            Math.pow(
                1 + (rate / 100) / frequency,
                frequency * time
            );

        interest =
            totalAmount - principal;
    }


    // Display result

    document.getElementById("interestResult")
        .textContent =
        formatCurrency(interest);

    document.getElementById("totalResult")
        .textContent =
        formatCurrency(totalAmount);
}



// ==========================================
// FD CALCULATOR
// ==========================================

function calculateFD() {

    const principal = parseFloat(
        document.getElementById("fdPrincipal").value
    );

    const rate = parseFloat(
        document.getElementById("fdRate").value
    );

    const time = parseFloat(
        document.getElementById("fdTime").value
    );

    const frequency = parseInt(
        document.getElementById("fdFrequency").value
    );


    // Validate input

    if (
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(time) ||
        principal <= 0 ||
        rate < 0 ||
        time <= 0
    ) {

        alert("Please enter valid FD details.");

        return;
    }


    // Compound interest calculation

    const maturityAmount =
        principal *
        Math.pow(
            1 + (rate / 100) / frequency,
            frequency * time
        );


    const interest =
        maturityAmount - principal;


    // Display result

    document.getElementById("fdInterestResult")
        .textContent =
        formatCurrency(interest);

    document.getElementById("fdTotalResult")
        .textContent =
        formatCurrency(maturityAmount);
}



// ==========================================
// RD CALCULATOR
// ==========================================

function calculateRD() {

    const monthlyDeposit = parseFloat(
        document.getElementById("rdMonthlyDeposit").value
    );

    const rate = parseFloat(
        document.getElementById("rdRate").value
    );

    const years = parseFloat(
        document.getElementById("rdTime").value
    );


    // Validate input

    if (
        isNaN(monthlyDeposit) ||
        isNaN(rate) ||
        isNaN(years) ||
        monthlyDeposit <= 0 ||
        rate < 0 ||
        years <= 0
    ) {

        alert("Please enter valid RD details.");

        return;
    }


    // Convert years to months

    const months =
        Math.round(years * 12);


    // Monthly interest rate

    const monthlyRate =
        rate / 100 / 12;


    let maturityAmount;


    // Zero-interest case

    if (monthlyRate === 0) {

        maturityAmount =
            monthlyDeposit * months;

    }

    else {

        maturityAmount =
            monthlyDeposit *
            (
                (Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1)
                / monthlyRate
            );
    }


    const totalDeposited =
        monthlyDeposit * months;


    const interest =
        maturityAmount - totalDeposited;


    // Display result

    document.getElementById("rdDepositedResult")
        .textContent =
        formatCurrency(totalDeposited);

    document.getElementById("rdInterestResult")
        .textContent =
        formatCurrency(interest);

    document.getElementById("rdTotalResult")
        .textContent =
        formatCurrency(maturityAmount);
}



// ==========================================
// EMI CALCULATOR
// ==========================================

function calculateEMI() {

    const loanAmount = parseFloat(
        document.getElementById("loanAmount").value
    );

    const annualRate = parseFloat(
        document.getElementById("loanRate").value
    );

    let tenure = parseFloat(
        document.getElementById("loanTenure").value
    );

    const tenureUnit =
        document.getElementById("loanTenureUnit").value;


    // Validate input

    if (
        isNaN(loanAmount) ||
        isNaN(annualRate) ||
        isNaN(tenure) ||
        loanAmount <= 0 ||
        annualRate < 0 ||
        tenure <= 0
    ) {

        alert("Please enter valid loan details.");

        return;
    }


    // Convert years to months

    if (tenureUnit === "years") {

        tenure =
            tenure * 12;
    }


    const numberOfMonths =
        Math.round(tenure);


    // Monthly interest rate

    const monthlyRate =
        annualRate / 12 / 100;


    let emi;


    // Zero-interest loan

    if (monthlyRate === 0) {

        emi =
            loanAmount / numberOfMonths;

    }

    else {

        /*
            EMI Formula:

            EMI =
            P × R × (1 + R)^N
            -----------------
                (1 + R)^N - 1

            P = Loan Amount
            R = Monthly Interest Rate
            N = Number of Months
        */

        const power =
            Math.pow(
                1 + monthlyRate,
                numberOfMonths
            );


        emi =
            loanAmount *
            monthlyRate *
            power /
            (power - 1);
    }


    // Total payment

    const totalPayment =
        emi * numberOfMonths;


    // Total interest

    const totalInterest =
        totalPayment - loanAmount;


    // Display result

    document.getElementById("emiResult")
        .textContent =
        formatCurrency(emi);

    document.getElementById("emiInterestResult")
        .textContent =
        formatCurrency(totalInterest);

    document.getElementById("emiTotalResult")
        .textContent =
        formatCurrency(totalPayment);
}



// ==========================================
// SWITCH BETWEEN CALCULATORS
// ==========================================

function showCalculator(type) {

    const interestCalculator =
        document.getElementById("interestCalculator");

    const fdCalculator =
        document.getElementById("fdCalculator");

    const rdCalculator =
        document.getElementById("rdCalculator");

    const emiCalculator =
        document.getElementById("emiCalculator");


    // Hide all calculators

    interestCalculator.style.display = "none";

    fdCalculator.style.display = "none";

    rdCalculator.style.display = "none";

    emiCalculator.style.display = "none";


    // Show selected calculator

    if (type === "interest") {

        interestCalculator.style.display = "block";

    }

    else if (type === "fd") {

        fdCalculator.style.display = "block";

    }

    else if (type === "rd") {

        rdCalculator.style.display = "block";

    }

    else if (type === "emi") {

        emiCalculator.style.display = "block";
    }
}