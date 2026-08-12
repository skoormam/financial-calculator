// ============================================================
// FINANCE APP BY SURENDRA
// COMPLETE script.js - English + Telugu
// ============================================================

const LANG = {
    en: {
        appTitle: "Finance App",
        by: "by Surendra",

        interest: "Interest",
        fd: "FD",
        rd: "RD",
        emi: "EMI",

        interestCalculator: "Interest Calculator",
        interestDesc: "Calculate Simple & Compound Interest",

        fdCalculator: "FD Calculator",
        fdDesc: "Calculate Fixed Deposit maturity amount",

        rdCalculator: "RD Calculator",
        rdDesc: "Calculate Recurring Deposit maturity amount",

        emiCalculator: "EMI Calculator",
        emiDesc: "Calculate your monthly loan EMI",

        principal: "Principal Amount (₹)",
        interestRate: "Interest Rate (%)",
        period: "Period",

        years: "Years",
        months: "Months",

        interestType: "Interest Type",
        simpleInterest: "Simple Interest",
        compoundInterest: "Compound Interest",

        compoundingFrequency: "Compounding Frequency",
        annually: "Annually",
        halfYearly: "Half-Yearly",
        quarterly: "Quarterly",
        monthly: "Monthly",

        calculate: "Calculate",
        reset: "Reset",

        result: "Result",
        interest: "Interest",
        totalAmount: "Total Amount",

        depositAmount: "Deposit Amount (₹)",
        maturityAmount: "Maturity Amount",
        interestEarned: "Interest Earned",

        monthlyDeposit: "Monthly Deposit (₹)",
        totalDeposited: "Total Deposited",

        loanAmount: "Loan Amount (₹)",
        tenure: "Loan Tenure",

        monthlyEMI: "Monthly EMI",
        yearlyPayment: "Yearly Payment",
        totalInterest: "Total Interest",
        totalPayment: "Total Payment",

        interestAnalysis: "📊 Interest Analysis",
        fdAnalysis: "📊 FD Analysis",
        rdAnalysis: "📊 RD Analysis",
        emiAnalysis: "📊 EMI Analysis",

        principalVsInterest: "Principal vs Interest",
        depositsVsInterest: "Deposits vs Interest",
        yearlyFDGrowth: "Year-wise FD Growth",
        yearlyRDGrowth: "Year-wise RD Growth",
        remainingLoan: "Remaining Loan Balance",

        principal: "Principal",
        interestLabel: "Interest",
        depositLabel: "Deposit",
        balance: "Balance",

        yearlyBreakdown: "Year-wise Breakdown",
        year: "Year",
        principalPaid: "Principal Paid",
        interestPaid: "Interest Paid",

        copyResults: "📋 Copy Results",
        whatsapp: "📱 WhatsApp",
        savePDF: "📄 Save PDF",
        copied: "✅ Copied!",

        enterAmount: "Enter amount",
        enterInterestRate: "Enter interest rate",
        enterPeriod: "Enter period",
        enterDeposit: "Enter deposit amount",
        enterLoanAmount: "Enter loan amount",
        enterTenure: "Enter loan tenure",

        language: "Select language",

        generated: "Generated",
        calculatedUsing:
            "Calculated using Finance App by Surendra.",

        invalid:
            "is too large or invalid.",

        greaterZero:
            "must be greater than 0.",

        rateRange:
            "Interest rate must be between 0% and 100%.",

        tooLarge:
            "The calculated result is too large. Please use smaller values.",

        principalField:
            "a principal amount",

        periodField:
            "a period",

        depositField:
            "a deposit amount",

        monthlyDepositField:
            "a monthly deposit",

        loanField:
            "a loan amount",

        tenureField:
            "a loan tenure",

        calculatorNotFound:
            "Calculator could not be found.",

        popup:
            "Please allow pop-ups for this Finance App to save the PDF."
    },


    te: {
        appTitle: "ఫైనాన్స్ యాప్",
        by: "సురేంద్ర",

        interest: "వడ్డీ",
        fd: "FD",
        rd: "RD",
        emi: "EMI",

        interestCalculator:
            "వడ్డీ కాలిక్యులేటర్",

        interestDesc:
            "సాధారణ & చక్రవడ్డీ లెక్కించండి",

        fdCalculator:
            "FD కాలిక్యులేటర్",

        fdDesc:
            "ఫిక్స్‌డ్ డిపాజిట్ మెచ్యూరిటీ మొత్తాన్ని లెక్కించండి",

        rdCalculator:
            "RD కాలిక్యులేటర్",

        rdDesc:
            "రికరింగ్ డిపాజిట్ మెచ్యూరిటీ మొత్తాన్ని లెక్కించండి",

        emiCalculator:
            "EMI కాలిక్యులేటర్",

        emiDesc:
            "మీ నెలవారీ లోన్ EMIని లెక్కించండి",

        principal:
            "అసలు మొత్తం (₹)",

        interestRate:
            "వడ్డీ రేటు (%)",

        period:
            "కాల వ్యవధి",

        years:
            "సంవత్సరాలు",

        months:
            "నెలలు",

        interestType:
            "వడ్డీ రకం",

        simpleInterest:
            "సాధారణ వడ్డీ",

        compoundInterest:
            "చక్రవడ్డీ",

        compoundingFrequency:
            "చక్రవడ్డీ తరచుదనం",

        annually:
            "ఏటా",

        halfYearly:
            "అర్ధ సంవత్సరానికి",

        quarterly:
            "త్రైమాసికం",

        monthly:
            "నెలవారీ",

        calculate:
            "లెక్కించు",

        reset:
            "రీసెట్",

        result:
            "ఫలితం",

        interest:
            "వడ్డీ",

        totalAmount:
            "మొత్తం మొత్తం",

        depositAmount:
            "డిపాజిట్ మొత్తం (₹)",

        maturityAmount:
            "మెచ్యూరిటీ మొత్తం",

        interestEarned:
            "ఆర్జించిన వడ్డీ",

        monthlyDeposit:
            "నెలవారీ డిపాజిట్ (₹)",

        totalDeposited:
            "మొత్తం డిపాజిట్",

        loanAmount:
            "లోన్ మొత్తం (₹)",

        tenure:
            "లోన్ కాలవ్యవధి",

        monthlyEMI:
            "నెలవారీ EMI",

        yearlyPayment:
            "వార్షిక చెల్లింపు",

        totalInterest:
            "మొత్తం వడ్డీ",

        totalPayment:
            "మొత్తం చెల్లింపు",

        interestAnalysis:
            "📊 వడ్డీ విశ్లేషణ",

        fdAnalysis:
            "📊 FD విశ్లేషణ",

        rdAnalysis:
            "📊 RD విశ్లేషణ",

        emiAnalysis:
            "📊 EMI విశ్లేషణ",

        principalVsInterest:
            "అసలు మొత్తం vs వడ్డీ",

        depositsVsInterest:
            "డిపాజిట్లు vs వడ్డీ",

        yearlyFDGrowth:
            "సంవత్సరాల వారీ FD వృద్ధి",

        yearlyRDGrowth:
            "సంవత్సరాల వారీ RD వృద్ధి",

        remainingLoan:
            "మిగిలిన లోన్ బకాయి",

        principal:
            "అసలు మొత్తం",

        interestLabel:
            "వడ్డీ",

        depositLabel:
            "డిపాజిట్",

        balance:
            "బ్యాలెన్స్",

        yearlyBreakdown:
            "సంవత్సరాల వారీ వివరాలు",

        year:
            "సంవత్సరం",

        principalPaid:
            "చెల్లించిన అసలు",

        interestPaid:
            "చెల్లించిన వడ్డీ",

        copyResults:
            "📋 ఫలితాలను కాపీ చేయండి",

        whatsapp:
            "📱 WhatsApp",

        savePDF:
            "📄 PDF సేవ్ చేయండి",

        copied:
            "✅ కాపీ అయింది!",

        enterAmount:
            "మొత్తం నమోదు చేయండి",

        enterInterestRate:
            "వడ్డీ రేటు నమోదు చేయండి",

        enterPeriod:
            "కాలవ్యవధి నమోదు చేయండి",

        enterDeposit:
            "డిపాజిట్ మొత్తం నమోదు చేయండి",

        enterLoanAmount:
            "లోన్ మొత్తం నమోదు చేయండి",

        enterTenure:
            "లోన్ కాలవ్యవధి నమోదు చేయండి",

        language:
            "భాషను ఎంచుకోండి",

        generated:
            "రూపొందించిన సమయం",

        calculatedUsing:
            "Finance App by Surendra ద్వారా లెక్కించబడింది.",

        invalid:
            "చాలా పెద్దది లేదా చెల్లదు.",

        greaterZero:
            "0 కంటే ఎక్కువగా ఉండాలి.",

        rateRange:
            "వడ్డీ రేటు 0% నుండి 100% మధ్య ఉండాలి.",

        tooLarge:
            "లెక్కించిన ఫలితం చాలా పెద్దది. దయచేసి చిన్న విలువలను ఉపయోగించండి.",

        principalField:
            "అసలు మొత్తాన్ని",

        periodField:
            "కాలవ్యవధిని",

        depositField:
            "డిపాజిట్ మొత్తాన్ని",

        monthlyDepositField:
            "నెలవారీ డిపాజిట్‌ను",

        loanField:
            "లోన్ మొత్తాన్ని",

        tenureField:
            "లోన్ కాలవ్యవధిని",

        calculatorNotFound:
            "కాలిక్యులేటర్ కనుగొనబడలేదు.",

        popup:
            "PDF సేవ్ చేయడానికి ఈ Finance App కోసం పాప్-అప్స్‌ను అనుమతించండి."
    }
};


// ============================================================
// CURRENT LANGUAGE
// ============================================================

let currentLanguage =
    localStorage.getItem(
        "financeCalculatorLanguage"
    ) || "en";


function t(key) {

    if (
        LANG[currentLanguage] &&
        LANG[currentLanguage][key]
    ) {
        return LANG[currentLanguage][key];
    }

    if (LANG.en[key]) {
        return LANG.en[key];
    }

    return key;
}


// ============================================================
// CURRENCY
// ============================================================

function formatCurrency(amount) {

    if (!Number.isFinite(amount)) {
        return "₹0.00";
    }

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    ).format(amount);
}


// ============================================================
// SHOW CALCULATOR
// ============================================================

function showCalculator(type) {

    const calculators = {

        interest:
            "interestCalculator",

        fd:
            "fdCalculator",

        rd:
            "rdCalculator",

        emi:
            "emiCalculator"
    };


    Object.values(calculators)
        .forEach(function (id) {

            const element =
                document.getElementById(id);

            if (element) {
                element.classList.add("hidden");
            }

        });


    const active =
        document.getElementById(
            calculators[type]
        );

    if (active) {
        active.classList.remove("hidden");
    }


    document
        .querySelectorAll(".tab-button")
        .forEach(function (button) {

            button.classList.remove("active");

        });


    const activeTab =
        document.querySelector(
            `.tab-button[data-calculator="${type}"]`
        );

    if (activeTab) {
        activeTab.classList.add("active");
    }
}


// ============================================================
// VALIDATION
// ============================================================

function validateNumber(
    value,
    fieldName,
    errorElement
) {

    if (!Number.isFinite(value)) {

        errorElement.textContent =
            `${fieldName} ${t("invalid")}`;

        return false;
    }


    if (value <= 0) {

        errorElement.textContent =
            `${fieldName} ${t("greaterZero")}`;

        return false;
    }


    if (value > 1000000000000) {

        errorElement.textContent =
            `${fieldName} ${t("invalid")}`;

        return false;
    }


    return true;
}


function validateRate(
    rate,
    errorElement
) {

    if (
        !Number.isFinite(rate) ||
        rate < 0 ||
        rate > 100
    ) {

        errorElement.textContent =
            t("rateRange");

        return false;
    }


    return true;
}


function validateResult(
    value,
    errorElement
) {

    if (!Number.isFinite(value)) {

        errorElement.textContent =
            t("tooLarge");

        return false;
    }


    return true;
}


// ============================================================
// REMOVE ANALYSIS
// ============================================================

function removeAnalysis(id) {

    const element =
        document.getElementById(id);

    if (element) {
        element.remove();
    }
}


// ============================================================
// INTEREST CALCULATOR
// ============================================================

function calculateInterest() {

    const principal =
        parseFloat(
            document.getElementById(
                "principal"
            ).value
        );


    const rate =
        parseFloat(
            document.getElementById(
                "rate"
            ).value
        );


    let time =
        parseFloat(
            document.getElementById(
                "time"
            ).value
        );


    const unit =
        document.getElementById(
            "timeUnit"
        ).value;


    const interestType =
        document.getElementById(
            "interestType"
        ).value;


    const frequency =
        parseInt(
            document.getElementById(
                "compoundFrequency"
            ).value
        );


    const error =
        document.getElementById(
            "interestError"
        );


    error.textContent = "";


    if (
        !validateNumber(
            principal,
            t("principalField"),
            error
        )
    ) {
        return;
    }


    if (
        !validateRate(
            rate,
            error
        )
    ) {
        return;
    }


    if (
        !validateNumber(
            time,
            t("periodField"),
            error
        )
    ) {
        return;
    }


    if (unit === "months") {
        time = time / 12;
    }


    let totalAmount;


    if (
        interestType === "simple"
    ) {

        totalAmount =
            principal +
            (
                principal *
                rate *
                time /
                100
            );

    } else {

        totalAmount =
            principal *
            Math.pow(
                1 +
                (rate / 100) /
                frequency,
                frequency * time
            );
    }


    const interest =
        totalAmount -
        principal;


    if (
        !validateResult(
            totalAmount,
            error
        )
    ) {
        return;
    }


    if (
        !validateResult(
            interest,
            error
        )
    ) {
        return;
    }


    document.getElementById(
        "interestResult"
    ).textContent =
        formatCurrency(
            interest
        );


    document.getElementById(
        "totalResult"
    ).textContent =
        formatCurrency(
            totalAmount
        );


    createInterestAnalysis(
        principal,
        interest,
        totalAmount
    );


    saveCalculatorValues();
}


// ============================================================
// INTEREST ANALYSIS
// ============================================================

function createInterestAnalysis(
    principal,
    interest,
    totalAmount
) {

    removeAnalysis(
        "interestAnalysis"
    );


    const section =
        document.getElementById(
            "interestCalculator"
        );


    if (!section) {
        return;
    }


    const analysis =
        document.createElement(
            "div"
        );


    analysis.id =
        "interestAnalysis";


    analysis.className =
        "result-card";


    analysis.innerHTML = `

        <h3>
            ${t("interestAnalysis")}
        </h3>

        <div class="chart-title">
            ${t("principalVsInterest")}
        </div>

        ${createDonutChartHTML(
            principal,
            interest,
            t("principal"),
            t("interestLabel")
        )}

        <div class="analysis-summary">

            <div>

                <small>
                    ${t("principal")}
                </small>

                <strong>
                    ${formatCurrency(principal)}
                </strong>

            </div>


            <div>

                <small>
                    ${t("interestLabel")}
                </small>

                <strong>
                    ${formatCurrency(interest)}
                </strong>

            </div>


            <div>

                <small>
                    ${t("totalAmount")}
                </small>

                <strong>
                    ${formatCurrency(totalAmount)}
                </strong>

            </div>

        </div>

    `;


    section.appendChild(
        analysis
    );
}


// ============================================================
// FD CALCULATOR
// ============================================================

function calculateFD() {

    const principal =
        parseFloat(
            document.getElementById(
                "fdPrincipal"
            ).value
        );


    const rate =
        parseFloat(
            document.getElementById(
                "fdRate"
            ).value
        );


    const time =
        parseFloat(
            document.getElementById(
                "fdTime"
            ).value
        );


    const frequency =
        parseInt(
            document.getElementById(
                "fdFrequency"
            ).value
        );


    const error =
        document.getElementById(
            "fdError"
        );


    error.textContent = "";


    if (
        !validateNumber(
            principal,
            t("depositField"),
            error
        )
    ) {
        return;
    }


    if (
        !validateRate(
            rate,
            error
        )
    ) {
        return;
    }


    if (
        !validateNumber(
            time,
            t("periodField"),
            error
        )
    ) {
        return;
    }


    const maturity =
        principal *
        Math.pow(
            1 +
            (rate / 100) /
            frequency,
            frequency * time
        );


    const interest =
        maturity -
        principal;


    if (
        !validateResult(
            maturity,
            error
        )
    ) {
        return;
    }


    document.getElementById(
        "fdInterestResult"
    ).textContent =
        formatCurrency(
            interest
        );


    document.getElementById(
        "fdTotalResult"
    ).textContent =
        formatCurrency(
            maturity
        );


    createFDAnalysis(
        principal,
        rate,
        time,
        frequency,
        interest,
        maturity
    );


    saveCalculatorValues();
}


// ============================================================
// FD ANALYSIS
// ============================================================

function createFDAnalysis(
    principal,
    rate,
    time,
    frequency,
    totalInterest,
    maturity
) {

    removeAnalysis(
        "fdAnalysis"
    );


    const section =
        document.getElementById(
            "fdCalculator"
        );


    if (!section) {
        return;
    }


    const data = [];

    let previous =
        principal;


    let rows = "";


    for (
        let year = 1;
        year <= Math.ceil(time);
        year++
    ) {

        const completed =
            Math.min(
                year,
                time
            );


        const balance =
            principal *
            Math.pow(
                1 +
                (rate / 100) /
                frequency,
                frequency *
                completed
            );


        const yearlyInterest =
            balance -
            previous;


        data.push({
            year: year,
            balance: balance
        });


        rows += `

            <tr>

                <td>
                    ${year}
                </td>

                <td>
                    ${formatCurrency(
                        yearlyInterest
                    )}
                </td>

                <td>
                    ${formatCurrency(
                        balance
                    )}
                </td>

            </tr>

        `;


        previous =
            balance;
    }


    const analysis =
        document.createElement(
            "div"
        );


    analysis.id =
        "fdAnalysis";


    analysis.className =
        "result-card";


    analysis.innerHTML = `

        <h3>
            ${t("fdAnalysis")}
        </h3>


        <div class="analysis-summary">

            <div>

                <small>
                    ${t("depositAmount")}
                </small>

                <strong>
                    ${formatCurrency(
                        principal
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("interestEarned")}
                </small>

                <strong>
                    ${formatCurrency(
                        totalInterest
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("maturityAmount")}
                </small>

                <strong>
                    ${formatCurrency(
                        maturity
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("interestRate")}
                </small>

                <strong>
                    ${rate}%
                </strong>

            </div>

        </div>


        <div class="chart-title">
            ${t("principalVsInterest")}
        </div>


        ${createDonutChartHTML(
            principal,
            totalInterest,
            t("principal"),
            t("interestLabel")
        )}


        <div class="chart-title">
            ${t("yearlyFDGrowth")}
        </div>


        ${createBarChartHTML(
            data.map(
                item => item.year
            ),
            data.map(
                item => item.balance
            )
        )}


        <h4>
            ${t("yearlyBreakdown")}
        </h4>


        <div class="table-scroll">

            <table class="analysis-table">

                <thead>

                    <tr>

                        <th>
                            ${t("year")}
                        </th>

                        <th>
                            ${t("interestEarned")}
                        </th>

                        <th>
                            ${t("balance")}
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;


    section.appendChild(
        analysis
    );
}


// ============================================================
// RD CALCULATOR
// ============================================================

function calculateRD() {

    const monthlyDeposit =
        parseFloat(
            document.getElementById(
                "rdMonthlyDeposit"
            ).value
        );


    const rate =
        parseFloat(
            document.getElementById(
                "rdRate"
            ).value
        );


    const years =
        parseFloat(
            document.getElementById(
                "rdTime"
            ).value
        );


    const error =
        document.getElementById(
            "rdError"
        );


    error.textContent = "";


    if (
        !validateNumber(
            monthlyDeposit,
            t("monthlyDepositField"),
            error
        )
    ) {
        return;
    }


    if (
        !validateRate(
            rate,
            error
        )
    ) {
        return;
    }


    if (
        !validateNumber(
            years,
            t("periodField"),
            error
        )
    ) {
        return;
    }


    const months =
        Math.round(
            years * 12
        );


    const monthlyRate =
        rate / 100 / 12;


    let maturity;


    if (
        monthlyRate === 0
    ) {

        maturity =
            monthlyDeposit *
            months;

    } else {

        maturity =
            monthlyDeposit *
            (
                (
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) -
                    1
                ) /
                monthlyRate
            );
    }


    const deposited =
        monthlyDeposit *
        months;


    const interest =
        maturity -
        deposited;


    if (
        !validateResult(
            maturity,
            error
        )
    ) {
        return;
    }


    document.getElementById(
        "rdDepositedResult"
    ).textContent =
        formatCurrency(
            deposited
        );


    document.getElementById(
        "rdInterestResult"
    ).textContent =
        formatCurrency(
            interest
        );


    document.getElementById(
        "rdTotalResult"
    ).textContent =
        formatCurrency(
            maturity
        );


    createRDAnalysis(
        monthlyDeposit,
        rate,
        years,
        months,
        deposited,
        interest,
        maturity
    );


    saveCalculatorValues();
}


// ============================================================
// RD ANALYSIS
// ============================================================

function createRDAnalysis(
    monthlyDeposit,
    rate,
    years,
    months,
    deposited,
    totalInterest,
    maturity
) {

    removeAnalysis(
        "rdAnalysis"
    );


    const section =
        document.getElementById(
            "rdCalculator"
        );


    if (!section) {
        return;
    }


    const data = [];

    let previous = 0;

    let rows = "";


    const monthlyRate =
        rate / 100 / 12;


    for (
        let year = 1;
        year <= Math.ceil(years);
        year++
    ) {

        const endMonth =
            Math.min(
                year * 12,
                months
            );


        const startMonth =
            (year - 1) * 12;


        const monthsThisYear =
            endMonth -
            startMonth;


        const depositedThisYear =
            monthlyDeposit *
            monthsThisYear;


        let balance;


        if (
            monthlyRate === 0
        ) {

            balance =
                monthlyDeposit *
                endMonth;

        } else {

            balance =
                monthlyDeposit *
                (
                    (
                        Math.pow(
                            1 + monthlyRate,
                            endMonth
                        ) -
                        1
                    ) /
                    monthlyRate
                );
        }


        const interestThisYear =
            balance -
            previous -
            depositedThisYear;


        data.push({
            year: year,
            balance: balance
        });


        rows += `

            <tr>

                <td>
                    ${year}
                </td>

                <td>
                    ${formatCurrency(
                        depositedThisYear
                    )}
                </td>

                <td>
                    ${formatCurrency(
                        interestThisYear
                    )}
                </td>

                <td>
                    ${formatCurrency(
                        balance
                    )}
                </td>

            </tr>

        `;


        previous =
            balance;
    }


    const analysis =
        document.createElement(
            "div"
        );


    analysis.id =
        "rdAnalysis";


    analysis.className =
        "result-card";


    analysis.innerHTML = `

        <h3>
            ${t("rdAnalysis")}
        </h3>


        <div class="analysis-summary">

            <div>

                <small>
                    ${t("monthlyDeposit")}
                </small>

                <strong>
                    ${formatCurrency(
                        monthlyDeposit
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("totalDeposited")}
                </small>

                <strong>
                    ${formatCurrency(
                        deposited
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("interestEarned")}
                </small>

                <strong>
                    ${formatCurrency(
                        totalInterest
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("maturityAmount")}
                </small>

                <strong>
                    ${formatCurrency(
                        maturity
                    )}
                </strong>

            </div>

        </div>


        <div class="chart-title">
            ${t("depositsVsInterest")}
        </div>


        ${createDonutChartHTML(
            deposited,
            totalInterest,
            t("depositLabel"),
            t("interestLabel")
        )}


        <div class="chart-title">
            ${t("yearlyRDGrowth")}
        </div>


        ${createBarChartHTML(
            data.map(
                item => item.year
            ),
            data.map(
                item => item.balance
            )
        )}


        <h4>
            ${t("yearlyBreakdown")}
        </h4>


        <div class="table-scroll">

            <table class="analysis-table">

                <thead>

                    <tr>

                        <th>
                            ${t("year")}
                        </th>

                        <th>
                            ${t("totalDeposited")}
                        </th>

                        <th>
                            ${t("interestPaid")}
                        </th>

                        <th>
                            ${t("balance")}
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;


    section.appendChild(
        analysis
    );
}


// ============================================================
// EMI CALCULATOR
// ============================================================

function calculateEMI() {

    const loanAmount =
        parseFloat(
            document.getElementById(
                "loanAmount"
            ).value
        );


    const annualRate =
        parseFloat(
            document.getElementById(
                "loanRate"
            ).value
        );


    let tenure =
        parseFloat(
            document.getElementById(
                "loanTenure"
            ).value
        );


    const tenureUnit =
        document.getElementById(
            "loanTenureUnit"
        ).value;


    const error =
        document.getElementById(
            "emiError"
        );


    error.textContent = "";


    if (
        !validateNumber(
            loanAmount,
            t("loanField"),
            error
        )
    ) {
        return;
    }


    if (
        !validateRate(
            annualRate,
            error
        )
    ) {
        return;
    }


    if (
        !validateNumber(
            tenure,
            t("tenureField"),
            error
        )
    ) {
        return;
    }


    if (
        tenureUnit === "years"
    ) {

        tenure =
            tenure * 12;
    }


    const months =
        Math.round(
            tenure
        );


    const monthlyRate =
        annualRate /
        12 /
        100;


    let emi;


    if (
        monthlyRate === 0
    ) {

        emi =
            loanAmount /
            months;

    } else {

        const power =
            Math.pow(
                1 + monthlyRate,
                months
            );


        emi =
            loanAmount *
            monthlyRate *
            power /
            (
                power - 1
            );
    }


    const totalPayment =
        emi *
        months;


    const totalInterest =
        totalPayment -
        loanAmount;


    if (
        !validateResult(
            emi,
            error
        )
    ) {
        return;
    }


    document.getElementById(
        "emiResult"
    ).textContent =
        formatCurrency(
            emi
        );


    document.getElementById(
        "emiInterestResult"
    ).textContent =
        formatCurrency(
            totalInterest
        );


    document.getElementById(
        "emiTotalResult"
    ).textContent =
        formatCurrency(
            totalPayment
        );


    createEMIAnalysis(
        loanAmount,
        annualRate,
        months,
        emi,
        totalInterest,
        totalPayment
    );


    saveCalculatorValues();
}


// ============================================================
// EMI ANALYSIS
// ============================================================

function createEMIAnalysis(
    loanAmount,
    annualRate,
    months,
    emi,
    totalInterest,
    totalPayment
) {

    removeAnalysis(
        "emiAnalysis"
    );


    const section =
        document.getElementById(
            "emiCalculator"
        );


    if (!section) {
        return;
    }


    let balance =
        loanAmount;


    const data = [];

    let rows = "";


    const totalYears =
        Math.ceil(
            months / 12
        );


    for (
        let year = 1;
        year <= totalYears;
        year++
    ) {

        let yearlyPrincipal = 0;

        let yearlyInterest = 0;


        const startMonth =
            (year - 1) * 12 + 1;


        const endMonth =
            Math.min(
                year * 12,
                months
            );


        for (
            let month = startMonth;
            month <= endMonth;
            month++
        ) {

            if (
                balance <= 0
            ) {
                break;
            }


            const monthlyInterest =
                balance *
                annualRate /
                12 /
                100;


            let monthlyPrincipal =
                emi -
                monthlyInterest;


            if (
                monthlyPrincipal >
                balance
            ) {

                monthlyPrincipal =
                    balance;
            }


            balance -=
                monthlyPrincipal;


            if (
                balance < 0
            ) {

                balance = 0;
            }


            yearlyPrincipal +=
                monthlyPrincipal;


            yearlyInterest +=
                monthlyInterest;
        }


        data.push({
            year: year,
            balance: balance
        });


        rows += `

            <tr>

                <td>
                    ${year}
                </td>

                <td>
                    ${formatCurrency(
                        yearlyPrincipal
                    )}
                </td>

                <td>
                    ${formatCurrency(
                        yearlyInterest
                    )}
                </td>

                <td>
                    ${formatCurrency(
                        balance
                    )}
                </td>

            </tr>

        `;
    }


    const analysis =
        document.createElement(
            "div"
        );


    analysis.id =
        "emiAnalysis";


    analysis.className =
        "result-card";


    analysis.innerHTML = `

        <h3>
            ${t("emiAnalysis")}
        </h3>


        <div class="analysis-summary">

            <div>

                <small>
                    ${t("monthlyEMI")}
                </small>

                <strong>
                    ${formatCurrency(
                        emi
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("yearlyPayment")}
                </small>

                <strong>
                    ${formatCurrency(
                        emi * 12
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("totalInterest")}
                </small>

                <strong>
                    ${formatCurrency(
                        totalInterest
                    )}
                </strong>

            </div>


            <div>

                <small>
                    ${t("totalPayment")}
                </small>

                <strong>
                    ${formatCurrency(
                        totalPayment
                    )}
                </strong>

            </div>

        </div>


        <div class="chart-title">
            ${t("principalVsInterest")}
        </div>


        ${createDonutChartHTML(
            loanAmount,
            totalInterest,
            t("principal"),
            t("interestLabel")
        )}


        <div class="chart-title">
            ${t("remainingLoan")}
        </div>


        ${createBarChartHTML(
            data.map(
                item => item.year
            ),
            data.map(
                item => item.balance
            )
        )}


        <h4>
            ${t("yearlyBreakdown")}
        </h4>


        <div class="table-scroll">

            <table class="analysis-table">

                <thead>

                    <tr>

                        <th>
                            ${t("year")}
                        </th>

                        <th>
                            ${t("principalPaid")}
                        </th>

                        <th>
                            ${t("interestPaid")}
                        </th>

                        <th>
                            ${t("balance")}
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;


    section.appendChild(
        analysis
    );
}


// ============================================================
// DONUT CHART
// ============================================================

function createDonutChartHTML(
    value1,
    value2,
    label1,
    label2
) {

    const total =
        value1 +
        value2;


    if (
        !Number.isFinite(total) ||
        total <= 0
    ) {
        return "";
    }


    const percentage1 =
        (
            value1 /
            total
        ) *
        100;


    const percentage2 =
        (
            value2 /
            total
        ) *
        100;


    const radius = 58;


    const circumference =
        2 *
        Math.PI *
        radius;


    const dash1 =
        circumference *
        percentage1 /
        100;


    const dash2 =
        circumference *
        percentage2 /
        100;


    return `

        <div
            style="
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                margin:15px 0 20px;
            "
        >

            <div
                style="
                    position:relative;
                    width:210px;
                    height:210px;
                "
            >

                <svg
                    viewBox="0 0 160 160"
                    width="210"
                    height="210"
                    style="
                        display:block;
                        transform:rotate(-90deg);
                    "
                >

                    <circle
                        cx="80"
                        cy="80"
                        r="${radius}"
                        fill="none"
                        stroke="#e5e7eb"
                        stroke-width="26"
                    ></circle>


                    <circle
                        cx="80"
                        cy="80"
                        r="${radius}"
                        fill="none"
                        stroke="#2563eb"
                        stroke-width="26"
                        stroke-dasharray="
                            ${dash1}
                            ${circumference - dash1}
                        "
                    ></circle>


                    <circle
                        cx="80"
                        cy="80"
                        r="${radius}"
                        fill="none"
                        stroke="#f59e0b"
                        stroke-width="26"
                        stroke-dasharray="
                            ${dash2}
                            ${circumference - dash2}
                        "
                        stroke-dashoffset="${-dash1}"
                    ></circle>

                </svg>


                <div
                    style="
                        position:absolute;
                        left:50%;
                        top:50%;
                        transform:
                            translate(-50%,-50%);
                        width:100px;
                        height:100px;
                        border-radius:50%;
                        background:#ffffff;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        text-align:center;
                    "
                >

                    <strong
                        style="
                            font-size:18px;
                            color:#111827;
                        "
                    >
                        ${percentage1.toFixed(2)}%
                    </strong>


                    <span
                        style="
                            font-size:11px;
                            color:#6b7280;
                        "
                    >
                        ${escapeHTML(label1)}
                    </span>

                </div>

            </div>


            <div
                style="
                    width:100%;
                    max-width:330px;
                    margin-top:15px;
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        padding:7px 4px;
                        font-size:12px;
                    "
                >

                    <span>
                        🔵 ${escapeHTML(label1)}
                    </span>

                    <strong>
                        ${formatCurrency(value1)}
                    </strong>

                </div>


                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        padding:7px 4px;
                        font-size:12px;
                    "
                >

                    <span>
                        🟠 ${escapeHTML(label2)}
                    </span>

                    <strong>
                        ${formatCurrency(value2)}
                    </strong>

                </div>

            </div>

        </div>

    `;
}


// ============================================================
// BAR CHART
// ============================================================

function createBarChartHTML(
    labels,
    values
) {

    if (
        !labels ||
        !values ||
        labels.length === 0
    ) {
        return "";
    }


    const maxValue =
        Math.max(
            ...values
        );


    if (
        !Number.isFinite(maxValue) ||
        maxValue <= 0
    ) {
        return "";
    }


    let html = `

        <div
            style="
                width:100%;
                margin:15px 0 20px;
            "
        >
    `;


    labels.forEach(
        function (
            label,
            index
        ) {

            const value =
                Number(
                    values[index]
                ) || 0;


            const percentage =
                (
                    value /
                    maxValue
                ) *
                100;


            html += `

                <div
                    style="
                        display:grid;
                        grid-template-columns:
                            45px 1fr;
                        gap:8px;
                        align-items:center;
                        margin:8px 0;
                    "
                >

                    <div
                        style="
                            font-size:11px;
                            font-weight:600;
                        "
                    >
                        Y${escapeHTML(label)}
                    </div>


                    <div>

                        <div
                            style="
                                height:18px;
                                background:#e5e7eb;
                                border-radius:5px;
                                overflow:hidden;
                            "
                        >

                            <div
                                style="
                                    width:${percentage}%;
                                    height:100%;
                                    background:#2563eb;
                                "
                            ></div>

                        </div>


                        <div
                            style="
                                font-size:10px;
                                margin-top:2px;
                                text-align:right;
                            "
                        >
                            ${formatCurrency(value)}
                        </div>

                    </div>

                </div>

            `;

        }
    );


    html += `
        </div>
    `;


    return html;
}


// ============================================================
// TABS
// ============================================================

function setupTabs() {

    document
        .querySelectorAll(
            ".tab-button"
        )
        .forEach(
            function (tab) {

                tab.addEventListener(
                    "click",
                    function () {

                        showCalculator(
                            tab.dataset.calculator
                        );

                    }
                );

            }
        );
}


// ============================================================
// ENTER KEY
// ============================================================

function setupEnterKey() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {
                return;
            }


            if (
                event.target &&
                event.target.tagName ===
                "TEXTAREA"
            ) {
                return;
            }


            const activeCalculator =
                document.querySelector(
                    ".calculator-card:not(.hidden)"
                );


            if (!activeCalculator) {
                return;
            }


            if (
                activeCalculator.id ===
                "interestCalculator"
            ) {

                calculateInterest();

            }

            else if (
                activeCalculator.id ===
                "fdCalculator"
            ) {

                calculateFD();

            }

            else if (
                activeCalculator.id ===
                "rdCalculator"
            ) {

                calculateRD();

            }

            else if (
                activeCalculator.id ===
                "emiCalculator"
            ) {

                calculateEMI();

            }

        }
    );
}


// ============================================================
// HELPERS
// ============================================================

function getValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value
        : "";
}


function getText(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.textContent
        : "";
}


function getSelectedText(id) {

    const element =
        document.getElementById(id);

    if (
        !element ||
        !element.options
    ) {
        return "";
    }


    return element.options[
        element.selectedIndex
    ].text;
}


function escapeHTML(value) {

    return String(
        value ?? ""
    ).replace(
        /[&<>'"]/g,
        function (character) {

            return {

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"

            }[character];

        }
    );
}


// ============================================================
// RESULT TEXT
// ============================================================

function getResultText(type) {

    let text =
        "Finance App by Surendra\n\n";


    if (
        type === "interest"
    ) {

        text +=
            `${t("interestCalculator")}\n\n`;

        text +=
            `${t("principal")}: ₹${getValue("principal")}\n`;

        text +=
            `${t("interestRate")}: ${getValue("rate")}%\n`;

        text +=
            `${t("period")}: ${getValue("time")} ${getSelectedText("timeUnit")}\n`;

        text +=
            `${t("interestType")}: ${getSelectedText("interestType")}\n\n`;

        text +=
            `${t("interest")}: ${getText("interestResult")}\n`;

        text +=
            `${t("totalAmount")}: ${getText("totalResult")}`;

    }


    else if (
        type === "fd"
    ) {

        text +=
            `${t("fdCalculator")}\n\n`;

        text +=
            `${t("depositAmount")}: ₹${getValue("fdPrincipal")}\n`;

        text +=
            `${t("interestRate")}: ${getValue("fdRate")}%\n`;

        text +=
            `${t("period")}: ${getValue("fdTime")} ${t("years")}\n\n`;

        text +=
            `${t("interestEarned")}: ${getText("fdInterestResult")}\n`;

        text +=
            `${t("maturityAmount")}: ${getText("fdTotalResult")}`;

    }


    else if (
        type === "rd"
    ) {

        text +=
            `${t("rdCalculator")}\n\n`;

        text +=
            `${t("monthlyDeposit")}: ₹${getValue("rdMonthlyDeposit")}\n`;

        text +=
            `${t("interestRate")}: ${getValue("rdRate")}%\n`;

        text +=
            `${t("period")}: ${getValue("rdTime")} ${t("years")}\n\n`;

        text +=
            `${t("totalDeposited")}: ${getText("rdDepositedResult")}\n`;

        text +=
            `${t("interestEarned")}: ${getText("rdInterestResult")}\n`;

        text +=
            `${t("maturityAmount")}: ${getText("rdTotalResult")}`;

    }


    else if (
        type === "emi"
    ) {

        text +=
            `${t("emiCalculator")}\n\n`;

        text +=
            `${t("loanAmount")}: ₹${getValue("loanAmount")}\n`;

        text +=
            `${t("interestRate")}: ${getValue("loanRate")}%\n`;

        text +=
            `${t("tenure")}: ${getValue("loanTenure")} ${getSelectedText("loanTenureUnit")}\n\n`;

        text +=
            `${t("monthlyEMI")}: ${getText("emiResult")}\n`;

        text +=
            `${t("totalInterest")}: ${getText("emiInterestResult")}\n`;

        text +=
            `${t("totalPayment")}: ${getText("emiTotalResult")}`;

    }


    text +=
        `\n\n${t("calculatedUsing")}`;


    return text;
}


// ============================================================
// COPY RESULTS
// ============================================================

function copyResults(
    type,
    button
) {

    const text =
        getResultText(type);


    const copied =
        function () {

            const original =
                button.textContent;


            button.textContent =
                t("copied");


            setTimeout(
                function () {

                    button.textContent =
                        original;

                },
                2000
            );

        };


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(text)
            .then(copied)
            .catch(
                function () {

                    fallbackCopy(
                        text,
                        copied
                    );

                }
            );

    } else {

        fallbackCopy(
            text,
            copied
        );
    }
}


function fallbackCopy(
    text,
    callback
) {

    const textarea =
        document.createElement(
            "textarea"
        );


    textarea.value =
        text;


    textarea.style.position =
        "fixed";


    textarea.style.left =
        "-9999px";


    document.body.appendChild(
        textarea
    );


    textarea.focus();

    textarea.select();


    try {

        document.execCommand(
            "copy"
        );

    } catch (error) {

        console.log(
            "Copy failed."
        );

    }


    document.body.removeChild(
        textarea
    );


    if (callback) {
        callback();
    }
}


// ============================================================
// WHATSAPP
// ============================================================

function shareOnWhatsApp(type) {

    const text =
        getResultText(type);


    const url =
        "https://wa.me/?text=" +
        encodeURIComponent(text);


    window.open(
        url,
        "_blank"
    );
}


// ============================================================
// ACTION BUTTONS
// ============================================================

function setupActionButtons() {

    addActionButtons(
        "interest"
    );

    addActionButtons(
        "fd"
    );

    addActionButtons(
        "rd"
    );

    addActionButtons(
        "emi"
    );
}


function addActionButtons(
    type
) {

    const calculator =
        document.getElementById(
            type + "Calculator"
        );


    if (!calculator) {
        return;
    }


    if (
        calculator.querySelector(
            ".finance-action-buttons"
        )
    ) {
        return;
    }


    const container =
        document.createElement(
            "div"
        );


    container.className =
        "finance-action-buttons";


    const copyButton =
        document.createElement(
            "button"
        );


    copyButton.type =
        "button";


    copyButton.textContent =
        t("copyResults");


    copyButton.addEventListener(
        "click",
        function () {

            copyResults(
                type,
                copyButton
            );

        }
    );


    const whatsappButton =
        document.createElement(
            "button"
        );


    whatsappButton.type =
        "button";


    whatsappButton.textContent =
        t("whatsapp");


    whatsappButton.addEventListener(
        "click",
        function () {

            shareOnWhatsApp(
                type
            );

        }
    );


    const pdfButton =
        document.createElement(
            "button"
        );


    pdfButton.type =
        "button";


    pdfButton.textContent =
        t("savePDF");


    pdfButton.addEventListener(
        "click",
        function () {

            downloadPDF(
                type
            );

        }
    );


    container.appendChild(
        copyButton
    );


    container.appendChild(
        whatsappButton
    );


    container.appendChild(
        pdfButton
    );


    calculator.appendChild(
        container
    );
}


function updateActionButtonText() {

    document
        .querySelectorAll(
            ".finance-action-buttons"
        )
        .forEach(
            function (container) {

                const buttons =
                    container.querySelectorAll(
                        "button"
                    );


                if (buttons[0]) {
                    buttons[0].textContent =
                        t("copyResults");
                }


                if (buttons[1]) {
                    buttons[1].textContent =
                        t("whatsapp");
                }


                if (buttons[2]) {
                    buttons[2].textContent =
                        t("savePDF");
                }

            }
        );
}


// ============================================================
// RESET
// ============================================================

function resetCalculator(
    type
) {

    const fields = {

        interest: [
            "principal",
            "rate",
            "time",
            "interestResult",
            "totalResult",
            "interestError"
        ],

        fd: [
            "fdPrincipal",
            "fdRate",
            "fdTime",
            "fdInterestResult",
            "fdTotalResult",
            "fdError"
        ],

        rd: [
            "rdMonthlyDeposit",
            "rdRate",
            "rdTime",
            "rdDepositedResult",
            "rdInterestResult",
            "rdTotalResult",
            "rdError"
        ],

        emi: [
            "loanAmount",
            "loanRate",
            "loanTenure",
            "emiResult",
            "emiInterestResult",
            "emiTotalResult",
            "emiError"
        ]

    };


    (
        fields[type] || []
    ).forEach(
        function (id) {

            const element =
                document.getElementById(id);


            if (!element) {
                return;
            }


            if (
                element.tagName ===
                "INPUT"
            ) {

                element.value = "";

            } else {

                element.textContent = "";

            }

        }
    );


    removeAnalysis(
        type + "Analysis"
    );


    saveCalculatorValues();
}


// ============================================================
// SAVE VALUES
// ============================================================

function saveCalculatorValues() {

    const ids = [

        "principal",
        "rate",
        "time",
        "timeUnit",
        "interestType",
        "compoundFrequency",

        "fdPrincipal",
        "fdRate",
        "fdTime",
        "fdFrequency",

        "rdMonthlyDeposit",
        "rdRate",
        "rdTime",

        "loanAmount",
        "loanRate",
        "loanTenure",
        "loanTenureUnit"

    ];


    const values = {};


    ids.forEach(
        function (id) {

            const element =
                document.getElementById(id);


            if (element) {

                values[id] =
                    element.value;

            }

        }
    );


    localStorage.setItem(
        "financeCalculatorValues",
        JSON.stringify(values)
    );
}


// ============================================================
// LOAD VALUES
// ============================================================

function loadSavedValues() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    "financeCalculatorValues"
                ) || "{}"
            );


        Object.entries(
            saved
        ).forEach(
            function (
                [id, value]
            ) {

                const element =
                    document.getElementById(
                        id
                    );


                if (element) {

                    element.value =
                        value;

                }

            }
        );

    } catch (error) {

        console.log(
            "Could not load saved values."
        );

    }
}


// ============================================================
// DARK / LIGHT MODE
// ============================================================

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "financeCalculatorTheme"
        );


    const theme =
        savedTheme === "dark"
            ? "dark"
            : "light";


    document.documentElement
        .setAttribute(
            "data-theme",
            theme
        );


    updateThemeIcon(
        theme
    );


    const themeButton =
        document.getElementById(
            "themeToggle"
        );


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            toggleTheme
        );

    }
}


function toggleTheme() {

    const current =
        document.documentElement
            .getAttribute(
                "data-theme"
            );


    const theme =
        current === "dark"
            ? "light"
            : "dark";


    document.documentElement
        .setAttribute(
            "data-theme",
            theme
        );


    localStorage.setItem(
        "financeCalculatorTheme",
        theme
    );


    updateThemeIcon(
        theme
    );
}


function updateThemeIcon(
    theme
) {

    const button =
        document.getElementById(
            "themeToggle"
        );


    if (!button) {
        return;
    }


    button.textContent =
        theme === "dark"
            ? "☀️"
            : "🌙";
}


// ============================================================
// LANGUAGE SUPPORT
// ============================================================

function applyLanguage() {

    document.documentElement.lang =
        currentLanguage === "te"
            ? "te"
            : "en";


    const languageSelect =
        document.getElementById(
            "languageSelect"
        );


    if (languageSelect) {

        languageSelect.value =
            currentLanguage;

    }


    const textMap = {

        ".app-title":
            "appTitle",

        ".app-subtitle":
            "by",

        ".tab-button[data-calculator='interest']":
            "interest",

        ".tab-button[data-calculator='fd']":
            "fd",

        ".tab-button[data-calculator='rd']":
            "rd",

        ".tab-button[data-calculator='emi']":
            "emi",

        "#interestCalculator h2":
            "interestCalculator",

        "#interestCalculator .calculator-heading p":
            "interestDesc",

        "#fdCalculator h2":
            "fdCalculator",

        "#fdCalculator .calculator-heading p":
            "fdDesc",

        "#rdCalculator h2":
            "rdCalculator",

        "#rdCalculator .calculator-heading p":
            "rdDesc",

        "#emiCalculator h2":
            "emiCalculator",

        "#emiCalculator .calculator-heading p":
            "emiDesc",

        "label[for='principal']":
            "principal",

        "label[for='rate']":
            "interestRate",

        "label[for='time']":
            "period",

        "label[for='interestType']":
            "interestType",

        "label[for='compoundFrequency']":
            "compoundingFrequency",

        "label[for='fdPrincipal']":
            "depositAmount",

        "label[for='fdRate']":
            "interestRate",

        "label[for='fdTime']":
            "period",

        "label[for='fdFrequency']":
            "compoundingFrequency",

        "label[for='rdMonthlyDeposit']":
            "monthlyDeposit",

        "label[for='rdRate']":
            "interestRate",

        "label[for='rdTime']":
            "period",

        "label[for='loanAmount']":
            "loanAmount",

        "label[for='loanRate']":
            "interestRate",

        "label[for='loanTenure']":
            "tenure",

        "#interestCalculator .primary-button":
            "calculate",

        "#interestCalculator .reset-button":
            "reset",

        "#fdCalculator .primary-button":
            "calculate",

        "#fdCalculator .reset-button":
            "reset",

        "#rdCalculator .primary-button":
            "calculate",

        "#rdCalculator .reset-button":
            "reset",

        "#emiCalculator .primary-button":
            "calculate",

        "#emiCalculator .reset-button":
            "reset"

    };


    Object.entries(
        textMap
    ).forEach(
        function (
            [selector, key]
        ) {

            document
                .querySelectorAll(
                    selector
                )
                .forEach(
                    function (element) {

                        element.textContent =
                            t(key);

                    }
                );

        }
    );


    const placeholders = {

        principal:
            "enterAmount",

        rate:
            "enterInterestRate",

        time:
            "enterPeriod",

        fdPrincipal:
            "enterDeposit",

        fdRate:
            "enterInterestRate",

        fdTime:
            "enterPeriod",

        rdMonthlyDeposit:
            "enterDeposit",

        rdRate:
            "enterInterestRate",

        rdTime:
            "enterPeriod",

        loanAmount:
            "enterLoanAmount",

        loanRate:
            "enterInterestRate",

        loanTenure:
            "enterTenure"

    };


    Object.entries(
        placeholders
    ).forEach(
        function (
            [id, key]
        ) {

            const element =
                document.getElementById(id);


            if (element) {

                element.placeholder =
                    t(key);

            }

        }
    );


    const options = {

        timeUnit: [

            ["years", "years"],
            ["months", "months"]

        ],

        loanTenureUnit: [

            ["years", "years"],
            ["months", "months"]

        ],

        interestType: [

            ["simple", "simpleInterest"],
            ["compound", "compoundInterest"]

        ],

        compoundFrequency: [

            ["1", "annually"],
            ["2", "halfYearly"],
            ["4", "quarterly"],
            ["12", "monthly"]

        ],

        fdFrequency: [

            ["1", "annually"],
            ["2", "halfYearly"],
            ["4", "quarterly"],
            ["12", "monthly"]

        ]

    };


    Object.entries(
        options
    ).forEach(
        function (
            [id, items]
        ) {

            const select =
                document.getElementById(id);


            if (!select) {
                return;
            }


            items.forEach(
                function (
                    [value, key]
                ) {

                    const option =
                        select.querySelector(
                            `option[value="${value}"]`
                        );


                    if (option) {

                        option.textContent =
                            t(key);

                    }

                }
            );

        }
    );


    updateActionButtonText();


    refreshCurrentAnalysis();
}


function refreshCurrentAnalysis() {

    if (
        document.getElementById(
            "interestResult"
        )?.textContent &&
        document.getElementById(
            "interestResult"
        )?.textContent !== "₹0.00"
    ) {

        calculateInterest();

    }


    if (
        document.getElementById(
            "fdTotalResult"
        )?.textContent &&
        document.getElementById(
            "fdTotalResult"
        )?.textContent !== "₹0.00"
    ) {

        calculateFD();

    }


    if (
        document.getElementById(
            "rdTotalResult"
        )?.textContent &&
        document.getElementById(
            "rdTotalResult"
        )?.textContent !== "₹0.00"
    ) {

        calculateRD();

    }


    if (
        document.getElementById(
            "emiResult"
        )?.textContent &&
        document.getElementById(
            "emiResult"
        )?.textContent !== "₹0.00"
    ) {

        calculateEMI();

    }

}


function setupLanguage() {

    const select =
        document.getElementById(
            "languageSelect"
        );


    if (!select) {
        return;
    }


    select.addEventListener(
        "change",
        function () {

            currentLanguage =
                select.value === "te"
                    ? "te"
                    : "en";


            localStorage.setItem(
                "financeCalculatorLanguage",
                currentLanguage
            );


            applyLanguage();

        }
    );


    applyLanguage();
}


// ============================================================
// PDF
// ============================================================

function downloadPDF(type) {

    const calculator =
        document.getElementById(
            type + "Calculator"
        );


    if (!calculator) {

        alert(
            t("calculatorNotFound")
        );

        return;
    }


    const printWindow =
        window.open(
            "",
            "_blank",
            "width=900,height=700"
        );


    if (!printWindow) {

        alert(
            t("popup")
        );

        return;
    }


    const clone =
        calculator.cloneNode(
            true
        );


    clone
        .querySelectorAll(
            "button"
        )
        .forEach(
            function (button) {

                button.remove();

            }
        );


    clone
        .querySelectorAll(
            ".finance-action-buttons"
        )
        .forEach(
            function (element) {

                element.remove();

            }
        );


    const titles = {

        interest:
            t("interestCalculator"),

        fd:
            t("fdCalculator"),

        rd:
            t("rdCalculator"),

        emi:
            t("emiCalculator")

    };


    const title =
        titles[type];


    printWindow.document.open();


    printWindow.document.write(`

<!DOCTYPE html>

<html lang="${currentLanguage}">

<head>

<meta charset="UTF-8">

<title>
${title}
</title>

<style>

* {
    box-sizing: border-box;
}

body {

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    margin: 0;

    padding: 30px;

    color:
        #111827;

    background:
        #ffffff;
}

.pdf-container {

    width: 100%;

    max-width:
        850px;

    margin:
        0 auto;
}

.pdf-header {

    text-align:
        center;

    border-bottom:
        2px solid #2563eb;

    padding-bottom:
        15px;

    margin-bottom:
        20px;
}

.pdf-header h1 {

    margin:
        0 0 8px;

    font-size:
        24px;
}

.pdf-header h2 {

    margin:
        0;

    font-size:
        18px;

    font-weight:
        normal;
}

.pdf-date {

    margin-top:
        8px;

    font-size:
        12px;

    color:
        #666666;
}

.result-card {

    border:
        1px solid #dbe3ec;

    border-radius:
        8px;

    padding:
        15px;

    margin-bottom:
        18px;

    background:
        #eff6ff;
}

.result-row {

    display:
        flex;

    justify-content:
        space-between;

    gap:
        20px;

    padding:
        7px 0;

    border-bottom:
        1px solid #dddddd;
}

.analysis-table {

    width:
        100%;

    border-collapse:
        collapse;

    margin-top:
        10px;
}

.analysis-table th,
.analysis-table td {

    border:
        1px solid #cccccc;

    padding:
        8px;

    text-align:
        right;
}

.analysis-table th {

    background:
        #f3f4f6;
}

.pdf-footer {

    text-align:
        center;

    margin-top:
        30px;

    padding-top:
        15px;

    border-top:
        1px solid #dddddd;

    font-size:
        12px;

    color:
        #666666;
}

@media print {

    body {
        padding:
            10px;
    }

}

</style>

</head>

<body>

<div class="pdf-container">

    <div class="pdf-header">

        <h1>
            Finance App by Surendra
        </h1>

        <h2>
            ${title}
        </h2>

        <div class="pdf-date">

            ${t("generated")}:
            ${new Date().toLocaleString("en-IN")}

        </div>

    </div>


    ${clone.outerHTML}


    <div class="pdf-footer">

        ${t("calculatedUsing")}

    </div>

</div>


<script>

setTimeout(
    function () {
        window.print();
    },
    500
);

window.onafterprint =
    function () {

        setTimeout(
            function () {
                window.close();
            },
            300
        );

    };

<\/script>

</body>

</html>

    `);


    printWindow.document.close();
}


// ============================================================
// STARTUP
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTheme();

        loadSavedValues();

        setupTabs();

        setupEnterKey();

        setupActionButtons();

        setupLanguage();

        showCalculator(
            "interest"
        );

    }
);