// ============================================================
// FINANCE APP BY SURENDRA
// COMPLETE script.js - CORRECTED CHART VERSION
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    loadTheme();
    loadSavedValues();
    setupTabs();
    setupEnterKey();
    setupActionButtons();
});


// ============================================================
// CURRENCY
// ============================================================

function formatCurrency(amount) {
    if (!Number.isFinite(amount)) {
        return "₹0.00";
    }

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}


// ============================================================
// TABS
// ============================================================

function setupTabs() {
    document.querySelectorAll(".tab-button").forEach(function (tab) {
        tab.addEventListener("click", function () {
            showCalculator(tab.dataset.calculator);
        });
    });
}


function showCalculator(type) {

    const calculators = {
        interest: document.getElementById("interestCalculator"),
        fd: document.getElementById("fdCalculator"),
        rd: document.getElementById("rdCalculator"),
        emi: document.getElementById("emiCalculator")
    };

    Object.values(calculators).forEach(function (calculator) {
        if (calculator) {
            calculator.classList.add("hidden");
        }
    });

    if (calculators[type]) {
        calculators[type].classList.remove("hidden");
    }

    document.querySelectorAll(".tab-button").forEach(function (button) {
        button.classList.remove("active");
    });

    const activeTab = document.querySelector(
        `.tab-button[data-calculator="${type}"]`
    );

    if (activeTab) {
        activeTab.classList.add("active");
    }
}


// ============================================================
// VALIDATION
// ============================================================

function validateNumber(value, fieldName, errorElement) {

    if (!Number.isFinite(value)) {
        errorElement.textContent =
            `${fieldName} is too large or invalid.`;
        return false;
    }

    if (value <= 0) {
        errorElement.textContent =
            `${fieldName} must be greater than 0.`;
        return false;
    }

    if (value > 1000000000000) {
        errorElement.textContent =
            `${fieldName} cannot exceed ₹1,00,00,00,00,000.`;
        return false;
    }

    return true;
}


function validateRate(rate, errorElement) {

    if (
        !Number.isFinite(rate) ||
        rate < 0 ||
        rate > 100
    ) {
        errorElement.textContent =
            "Interest rate must be between 0% and 100%.";
        return false;
    }

    return true;
}


function validateResult(value, errorElement) {

    if (!Number.isFinite(value)) {
        errorElement.textContent =
            "The calculated result is too large. Please use smaller values.";
        return false;
    }

    return true;
}


function clearError(id) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = "";
    }
}


// ============================================================
// INTEREST CALCULATOR
// ============================================================

function calculateInterest() {

    const principal =
        parseFloat(
            document.getElementById("principal").value
        );

    const rate =
        parseFloat(
            document.getElementById("rate").value
        );

    let time =
        parseFloat(
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

    const error =
        document.getElementById("interestError");

    error.textContent = "";

    if (!validateNumber(
        principal,
        "a principal amount",
        error
    )) {
        return;
    }

    if (!validateRate(rate, error)) {
        return;
    }

    if (!validateNumber(
        time,
        "a period",
        error
    )) {
        return;
    }

    if (timeUnit === "months") {
        time = time / 12;
    }

    let interest;
    let totalAmount;

    if (interestType === "simple") {

        interest =
            principal *
            rate *
            time /
            100;

        totalAmount =
            principal +
            interest;

    } else {

        totalAmount =
            principal *
            Math.pow(
                1 + (rate / 100) / frequency,
                frequency * time
            );

        interest =
            totalAmount -
            principal;
    }

    if (!validateResult(
        totalAmount,
        error
    )) {
        return;
    }

    if (!validateResult(
        interest,
        error
    )) {
        return;
    }

    document.getElementById(
        "interestResult"
    ).textContent =
        formatCurrency(interest);

    document.getElementById(
        "totalResult"
    ).textContent =
        formatCurrency(totalAmount);

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

    const calculator =
        document.getElementById(
            "interestCalculator"
        );

    if (!calculator) {
        return;
    }

    const analysis =
        document.createElement("div");

    analysis.id =
        "interestAnalysis";

    analysis.className =
        "result-card";

    analysis.style.marginTop =
        "20px";

    analysis.style.overflow =
        "hidden";

    analysis.innerHTML = `

        <h3>📊 Interest Analysis</h3>

        <div class="chart-title">
            Principal vs Interest
        </div>

        ${createDonutChartHTML(
            principal,
            interest,
            "Principal",
            "Interest"
        )}

        <div class="analysis-summary">

            <div>
                <small>Principal</small>
                <strong>
                    ${formatCurrency(principal)}
                </strong>
            </div>

            <div>
                <small>Interest</small>
                <strong>
                    ${formatCurrency(interest)}
                </strong>
            </div>

            <div>
                <small>Total Amount</small>
                <strong>
                    ${formatCurrency(totalAmount)}
                </strong>
            </div>

        </div>

    `;

    calculator.appendChild(
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

    if (!validateNumber(
        principal,
        "a deposit amount",
        error
    )) {
        return;
    }

    if (!validateRate(rate, error)) {
        return;
    }

    if (!validateNumber(
        time,
        "a period",
        error
    )) {
        return;
    }

    const maturityAmount =
        principal *
        Math.pow(
            1 + (rate / 100) / frequency,
            frequency * time
        );

    const interest =
        maturityAmount -
        principal;

    if (!validateResult(
        maturityAmount,
        error
    )) {
        return;
    }

    document.getElementById(
        "fdInterestResult"
    ).textContent =
        formatCurrency(interest);

    document.getElementById(
        "fdTotalResult"
    ).textContent =
        formatCurrency(maturityAmount);

    createFDAnalysis(
        principal,
        rate,
        time,
        frequency,
        interest,
        maturityAmount
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
    maturityAmount
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

    const yearData = [];

    let previousBalance =
        principal;

    let yearRows = "";

    for (
        let year = 1;
        year <= Math.ceil(time);
        year++
    ) {

        const completedYears =
            Math.min(
                year,
                time
            );

        const balance =
            principal *
            Math.pow(
                1 + (rate / 100) / frequency,
                frequency * completedYears
            );

        const yearlyInterest =
            balance -
            previousBalance;

        yearData.push({
            year: year,
            balance: balance
        });

        yearRows += `

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

        previousBalance =
            balance;
    }

    const analysis =
        document.createElement("div");

    analysis.id =
        "fdAnalysis";

    analysis.className =
        "result-card";

    analysis.style.marginTop =
        "20px";

    analysis.innerHTML = `

        <h3>📊 FD Analysis</h3>

        <div class="analysis-summary">

            <div>
                <small>Deposit Amount</small>
                <strong>
                    ${formatCurrency(principal)}
                </strong>
            </div>

            <div>
                <small>Interest Earned</small>
                <strong>
                    ${formatCurrency(totalInterest)}
                </strong>
            </div>

            <div>
                <small>Maturity Amount</small>
                <strong>
                    ${formatCurrency(maturityAmount)}
                </strong>
            </div>

            <div>
                <small>Interest Rate</small>
                <strong>
                    ${rate}%
                </strong>
            </div>

        </div>


        <div class="chart-title">
            Principal vs Interest
        </div>

        ${createDonutChartHTML(
            principal,
            totalInterest,
            "Principal",
            "Interest"
        )}


        <div class="chart-title">
            Year-wise FD Growth
        </div>

        ${createBarChartHTML(
            yearData.map(
                item => item.year
            ),
            yearData.map(
                item => item.balance
            )
        )}


        <h4>
            Year-wise Breakdown
        </h4>

        <div class="table-scroll">

            <table class="analysis-table">

                <thead>

                    <tr>

                        <th>Year</th>

                        <th>Interest Earned</th>

                        <th>Balance</th>

                    </tr>

                </thead>

                <tbody>
                    ${yearRows}
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

    if (!validateNumber(
        monthlyDeposit,
        "a monthly deposit",
        error
    )) {
        return;
    }

    if (!validateRate(rate, error)) {
        return;
    }

    if (!validateNumber(
        years,
        "a period",
        error
    )) {
        return;
    }

    const months =
        Math.round(
            years * 12
        );

    const monthlyRate =
        rate /
        100 /
        12;

    let maturityAmount;

    if (monthlyRate === 0) {

        maturityAmount =
            monthlyDeposit *
            months;

    } else {

        maturityAmount =
            monthlyDeposit *
            (
                (
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) - 1
                ) /
                monthlyRate
            );
    }

    const totalDeposited =
        monthlyDeposit *
        months;

    const interest =
        maturityAmount -
        totalDeposited;

    if (!validateResult(
        maturityAmount,
        error
    )) {
        return;
    }

    document.getElementById(
        "rdDepositedResult"
    ).textContent =
        formatCurrency(
            totalDeposited
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
            maturityAmount
        );

    createRDAnalysis(
        monthlyDeposit,
        rate,
        years,
        months,
        totalDeposited,
        interest,
        maturityAmount
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
    totalDeposited,
    totalInterest,
    maturityAmount
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

    const yearData = [];

    let previousBalance = 0;

    let yearRows = "";

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

        const monthlyRate =
            rate /
            100 /
            12;

        let balance;

        if (monthlyRate === 0) {

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
                        ) - 1
                    ) /
                    monthlyRate
                );
        }

        const interestThisYear =
            balance -
            previousBalance -
            depositedThisYear;

        yearData.push({
            year: year,
            balance: balance
        });

        yearRows += `

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

        previousBalance =
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

    analysis.style.marginTop =
        "20px";

    analysis.innerHTML = `

        <h3>📊 RD Analysis</h3>

        <div class="analysis-summary">

            <div>
                <small>Monthly Deposit</small>
                <strong>
                    ${formatCurrency(
                        monthlyDeposit
                    )}
                </strong>
            </div>

            <div>
                <small>Total Deposited</small>
                <strong>
                    ${formatCurrency(
                        totalDeposited
                    )}
                </strong>
            </div>

            <div>
                <small>Interest Earned</small>
                <strong>
                    ${formatCurrency(
                        totalInterest
                    )}
                </strong>
            </div>

            <div>
                <small>Maturity Amount</small>
                <strong>
                    ${formatCurrency(
                        maturityAmount
                    )}
                </strong>
            </div>

        </div>


        <div class="chart-title">
            Deposits vs Interest
        </div>

        ${createDonutChartHTML(
            totalDeposited,
            totalInterest,
            "Deposits",
            "Interest"
        )}


        <div class="chart-title">
            Year-wise RD Growth
        </div>

        ${createBarChartHTML(
            yearData.map(
                item => item.year
            ),
            yearData.map(
                item => item.balance
            )
        )}


        <h4>
            Year-wise Breakdown
        </h4>

        <div class="table-scroll">

            <table class="analysis-table">

                <thead>

                    <tr>

                        <th>Year</th>

                        <th>Deposited</th>

                        <th>Interest</th>

                        <th>Balance</th>

                    </tr>

                </thead>

                <tbody>
                    ${yearRows}
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

    if (!validateNumber(
        loanAmount,
        "a loan amount",
        error
    )) {
        return;
    }

    if (!validateRate(
        annualRate,
        error
    )) {
        return;
    }

    if (!validateNumber(
        tenure,
        "a loan tenure",
        error
    )) {
        return;
    }

    if (tenureUnit === "years") {
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

    if (monthlyRate === 0) {

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
            (power - 1);
    }

    const totalPayment =
        emi *
        months;

    const totalInterest =
        totalPayment -
        loanAmount;

    if (!validateResult(
        emi,
        error
    )) {
        return;
    }

    document.getElementById(
        "emiResult"
    ).textContent =
        formatCurrency(emi);

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

    const yearData = [];

    let yearRows = "";

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

            if (balance <= 0) {
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

            if (balance < 0) {
                balance = 0;
            }

            yearlyPrincipal +=
                monthlyPrincipal;

            yearlyInterest +=
                monthlyInterest;
        }

        yearData.push({
            year: year,
            balance: balance
        });

        yearRows += `

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

    analysis.style.marginTop =
        "20px";

    analysis.innerHTML = `

        <h3>📊 EMI Analysis</h3>

        <div class="analysis-summary">

            <div>
                <small>Monthly EMI</small>
                <strong>
                    ${formatCurrency(emi)}
                </strong>
            </div>

            <div>
                <small>Yearly Payment</small>
                <strong>
                    ${formatCurrency(
                        emi * 12
                    )}
                </strong>
            </div>

            <div>
                <small>Total Interest</small>
                <strong>
                    ${formatCurrency(
                        totalInterest
                    )}
                </strong>
            </div>

            <div>
                <small>Total Payment</small>
                <strong>
                    ${formatCurrency(
                        totalPayment
                    )}
                </strong>
            </div>

        </div>


        <div class="chart-title">
            Principal vs Interest
        </div>

        ${createDonutChartHTML(
            loanAmount,
            totalInterest,
            "Principal",
            "Interest"
        )}


        <div class="chart-title">
            Remaining Loan Balance
        </div>

        ${createBarChartHTML(
            yearData.map(
                item => item.year
            ),
            yearData.map(
                item => item.balance
            )
        )}


        <h4>
            Year-wise Breakdown
        </h4>

        <div class="table-scroll">

            <table class="analysis-table">

                <thead>

                    <tr>

                        <th>Year</th>

                        <th>Principal Paid</th>

                        <th>Interest Paid</th>

                        <th>Balance</th>

                    </tr>

                </thead>

                <tbody>
                    ${yearRows}
                </tbody>

            </table>

        </div>

    `;

    section.appendChild(
        analysis
    );
}


// ============================================================
// CORRECTED DONUT CHART
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
        (value1 / total) * 100;

    const percentage2 =
        (value2 / total) * 100;

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
                margin:15px 0 20px 0;
            "
        >

            <div
                style="
                    position:relative;
                    width:210px;
                    height:210px;
                    flex-shrink:0;
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

                    <!-- Background -->

                    <circle
                        cx="80"
                        cy="80"
                        r="${radius}"
                        fill="none"
                        stroke="#e5e7eb"
                        stroke-width="26"
                    ></circle>


                    <!-- Principal -->

                    <circle
                        cx="80"
                        cy="80"
                        r="${radius}"
                        fill="none"
                        stroke="#2563eb"
                        stroke-width="26"
                        stroke-linecap="butt"
                        stroke-dasharray="
                            ${dash1}
                            ${circumference - dash1}
                        "
                        stroke-dashoffset="0"
                    ></circle>


                    <!-- Interest -->

                    <circle
                        cx="80"
                        cy="80"
                        r="${radius}"
                        fill="none"
                        stroke="#f59e0b"
                        stroke-width="26"
                        stroke-linecap="butt"
                        stroke-dasharray="
                            ${dash2}
                            ${circumference - dash2}
                        "
                        stroke-dashoffset="${-dash1}"
                    ></circle>

                </svg>


                <!-- Center -->

                <div
                    style="
                        position:absolute;
                        left:50%;
                        top:50%;
                        transform:translate(-50%,-50%);
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


            <!-- Legend -->

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
                        align-items:center;
                        padding:7px 4px;
                    "
                >

                    <span
                        style="
                            display:flex;
                            align-items:center;
                            gap:7px;
                            font-size:12px;
                        "
                    >

                        <span
                            style="
                                width:11px;
                                height:11px;
                                border-radius:50%;
                                background:#2563eb;
                                display:inline-block;
                            "
                        ></span>

                        ${escapeHTML(label1)}

                    </span>


                    <strong
                        style="
                            font-size:12px;
                        "
                    >
                        ${formatCurrency(value1)}
                    </strong>

                </div>


                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding:7px 4px;
                    "
                >

                    <span
                        style="
                            display:flex;
                            align-items:center;
                            gap:7px;
                            font-size:12px;
                        "
                    >

                        <span
                            style="
                                width:11px;
                                height:11px;
                                border-radius:50%;
                                background:#f59e0b;
                                display:inline-block;
                            "
                        ></span>

                        ${escapeHTML(label2)}

                    </span>


                    <strong
                        style="
                            font-size:12px;
                        "
                    >
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
        Math.max(...values);

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
                margin:15px 0 20px 0;
            "
        >

    `;

    labels.forEach(
        function (label, index) {

            const value =
                Number(
                    values[index]
                ) || 0;

            const percentage =
                (
                    value /
                    maxValue
                ) * 100;

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
                                    border-radius:5px;
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

    html += `</div>`;

    return html;
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
// ACTION BUTTONS
// ============================================================

function setupActionButtons() {

    addActionButtons(
        "interestCalculator",
        "interest"
    );

    addActionButtons(
        "fdCalculator",
        "fd"
    );

    addActionButtons(
        "rdCalculator",
        "rd"
    );

    addActionButtons(
        "emiCalculator",
        "emi"
    );
}


function addActionButtons(
    calculatorId,
    calculatorType
) {

    const calculator =
        document.getElementById(
            calculatorId
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

    container.style.display =
        "flex";

    container.style.gap =
        "10px";

    container.style.marginTop =
        "15px";

    container.style.marginBottom =
        "10px";

    container.style.width =
        "100%";

    container.style.flexWrap =
        "wrap";


    // COPY

    const copyButton =
        document.createElement(
            "button"
        );

    copyButton.type =
        "button";

    copyButton.textContent =
        "📋 Copy Results";

    copyButton.style.flex =
        "1";

    copyButton.style.minWidth =
        "120px";

    copyButton.style.padding =
        "10px";

    copyButton.style.cursor =
        "pointer";

    copyButton.style.borderRadius =
        "8px";

    copyButton.style.border =
        "1px solid #d8dee8";

    copyButton.style.background =
        "#ffffff";

    copyButton.style.color =
        "#111111";

    copyButton.addEventListener(
        "click",
        function () {

            copyResults(
                calculatorType,
                copyButton
            );

        }
    );


    // WHATSAPP

    const whatsappButton =
        document.createElement(
            "button"
        );

    whatsappButton.type =
        "button";

    whatsappButton.textContent =
        "📱 WhatsApp";

    whatsappButton.style.flex =
        "1";

    whatsappButton.style.minWidth =
        "120px";

    whatsappButton.style.padding =
        "10px";

    whatsappButton.style.cursor =
        "pointer";

    whatsappButton.style.borderRadius =
        "8px";

    whatsappButton.style.border =
        "1px solid #25D366";

    whatsappButton.style.background =
        "#25D366";

    whatsappButton.style.color =
        "#ffffff";

    whatsappButton.addEventListener(
        "click",
        function () {

            shareOnWhatsApp(
                calculatorType
            );

        }
    );


    // PDF

    const pdfButton =
        document.createElement(
            "button"
        );

    pdfButton.type =
        "button";

    pdfButton.textContent =
        "📄 Save PDF";

    pdfButton.style.flex =
        "1";

    pdfButton.style.minWidth =
        "120px";

    pdfButton.style.padding =
        "10px";

    pdfButton.style.cursor =
        "pointer";

    pdfButton.style.borderRadius =
        "8px";

    pdfButton.style.border =
        "1px solid #6b7280";

    pdfButton.style.background =
        "#f3f4f6";

    pdfButton.style.color =
        "#111111";

    pdfButton.addEventListener(
        "click",
        function () {

            downloadPDF(
                calculatorType
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


// ============================================================
// RESULT TEXT
// ============================================================

function getResultText(type) {

    let text =
        "Finance App by Surendra\n\n";


    if (type === "interest") {

        text +=
            "Interest Calculator\n\n";

        text +=
            "Principal: ₹" +
            getValue("principal") +
            "\n";

        text +=
            "Interest Rate: " +
            getValue("rate") +
            "%\n";

        text +=
            "Period: " +
            getValue("time") +
            " " +
            getSelectedText("timeUnit") +
            "\n";

        text +=
            "Interest Type: " +
            getSelectedText("interestType") +
            "\n\n";

        text +=
            "Interest: " +
            getText("interestResult") +
            "\n";

        text +=
            "Total Amount: " +
            getText("totalResult") +
            "\n";
    }


    else if (type === "fd") {

        text +=
            "FD Calculator\n\n";

        text +=
            "Deposit Amount: ₹" +
            getValue("fdPrincipal") +
            "\n";

        text +=
            "Interest Rate: " +
            getValue("fdRate") +
            "%\n";

        text +=
            "Period: " +
            getValue("fdTime") +
            " Years\n";

        text +=
            "Compounding: " +
            getSelectedText("fdFrequency") +
            "\n\n";

        text +=
            "Interest Earned: " +
            getText("fdInterestResult") +
            "\n";

        text +=
            "Maturity Amount: " +
            getText("fdTotalResult") +
            "\n";
    }


    else if (type === "rd") {

        text +=
            "RD Calculator\n\n";

        text +=
            "Monthly Deposit: ₹" +
            getValue("rdMonthlyDeposit") +
            "\n";

        text +=
            "Interest Rate: " +
            getValue("rdRate") +
            "%\n";

        text +=
            "Period: " +
            getValue("rdTime") +
            " Years\n\n";

        text +=
            "Total Deposited: " +
            getText("rdDepositedResult") +
            "\n";

        text +=
            "Interest Earned: " +
            getText("rdInterestResult") +
            "\n";

        text +=
            "Maturity Amount: " +
            getText("rdTotalResult") +
            "\n";
    }


    else if (type === "emi") {

        text +=
            "EMI Calculator\n\n";

        text +=
            "Loan Amount: ₹" +
            getValue("loanAmount") +
            "\n";

        text +=
            "Interest Rate: " +
            getValue("loanRate") +
            "%\n";

        text +=
            "Tenure: " +
            getValue("loanTenure") +
            " " +
            getSelectedText("loanTenureUnit") +
            "\n\n";

        text +=
            "Monthly EMI: " +
            getText("emiResult") +
            "\n";

        text +=
            "Total Interest: " +
            getText("emiInterestResult") +
            "\n";

        text +=
            "Total Payment: " +
            getText("emiTotalResult") +
            "\n";
    }


    text +=
        "\nCalculated using Finance App by Surendra.";

    return text;
}


// ============================================================
// COPY
// ============================================================

async function copyResults(
    type,
    button
) {

    const text =
        getResultText(type);

    try {

        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            await navigator.clipboard.writeText(
                text
            );

        } else {

            fallbackCopy(text);

        }

        const originalText =
            button.textContent;

        button.textContent =
            "✅ Copied!";

        setTimeout(
            function () {

                button.textContent =
                    originalText;

            },
            2000
        );

    } catch (error) {

        fallbackCopy(text);

    }
}


function fallbackCopy(text) {

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
        document.execCommand("copy");
    } catch (error) {
        console.log("Copy failed.");
    }

    document.body.removeChild(
        textarea
    );
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
// PDF
// ============================================================

function downloadPDF(type) {

    const calculator =
        getCalculatorElement(type);

    if (!calculator) {
        alert(
            "Calculator could not be found."
        );
        return;
    }

    const printWindow =
        window.open(
            "",
            "_blank"
        );

    if (!printWindow) {

        alert(
            "Please allow pop-ups for this Finance App to save the PDF."
        );

        return;
    }

    const title =
        getCalculatorTitle(type);

    const date =
        new Date().toLocaleString(
            "en-IN"
        );

    const content =
        createPrintableContent(
            type
        );

    printWindow.document.open();

    printWindow.document.write(`

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>
${title} - Finance App by Surendra
</title>

<style>

* {
    box-sizing:border-box;
}

body {
    font-family:Arial,Helvetica,sans-serif;
    margin:0;
    padding:30px;
    color:#111827;
    background:white;
}

.pdf-container {
    max-width:850px;
    margin:0 auto;
}

.pdf-header {
    text-align:center;
    border-bottom:2px solid #333;
    padding-bottom:15px;
    margin-bottom:20px;
}

.pdf-header h1 {
    margin:0 0 8px 0;
    font-size:24px;
}

.pdf-header h2 {
    margin:0;
    font-size:18px;
    font-weight:normal;
}

.pdf-date {
    margin-top:8px;
    font-size:12px;
    color:#666;
}

.pdf-section {
    border:1px solid #ddd;
    border-radius:8px;
    padding:15px;
    margin-bottom:18px;
}

.pdf-section h3 {
    margin-top:0;
    border-bottom:1px solid #ddd;
    padding-bottom:8px;
}

.pdf-row {
    display:flex;
    justify-content:space-between;
    gap:20px;
    padding:7px 0;
    border-bottom:1px solid #f0f0f0;
}

.pdf-label {
    font-weight:600;
}

.pdf-value {
    text-align:right;
}

table {
    width:100%;
    border-collapse:collapse;
    margin-top:10px;
}

th,
td {
    border:1px solid #ccc;
    padding:8px;
    text-align:right;
}

th:first-child,
td:first-child {
    text-align:center;
}

th {
    background:#f3f4f6;
}

.pdf-footer {
    text-align:center;
    margin-top:30px;
    padding-top:15px;
    border-top:1px solid #ddd;
    font-size:12px;
    color:#666;
}

@media print {

    body {
        padding:10px;
    }

    .pdf-section {
        break-inside:avoid;
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
            Generated: ${date}
        </div>

    </div>

    ${content}

    <div class="pdf-footer">
        Finance App by Surendra
    </div>

</div>

</body>

</html>

    `);

    printWindow.document.close();

    setTimeout(
        function () {

            printWindow.focus();

            printWindow.print();

        },
        500
    );
}


// ============================================================
// PDF CONTENT
// ============================================================

function createPrintableContent(type) {

    let html = "";


    if (type === "interest") {

        html += `

        <div class="pdf-section">

            <h3>
                Calculation Details
            </h3>

            ${pdfRow(
                "Principal",
                "₹" +
                getValue("principal")
            )}

            ${pdfRow(
                "Interest Rate",
                getValue("rate") + "%"
            )}

            ${pdfRow(
                "Period",
                getValue("time") +
                " " +
                getSelectedText("timeUnit")
            )}

            ${pdfRow(
                "Interest Type",
                getSelectedText(
                    "interestType"
                )
            )}

        </div>


        <div class="pdf-section">

            <h3>
                Results
            </h3>

            ${pdfRow(
                "Interest",
                getText(
                    "interestResult"
                )
            )}

            ${pdfRow(
                "Total Amount",
                getText(
                    "totalResult"
                )
            )}

        </div>

        `;
    }


    else if (type === "fd") {

        html += `

        <div class="pdf-section">

            <h3>
                Calculation Details
            </h3>

            ${pdfRow(
                "Deposit Amount",
                "₹" +
                getValue("fdPrincipal")
            )}

            ${pdfRow(
                "Interest Rate",
                getValue("fdRate") + "%"
            )}

            ${pdfRow(
                "Period",
                getValue("fdTime") +
                " Years"
            )}

        </div>


        <div class="pdf-section">

            <h3>
                Results
            </h3>

            ${pdfRow(
                "Interest Earned",
                getText(
                    "fdInterestResult"
                )
            )}

            ${pdfRow(
                "Maturity Amount",
                getText(
                    "fdTotalResult"
                )
            )}

        </div>

        `;
    }


    else if (type === "rd") {

        html += `

        <div class="pdf-section">

            <h3>
                Calculation Details
            </h3>

            ${pdfRow(
                "Monthly Deposit",
                "₹" +
                getValue(
                    "rdMonthlyDeposit"
                )
            )}

            ${pdfRow(
                "Interest Rate",
                getValue(
                    "rdRate"
                ) + "%"
            )}

            ${pdfRow(
                "Period",
                getValue(
                    "rdTime"
                ) + " Years"
            )}

        </div>


        <div class="pdf-section">

            <h3>
                Results
            </h3>

            ${pdfRow(
                "Total Deposited",
                getText(
                    "rdDepositedResult"
                )
            )}

            ${pdfRow(
                "Interest Earned",
                getText(
                    "rdInterestResult"
                )
            )}

            ${pdfRow(
                "Maturity Amount",
                getText(
                    "rdTotalResult"
                )
            )}

        </div>

        `;
    }


    else if (type === "emi") {

        html += `

        <div class="pdf-section">

            <h3>
                Calculation Details
            </h3>

            ${pdfRow(
                "Loan Amount",
                "₹" +
                getValue(
                    "loanAmount"
                )
            )}

            ${pdfRow(
                "Interest Rate",
                getValue(
                    "loanRate"
                ) + "%"
            )}

            ${pdfRow(
                "Tenure",
                getValue(
                    "loanTenure"
                ) +
                " " +
                getSelectedText(
                    "loanTenureUnit"
                )
            )}

        </div>


        <div class="pdf-section">

            <h3>
                Results
            </h3>

            ${pdfRow(
                "Monthly EMI",
                getText(
                    "emiResult"
                )
            )}

            ${pdfRow(
                "Total Interest",
                getText(
                    "emiInterestResult"
                )
            )}

            ${pdfRow(
                "Total Payment",
                getText(
                    "emiTotalResult"
                )
            )}

        </div>

        `;
    }


    return html;
}


function pdfRow(
    label,
    value
) {

    return `

        <div class="pdf-row">

            <div class="pdf-label">
                ${escapeHTML(label)}
            </div>

            <div class="pdf-value">
                ${escapeHTML(value)}
            </div>

        </div>

    `;
}


// ============================================================
// RESET
// ============================================================

function resetCalculator(type) {

    let ids = [];


    if (type === "interest") {

        ids = [
            "principal",
            "rate",
            "time"
        ];

        setValue(
            "interestType",
            "simple"
        );

        setValue(
            "timeUnit",
            "years"
        );

        setValue(
            "compoundFrequency",
            "1"
        );

        setText(
            "interestResult",
            "₹0.00"
        );

        setText(
            "totalResult",
            "₹0.00"
        );

        clearError(
            "interestError"
        );

        removeAnalysis(
            "interestAnalysis"
        );
    }


    if (type === "fd") {

        ids = [
            "fdPrincipal",
            "fdRate",
            "fdTime"
        ];

        setValue(
            "fdFrequency",
            "1"
        );

        setText(
            "fdInterestResult",
            "₹0.00"
        );

        setText(
            "fdTotalResult",
            "₹0.00"
        );

        clearError(
            "fdError"
        );

        removeAnalysis(
            "fdAnalysis"
        );
    }


    if (type === "rd") {

        ids = [
            "rdMonthlyDeposit",
            "rdRate",
            "rdTime"
        ];

        setText(
            "rdDepositedResult",
            "₹0.00"
        );

        setText(
            "rdInterestResult",
            "₹0.00"
        );

        setText(
            "rdTotalResult",
            "₹0.00"
        );

        clearError(
            "rdError"
        );

        removeAnalysis(
            "rdAnalysis"
        );
    }


    if (type === "emi") {

        ids = [
            "loanAmount",
            "loanRate",
            "loanTenure"
        ];

        setValue(
            "loanTenureUnit",
            "years"
        );

        setText(
            "emiResult",
            "₹0.00"
        );

        setText(
            "emiInterestResult",
            "₹0.00"
        );

        setText(
            "emiTotalResult",
            "₹0.00"
        );

        clearError(
            "emiError"
        );

        removeAnalysis(
            "emiAnalysis"
        );
    }


    ids.forEach(
        function (id) {

            const element =
                document.getElementById(id);

            if (element) {
                element.value = "";
            }

        }
    );

    saveCalculatorValues();
}


// ============================================================
// HELPERS
// ============================================================

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}


function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.value = value;
    }
}


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

    if (!element) {
        return "";
    }

    if (element.selectedIndex < 0) {
        return element.value;
    }

    return element.options[
        element.selectedIndex
    ].text;
}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ============================================================
// ENTER TO CALCULATE
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

            const id =
                activeCalculator.id;

            if (
                id ===
                "interestCalculator"
            ) {
                calculateInterest();
            }

            else if (
                id ===
                "fdCalculator"
            ) {
                calculateFD();
            }

            else if (
                id ===
                "rdCalculator"
            ) {
                calculateRD();
            }

            else if (
                id ===
                "emiCalculator"
            ) {
                calculateEMI();
            }

        }
    );
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

    const saved =
        localStorage.getItem(
            "financeCalculatorValues"
        );

    if (!saved) {
        return;
    }

    try {

        const values =
            JSON.parse(saved);

        Object.keys(values).forEach(
            function (id) {

                const element =
                    document.getElementById(id);

                if (
                    element &&
                    values[id] !== undefined
                ) {

                    element.value =
                        values[id];

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

    if (
        savedTheme === "dark"
    ) {

        document.documentElement
            .setAttribute(
                "data-theme",
                "dark"
            );

        updateThemeIcon(
            "dark"
        );

    } else {

        updateThemeIcon(
            "light"
        );

    }

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

    const currentTheme =
        document.documentElement
            .getAttribute(
                "data-theme"
            );

    if (
        currentTheme === "dark"
    ) {

        document.documentElement
            .removeAttribute(
                "data-theme"
            );

        localStorage.setItem(
            "financeCalculatorTheme",
            "light"
        );

        updateThemeIcon(
            "light"
        );

    } else {

        document.documentElement
            .setAttribute(
                "data-theme",
                "dark"
            );

        localStorage.setItem(
            "financeCalculatorTheme",
            "dark"
        );

        updateThemeIcon(
            "dark"
        );

    }
}


function updateThemeIcon(theme) {

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
// ==========================================================
// SAVE PDF
// ==========================================================

function saveCalculatorAsPDF() {

    const activeCalculator =
        document.querySelector(
            ".calculator-card:not(.hidden)"
        );

    if (!activeCalculator) {
        alert("Please select a calculator first.");
        return;
    }

    const calculatorClone =
        activeCalculator.cloneNode(true);

    // Remove buttons from PDF
    calculatorClone
        .querySelectorAll("button")
        .forEach(function (button) {
            button.remove();
        });

    // Remove action areas if present
    calculatorClone
        .querySelectorAll(
            ".action-buttons, .result-actions, .finance-action-buttons"
        )
        .forEach(function (element) {
            element.remove();
        });

    const printWindow =
        window.open(
            "",
            "_blank",
            "width=900,height=700"
        );

    if (!printWindow) {
        alert(
            "Please allow pop-ups for this Finance App to save the PDF."
        );
        return;
    }

    printWindow.document.open();

    printWindow.document.write(`
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>Finance Calculator Result</title>

<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 30px;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background: #ffffff;

    color: #111827;
}

.pdf-container {
    width: 100%;
    max-width: 750px;

    margin: 0 auto;
}

.pdf-header {
    text-align: center;

    margin-bottom: 25px;

    border-bottom:
        2px solid #2563eb;

    padding-bottom: 15px;
}

.pdf-header h1 {
    margin: 0;

    color: #2563eb;

    font-size: 25px;
}

.pdf-header p {
    margin: 5px 0 0;

    color: #64748b;

    font-size: 12px;
}

.calculator-card {
    width: 100%;

    padding: 20px;

    border:
        1px solid #dbe3ec;

    border-radius: 12px;

    background: #ffffff;
}

.calculator-card h2 {
    margin:
        0 0 5px;

    font-size: 21px;

    color: #111827;
}

.calculator-card h3 {
    margin:
        0 0 18px;

    font-size: 12px;

    color: #64748b;
}

.form-group {
    margin-bottom: 12px;
}

.form-group label {
    display: block;

    margin-bottom: 5px;

    font-size: 11px;

    font-weight: 600;

    color: #334155;
}

input,
select {
    width: 100%;

    height: 36px;

    padding:
        0 9px;

    border:
        1px solid #cbd5e1;

    border-radius: 6px;

    font-size: 12px;

    background: #f8fafc;

    color: #111827;
}

input {
    display: block;
}

.result-card {
    margin-top: 18px;

    padding: 15px;

    border:
        1px solid #cbd5e1;

    border-radius: 9px;

    background: #eff6ff;
}

.result-card h3 {
    margin:
        0 0 10px;

    color: #111827;

    font-size: 15px;
}

.result-row {
    display: flex;

    justify-content:
        space-between;

    align-items: center;

    padding:
        8px 0;

    border-bottom:
        1px solid #dbeafe;

    gap: 20px;
}

.result-row:last-child {
    border-bottom: none;
}

.result-label {
    color: #64748b;

    font-size: 11px;
}

.result-value {
    color: #111827;

    font-size: 13px;

    font-weight: 700;

    text-align: right;
}

.analysis-card,
.analysis-section,
.interest-analysis {
    margin-top: 18px;

    padding: 15px;

    border:
        1px solid #cbd5e1;

    border-radius: 9px;

    background: #f8fafc;
}

.analysis-card h3,
.analysis-section h3,
.interest-analysis h3 {
    margin:
        0 0 10px;

    font-size: 14px;

    color: #111827;
}

.analysis-summary {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 8px;
}

.analysis-summary > div {
    padding: 9px;

    border:
        1px solid #dbe3ec;

    border-radius: 6px;

    background: #ffffff;
}

.analysis-summary small {
    display: block;

    color: #64748b;

    font-size: 9px;
}

.analysis-summary strong {
    color: #111827;

    font-size: 11px;
}

.analysis-table {
    width: 100%;

    border-collapse:
        collapse;

    margin-top: 10px;

    font-size: 10px;
}

.analysis-table th,
.analysis-table td {
    padding: 7px;

    border-bottom:
        1px solid #dbe3ec;

    text-align: right;
}

.analysis-table th {
    background: #e2e8f0;

    color: #334155;
}

.analysis-note {
    margin-top: 10px;

    font-size: 9px;

    color: #64748b;
}

.chart-container,
.chart-wrapper {
    max-width: 100%;
}

canvas {
    max-width: 100% !important;
}

.pdf-footer {
    margin-top: 25px;

    padding-top: 12px;

    border-top:
        1px solid #e2e8f0;

    text-align: center;

    color: #64748b;

    font-size: 10px;
}

@media print {

    body {
        padding: 15px;
    }

    .calculator-card {
        box-shadow: none;
    }

    @page {
        size: A4;
        margin: 15mm;
    }

}

</style>

</head>

<body>

<div class="pdf-container">

    <div class="pdf-header">

        <h1>Finance App</h1>

        <p>Financial Calculation Report</p>

    </div>

    ${calculatorClone.outerHTML}

    <div class="pdf-footer">

        Finance App by Surendra

    </div>

</div>

<script>

window.onload = function () {

    setTimeout(function () {

        window.print();

    }, 500);

};

window.onafterprint = function () {

    setTimeout(function () {

        window.close();

    }, 300);

};

<\/script>

</body>

</html>
`);

    printWindow.document.close();
}


// ==========================================================
// CONNECT SAVE PDF BUTTON
// ==========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const buttons =
            document.querySelectorAll(
                "button"
            );

        buttons.forEach(
            function (button) {

                const text =
                    button.textContent
                        .trim()
                        .toLowerCase();

                if (
                    text.includes("save pdf")
                ) {

                    button.addEventListener(
                        "click",
                        function (event) {

                            event.preventDefault();

                            saveCalculatorAsPDF();

                        }
                    );

                }

            }
        );

    }
);

// ============================================================
// END
// ============================================================