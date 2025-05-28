# 🎯 How to Add New Calculations - Simple Guide

This guide explains how to add new calculations to your BCV Property Calculator in simple, step-by-step instructions.

## 🤔 Understanding How It Works

Think of the calculator like a recipe:
1. **Ingredients** (inputs): Numbers you type or adjust with sliders
2. **Recipe steps** (calculations): Math that processes the ingredients
3. **Final dish** (results): Numbers displayed on the screen

When you change any ingredient, the entire recipe runs again and updates the final dish.

## 📍 Where Numbers Come From

### Current Data Sources:
- **Fixed Numbers**: Some numbers are built into the calculator (like the $3.5M debt)
- **User Inputs**: Numbers you control with sliders and text boxes
- **Calculated Results**: Numbers computed from other numbers

### Finding the Source of Any Number:
1. **Look at the HTML file** (`index.html`) - this shows what users can control
2. **Look at the JavaScript file** (`script.js`) - this shows how calculations work
3. **Use your browser's inspector** - right-click any number and "Inspect"

## ➕ Adding a New Input Control

### Example: Adding a "Maintenance Cost Rate"

**Step 1: Add the Slider (in `index.html`)**
```html
<div class="input-group">
    <label>Annual Maintenance Cost Rate (%)</label>
    <input type="range" id="maintenanceRate" min="1" max="10" value="3" step="0.5" oninput="updateCalculations()">
    <div class="value-display" id="maintenanceRateDisplay">3%</div>
</div>
```

**What each part does:**
- `id="maintenanceRate"` - The name JavaScript will use to find this slider
- `min="1" max="10"` - Slider goes from 1% to 10%
- `value="3"` - Starts at 3%
- `oninput="updateCalculations()"` - Recalculates when you move the slider

**Step 2: Read the Value (in `script.js`)**
Add this line around line 40 in the `updateCalculations()` function:
```javascript
const maintenanceRate = parseFloat(document.getElementById('maintenanceRate').value) / 100;
```

**What this does:**
- Gets the value from the slider
- Converts it from percent (3) to decimal (0.03)

**Step 3: Update the Display (in `script.js`)**
Add this line around line 55:
```javascript
document.getElementById('maintenanceRateDisplay').textContent = `${(maintenanceRate * 100).toFixed(1)}%`;
```

**What this does:**
- Shows the current percentage next to the slider

## 🧮 Adding a New Calculation

### Example: Calculate Annual Maintenance Costs

**Step 4: Do the Math (in `script.js`)**
Add this line after the existing expense calculations (around line 75):
```javascript
const annualMaintenanceCosts = totalRentalIncome * maintenanceRate;
```

**What this does:**
- Multiplies total rental income by the maintenance rate
- If rental income is $100,000 and rate is 3%, maintenance = $3,000

**Step 5: Include in Total Expenses**
Find the line that calculates `totalOperatingExpenses` and modify it:
```javascript
const totalOperatingExpenses = (blueSummitRevenue + restaurantRevenue) * operatingExpenses + 
                              propertyManagementCost + annualMaintenanceCosts;
```

## 📊 Displaying the Result

### Example: Show the Maintenance Costs

**Step 6: Add Display Area (in `index.html`)**
Find the calculation box and add:
```html
<div class="calc-row">
    <span>Annual Maintenance Costs</span>
    <span id="maintenanceCostDisplay">$0</span>
</div>
```

**Step 7: Update the Display (in `script.js`)**
Add this line with the other display updates (around line 90):
```javascript
document.getElementById('maintenanceCostDisplay').textContent = formatCurrencyFull(annualMaintenanceCosts);
```

## 🔄 Complete Example Workflow

Here's how to add **Property Insurance Costs**:

### 1. HTML Input (add to appropriate section):
```html
<div class="input-group">
    <label>Annual Insurance Premium ($)</label>
    <input type="number" id="insurancePremium" value="15000" step="1000" oninput="updateCalculations()">
</div>
```

### 2. JavaScript Variable (add around line 40):
```javascript
const insurancePremium = parseFloat(document.getElementById('insurancePremium').value) || 0;
```

### 3. Include in Expenses (modify existing line):
```javascript
const totalOperatingExpenses = (blueSummitRevenue + restaurantRevenue) * operatingExpenses + 
                              propertyManagementCost + insurancePremium;
```

### 4. Display Result (add to HTML):
```html
<div class="calc-row">
    <span>Property Insurance</span>
    <span id="insuranceDisplay">$0</span>
</div>
```

### 5. Update Display (add to JavaScript):
```javascript
document.getElementById('insuranceDisplay').textContent = formatCurrencyFull(insurancePremium);
```

## 🎛️ Types of Inputs You Can Add

### 1. **Number Input Box**
```html
<input type="number" id="yourId" value="1000" step="100" oninput="updateCalculations()">
```
**Good for**: Dollar amounts, fixed numbers

### 2. **Percentage Slider**
```html
<input type="range" id="yourId" min="0" max="50" value="10" step="1" oninput="updateCalculations()">
```
**Good for**: Rates, percentages, ratios

### 3. **Dropdown Selection**
```html
<select id="yourId" onchange="updateCalculations()">
    <option value="conservative">Conservative</option>
    <option value="moderate">Moderate</option>
    <option value="aggressive">Aggressive</option>
</select>
```
**Good for**: Scenarios, categories

## 🧪 Testing Your Changes

### 1. **Open the Calculator**
- Run `./launch.sh` or open `index.html` in your browser

### 2. **Check Your Input**
- Does the new input appear where expected?
- Does moving the slider update the display value?

### 3. **Check the Calculation**
- Change your input and see if results update
- Use simple numbers to verify the math is correct

### 4. **Check Edge Cases**
- What happens if you put in 0?
- What happens with very large numbers?

## 🐛 Common Problems & Solutions

### Problem: "My input doesn't appear"
**Solution**: Check that your HTML is in the right section and properly formatted

### Problem: "Moving the slider doesn't update anything"
**Solution**: Make sure you have `oninput="updateCalculations()"` on your input

### Problem: "I get NaN (Not a Number) in results"
**Solution**: Add `|| 0` to your variable like this:
```javascript
const myValue = parseFloat(document.getElementById('myInput').value) || 0;
```

### Problem: "The display doesn't update"
**Solution**: Check that your element ID in HTML matches the ID in JavaScript exactly

## 📝 Calculation Ideas You Could Add

### Revenue Enhancements:
- **Parking fees**: Extra income from parking spots
- **Laundry revenue**: Income from coin-operated laundry
- **Pet fees**: Additional rent for pet-friendly units
- **Late payment fees**: Income from late rent payments

### Expense Additions:
- **Property insurance**: Annual insurance premiums
- **Property taxes**: Annual tax payments
- **Utilities**: Water, electric, gas costs
- **Landscaping**: Garden and lawn maintenance
- **Snow removal**: Seasonal snow clearing costs
- **Advertising**: Marketing costs for finding tenants

### Advanced Calculations:
- **Break-even occupancy**: What occupancy rate do you need to break even?
- **Price per square foot**: Calculate rental rates per square foot
- **Return on investment**: Calculate ROI percentage
- **Debt-to-income ratio**: Compare debt payments to income

## 🎯 Quick Reference

**To add any new calculation:**
1. ✅ Add HTML input element with unique `id`
2. ✅ Add JavaScript variable to read the input
3. ✅ Use the variable in your calculation
4. ✅ Add HTML element to display the result
5. ✅ Add JavaScript to update the display
6. ✅ Test it works!

**Remember**: Every input needs `oninput="updateCalculations()"` to work automatically!

---

**Need help? Check the full technical documentation in `TECHNICAL_DOCUMENTATION.md` for more advanced features.** 