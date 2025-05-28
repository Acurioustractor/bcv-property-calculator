# 🧮 BCV Property Calculator - Technical Documentation

This document provides a comprehensive guide to understanding how the BCV Property Financial Calculator works, where data comes from, how calculations are performed, and how to add new features.

## 📋 Table of Contents

1. [Calculator Overview](#calculator-overview)
2. [Data Sources & Input Variables](#data-sources--input-variables)
3. [Calculation Engine](#calculation-engine)
4. [Code Architecture](#code-architecture)
5. [Adding New Calculations](#adding-new-calculations)
6. [Modifying Existing Features](#modifying-existing-features)
7. [Troubleshooting](#troubleshooting)

---

## 🏗️ Calculator Overview

### Purpose
The BCV Property Financial Calculator analyzes the financial viability of a $3.5M property portfolio investment, calculating:
- Debt service requirements
- Rental income projections
- Operating expenses
- Net cash flow
- 5-year financial projections

### Core Components
1. **Input Interface**: Sliders and number inputs for user data
2. **Calculation Engine**: JavaScript functions that process inputs
3. **Display Layer**: Real-time updates of results
4. **Projection Model**: 5-year forward-looking analysis

---

## 📊 Data Sources & Input Variables

### 1. Debt Parameters
```javascript
// Located in: script.js, line 21-24
const totalDebt = 3500000;                    // Fixed at $3.5M
const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
const loanTerm = parseInt(document.getElementById('loanTerm').value);
```

**Source**: 
- `totalDebt`: Hard-coded constant (line 23)
- `interestRate`: User input via slider (3% - 8%)
- `loanTerm`: User input via slider (10-30 years)

### 2. Rental Income Variables
```javascript
// Located in: script.js, line 26-32
const newHouseRent = parseFloat(document.getElementById('newHouseRent').value);
const newHouseOccupancy = parseFloat(document.getElementById('newHouseOccupancy').value) / 100;
const bcvHouse1Rent = parseFloat(document.getElementById('bcvHouse1Rent').value);
const bcvHouse2Rent = parseFloat(document.getElementById('bcvHouse2Rent').value);
const bcvCabin1Rent = parseFloat(document.getElementById('bcvCabin1Rent').value);
const bcvCabin2Rent = parseFloat(document.getElementById('bcvCabin2Rent').value);
const bcvOccupancy = parseFloat(document.getElementById('bcvOccupancy').value) / 100;
```

**Sources**:
- All rental rates: User input via sliders (HTML elements)
- Occupancy rates: User input as percentages, converted to decimals

### 3. Additional Revenue Streams
```javascript
// Located in: script.js, line 34-37
const blueSummitRevenue = parseFloat(document.getElementById('blueSummitRevenue').value) || 0;
const restaurantRevenue = parseFloat(document.getElementById('restaurantRevenue').value) || 0;
const conservationRevenue = parseFloat(document.getElementById('conservationRevenue').value) || 0;
```

**Sources**: User input via number fields with fallback to 0

### 4. Expense Ratios
```javascript
// Located in: script.js, line 39-41
const managementCosts = parseFloat(document.getElementById('managementCosts').value) / 100;
const operatingExpenses = parseFloat(document.getElementById('operatingExpenses').value) / 100;
```

**Sources**: User input via sliders, converted to decimal percentages

---

## ⚙️ Calculation Engine

### 1. Debt Service Calculation
```javascript
// Located in: script.js, line 56-60
const monthlyRate = interestRate / 12;
const numPayments = loanTerm * 12;
const monthlyPayment = totalDebt * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                      (Math.pow(1 + monthlyRate, numPayments) - 1);
const annualDebtService = monthlyPayment * 12;
const totalInterest = (monthlyPayment * numPayments) - totalDebt;
```

**Formula**: Standard mortgage amortization formula
- **Input**: `totalDebt`, `interestRate`, `loanTerm`
- **Output**: `monthlyPayment`, `annualDebtService`, `totalInterest`

### 2. Rental Income Calculation
```javascript
// Located in: script.js, line 62-68
const newHouseAnnual = newHouseRent * 52 * newHouseOccupancy;
const bcvHouse1Annual = bcvHouse1Rent * 52 * bcvOccupancy;
const bcvHouse2Annual = bcvHouse2Rent * 52 * bcvOccupancy;
const bcvCabin1Annual = bcvCabin1Rent * 52 * bcvOccupancy;
const bcvCabin2Annual = bcvCabin2Rent * 52 * bcvOccupancy;
const totalRentalIncome = newHouseAnnual + bcvHouse1Annual + bcvHouse2Annual + 
                         bcvCabin1Annual + bcvCabin2Annual;
```

**Formula**: `Weekly Rent × 52 weeks × Occupancy Rate`
- **Input**: Individual property rents and occupancy rates
- **Output**: Annual rental income per property and total

### 3. Total Revenue Calculation
```javascript
// Located in: script.js, line 71
const totalRevenue = totalRentalIncome + blueSummitRevenue + restaurantRevenue + conservationRevenue;
```

**Formula**: Sum of all revenue streams
- **Input**: Rental income + business revenues + grants
- **Output**: Total annual revenue

### 4. Operating Expenses Calculation
```javascript
// Located in: script.js, line 73-75
const propertyManagementCost = totalRentalIncome * managementCosts;
const totalOperatingExpenses = (blueSummitRevenue + restaurantRevenue) * operatingExpenses + 
                              propertyManagementCost;
```

**Formula**: 
- Property management: `Total Rental Income × Management Rate`
- Business expenses: `(Blue Summit + Restaurant Revenue) × Operating Rate`
- **Output**: Total operating expenses

### 5. Net Cash Flow Calculation
```javascript
// Located in: script.js, line 78
const netCashflow = totalRevenue - annualDebtService - totalOperatingExpenses;
```

**Formula**: `Total Revenue - Debt Service - Operating Expenses`
- **Output**: Net annual cash flow (positive or negative)

### 6. 5-Year Projections
```javascript
// Located in: script.js, line 105-126
let currentBalance = totalDebt;
const growthRate = 1.03; // 3% annual growth

for (let year = 1; year <= 5; year++) {
    const yearRevenue = totalRevenue * Math.pow(growthRate, year - 1);
    const yearExpenses = totalOperatingExpenses * Math.pow(growthRate, year - 1);
    const yearNet = yearRevenue - annualDebtService - yearExpenses;
    
    // Calculate loan balance reduction
    for (let month = 1; month <= 12; month++) {
        const interestPayment = currentBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        currentBalance -= principalPayment;
    }
}
```

**Formula**: 
- Revenue growth: `Current Revenue × (1.03)^(year-1)`
- Loan balance: Monthly principal payments reduce balance
- **Assumptions**: 3% annual growth rate for revenue and expenses

---

## 🏛️ Code Architecture

### File Structure
```
├── index.html          # User interface and HTML structure
├── styles.css          # Visual styling and responsive design
└── script.js           # Calculation engine and logic
```

### Key Functions

#### 1. `updateCalculations()`
**Location**: `script.js`, line 21
**Purpose**: Main calculation function, triggered on any input change
**Process**:
1. Collect all input values
2. Perform calculations
3. Update display elements
4. Recalculate projections

#### 2. `formatCurrency(amount)`
**Location**: `script.js`, line 1
**Purpose**: Format numbers for display (e.g., $1.5M, $250K)
**Input**: Numeric amount
**Output**: Formatted string with appropriate scale

#### 3. `formatCurrencyFull(amount)`
**Location**: `script.js`, line 12
**Purpose**: Format full currency amounts (e.g., $1,250,000)
**Input**: Numeric amount
**Output**: Full formatted currency string

### Data Flow
```
User Input → Input Elements → JavaScript Variables → Calculations → Display Updates
     ↑                                                                      ↓
     └─────────────────── Real-time Updates ←──────────────────────────────┘
```

---

## ➕ Adding New Calculations

### Step 1: Add HTML Input Elements

```html
<!-- Add to index.html in appropriate section -->
<div class="input-group">
    <label>New Calculation Input</label>
    <input type="range" id="newInput" min="0" max="100" value="50" oninput="updateCalculations()">
    <div class="value-display" id="newInputDisplay">50%</div>
</div>
```

### Step 2: Add Variable Collection

```javascript
// Add to updateCalculations() function after line 41
const newInputValue = parseFloat(document.getElementById('newInput').value) / 100;
```

### Step 3: Add Display Update

```javascript
// Add to display updates section after line 54
document.getElementById('newInputDisplay').textContent = `${(newInputValue * 100).toFixed(0)}%`;
```

### Step 4: Add Calculation Logic

```javascript
// Add your calculation after line 78
const newCalculationResult = totalRevenue * newInputValue; // Example calculation
```

### Step 5: Add Result Display

```html
<!-- Add result element to HTML -->
<div class="calc-row">
    <span>New Calculation Result</span>
    <span id="newCalcResult">$0</span>
</div>
```

```javascript
// Update the result in JavaScript
document.getElementById('newCalcResult').textContent = formatCurrencyFull(newCalculationResult);
```

### Example: Adding Tax Calculation

```javascript
// 1. Add tax rate variable (after line 41)
const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

// 2. Calculate taxes (after line 78)
const annualTaxes = netCashflow > 0 ? netCashflow * taxRate : 0;
const afterTaxCashflow = netCashflow - annualTaxes;

// 3. Update displays
document.getElementById('taxRateDisplay').textContent = `${(taxRate * 100).toFixed(1)}%`;
document.getElementById('annualTaxes').textContent = formatCurrencyFull(annualTaxes);
document.getElementById('afterTaxCashflow').textContent = formatCurrency(afterTaxCashflow);
```

---

## 🔧 Modifying Existing Features

### Changing Default Values

#### Debt Amount
```javascript
// Location: script.js, line 23
const totalDebt = 4500000; // Change from 3500000 to 4500000
```

#### Growth Rate
```javascript
// Location: script.js, line 107
const growthRate = 1.025; // Change from 1.03 (3%) to 1.025 (2.5%)
```

#### Default Input Values
```html
<!-- Location: index.html -->
<input type="range" id="interestRate" min="3" max="8" value="6.0" step="0.1">
<!-- Changed default from 5.5 to 6.0 -->
```

### Adding New Revenue Streams

```javascript
// 1. Add variable collection
const newRevenueStream = parseFloat(document.getElementById('newRevenue').value) || 0;

// 2. Include in total revenue calculation
const totalRevenue = totalRentalIncome + blueSummitRevenue + restaurantRevenue + 
                    conservationRevenue + newRevenueStream;

// 3. Add to revenue summary display
document.getElementById('newRevenueSum').textContent = formatCurrencyFull(newRevenueStream);
```

### Modifying Expense Calculations

```javascript
// Example: Adding maintenance costs
const maintenanceCosts = totalRentalIncome * 0.05; // 5% of rental income

// Include in total operating expenses
const totalOperatingExpenses = (blueSummitRevenue + restaurantRevenue) * operatingExpenses + 
                              propertyManagementCost + maintenanceCosts;
```

---

## 🎯 Advanced Customization Examples

### 1. Adding Scenario Comparison

```javascript
// Create multiple scenarios
const scenarios = {
    conservative: { growth: 1.02, occupancy: 0.70 },
    moderate: { growth: 1.03, occupancy: 0.80 },
    optimistic: { growth: 1.04, occupancy: 0.90 }
};

// Calculate for each scenario
Object.keys(scenarios).forEach(scenario => {
    const params = scenarios[scenario];
    // Perform calculations with scenario parameters
});
```

### 2. Adding Monthly Cash Flow Analysis

```javascript
function calculateMonthlyCashFlow() {
    const monthlyRevenue = totalRevenue / 12;
    const monthlyOperatingExpenses = totalOperatingExpenses / 12;
    const monthlyCashFlow = monthlyRevenue - monthlyPayment - monthlyOperatingExpenses;
    
    return {
        revenue: monthlyRevenue,
        expenses: monthlyOperatingExpenses,
        debtService: monthlyPayment,
        netCashFlow: monthlyCashFlow
    };
}
```

### 3. Adding Break-Even Analysis

```javascript
function calculateBreakEven() {
    const fixedCosts = annualDebtService;
    const variableCosts = totalOperatingExpenses;
    const breakEvenRevenue = fixedCosts + variableCosts;
    const breakEvenOccupancy = breakEvenRevenue / (totalRentalIncome / averageOccupancy);
    
    return {
        revenue: breakEvenRevenue,
        occupancy: breakEvenOccupancy
    };
}
```

---

## 🔍 Troubleshooting

### Common Issues

#### 1. Calculations Not Updating
**Cause**: Missing `oninput="updateCalculations()"` on input elements
**Solution**: Add the trigger to all input elements

#### 2. NaN (Not a Number) Results
**Cause**: Invalid input values or division by zero
**Solution**: Add validation
```javascript
const safeValue = parseFloat(inputValue) || 0;
if (denominator === 0) return 0;
```

#### 3. Display Not Updating
**Cause**: Incorrect element ID or missing DOM element
**Solution**: Verify element IDs match between HTML and JavaScript

### Debug Methods

#### 1. Console Logging
```javascript
function updateCalculations() {
    console.log('Starting calculations...');
    const totalDebt = 3500000;
    console.log('Total Debt:', totalDebt);
    // Add more logging as needed
}
```

#### 2. Input Validation
```javascript
function validateInputs() {
    const inputs = ['interestRate', 'loanTerm', 'newHouseRent'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (!element) console.error(`Missing element: ${id}`);
        if (isNaN(element.value)) console.error(`Invalid value for ${id}: ${element.value}`);
    });
}
```

---

## 📝 Development Workflow

### Making Changes

1. **Test Locally**: Always test changes using `./launch.sh` or by opening `index.html`
2. **Validate Calculations**: Use known inputs to verify calculation accuracy
3. **Check Responsiveness**: Test on different screen sizes
4. **Document Changes**: Update this documentation when adding features

### Best Practices

1. **Consistent Formatting**: Use the existing `formatCurrency()` functions
2. **Input Validation**: Always validate user inputs
3. **Error Handling**: Provide fallback values for edge cases
4. **Performance**: Minimize calculations in the main update loop
5. **Maintainability**: Comment complex calculations and formulas

---

## 📚 References

- **Mortgage Calculation Formula**: Standard amortization formula
- **Real Estate Financial Analysis**: Industry standard metrics
- **JavaScript Number Formatting**: Intl.NumberFormat API
- **CSS Grid Layout**: Modern responsive design patterns

---

**This documentation should be updated whenever new features are added or existing calculations are modified.** 