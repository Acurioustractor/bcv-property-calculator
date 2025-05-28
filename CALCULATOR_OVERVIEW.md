# 🏠 BCV Property Calculator - Complete Overview

## 📋 What This Calculator Does

The BCV Property Financial Calculator helps you analyze the financial viability of a **$3.5 million property portfolio** investment in the ACT region. It calculates whether your rental income and other revenue streams can cover debt payments and operating expenses, while projecting financial performance over 5 years.

## 🎯 Key Questions It Answers

✅ **Can I afford the debt payments?**
- Monthly and annual debt service calculations
- Total interest over loan lifetime

✅ **How much rental income will I generate?**
- Income from 5 separate properties
- Adjustable occupancy rates for realistic projections

✅ **What are my total operating costs?**
- Property management fees
- Business operating expenses

✅ **Will I have positive cash flow?**
- Net income after all expenses and debt service
- Real-time updates as you adjust parameters

✅ **What does the future look like?**
- 5-year projections with 3% annual growth
- Loan balance reduction over time

## 💰 Current Revenue Sources

### Property Rentals
1. **589 Property - New House**: $800/week @ 85% occupancy
2. **BCV House 1**: $500/week @ 75% occupancy  
3. **BCV House 2**: $450/week @ 75% occupancy
4. **BCV Cabin 1**: $350/week @ 75% occupancy
5. **BCV Cabin 2**: $350/week @ 75% occupancy

### Business Revenue
- **Blue Summit Cottages**: $800,000 annually
- **Restaurant Operations**: $400,000 annually
- **Conservation Grants**: $50,000 annually

## 💸 Current Expense Categories

### Debt Service
- **Principal**: $3,500,000 (fixed)
- **Interest Rate**: 5.5% (adjustable 3-8%)
- **Loan Term**: 20 years (adjustable 10-30 years)

### Operating Expenses
- **Property Management**: 12% of rental income
- **Business Operations**: 45% of business revenue

## 📊 How Numbers Flow Through the Calculator

```
INPUT SOURCES → CALCULATIONS → RESULTS
     ↓               ↓           ↓
User Sliders → Rental Income → Total Revenue
Property Info → Debt Service → Annual Expenses  
Revenue Data → Operating Costs → Net Cash Flow
     ↓               ↓           ↓
All combined → Growth Model → 5-Year Projections
```

## 🔍 Understanding Each Calculation

### 1. **Debt Service Calculation**
```
Monthly Payment = Principal × [Rate × (1+Rate)^Months] / [(1+Rate)^Months - 1]
Annual Payment = Monthly Payment × 12
```

### 2. **Rental Income Calculation**
```
Annual Income = Weekly Rent × 52 weeks × Occupancy Rate
Total Rental = Sum of all property rental incomes
```

### 3. **Operating Expenses**
```
Property Management = Total Rental Income × Management Rate
Business Expenses = (Blue Summit + Restaurant) × Operating Rate
Total Expenses = Property Management + Business Expenses
```

### 4. **Net Cash Flow**
```
Net Cash Flow = Total Revenue - Annual Debt Service - Total Operating Expenses
```

### 5. **5-Year Projections**
```
Year N Revenue = Base Revenue × (1.03)^(N-1)
Year N Expenses = Base Expenses × (1.03)^(N-1)
Loan Balance = Principal - Cumulative Principal Payments
```

## 📁 Documentation Files

### 🚀 **Getting Started**
- **`README.md`** - Project overview and quick start guide
- **`DEPLOYMENT.md`** - How to host on GitHub Pages
- **`launch.sh`** - Easy local development script

### 🔧 **For Developers**
- **`TECHNICAL_DOCUMENTATION.md`** - Complete technical reference
- **`HOW_TO_ADD_CALCULATIONS.md`** - Simple guide for adding features

### 📋 **Project Files**
- **`index.html`** - User interface and structure
- **`styles.css`** - Visual design and responsive layout
- **`script.js`** - Calculation engine and logic

## 🎛️ What You Can Adjust

### Property Settings
- Weekly rent for each property (sliders)
- Occupancy rates for realistic income projections
- Property management cost percentage

### Loan Settings  
- Interest rate (3% to 8%)
- Loan term (10 to 30 years)
- View impact on monthly/annual payments

### Business Revenue
- Blue Summit Cottages income (text input)
- Restaurant revenue (text input)
- Conservation grants and credits (text input)
- Operating expense ratio (slider)

## 📈 Current Results (Default Settings)

With default settings, the calculator shows:
- **Total Annual Revenue**: ~$1.35M
- **Annual Debt Service**: ~$293K
- **Operating Expenses**: ~$603K
- **Net Cash Flow**: ~$457K (positive)

*Note: These are approximate values - actual results update in real-time as you adjust inputs.*

## 🔮 5-Year Projection Insights

The calculator assumes:
- **3% annual growth** in revenue and expenses
- **Fixed debt service** (same payment each year)
- **Declining loan balance** as principal is paid down

This helps you see:
- Whether cash flow improves over time
- How much loan principal you'll pay down
- Long-term viability of the investment

## 🎯 Adding New Features

### Easy Additions (No Programming Required)
- Change default values in the HTML
- Adjust growth rate assumptions
- Modify input ranges and limits

### Custom Calculations (Basic Programming)
Follow the **`HOW_TO_ADD_CALCULATIONS.md`** guide to add:
- New revenue sources
- Additional expense categories
- Custom financial metrics

### Advanced Features (Technical)
Refer to **`TECHNICAL_DOCUMENTATION.md`** for:
- Complex calculation modifications
- New projection models
- Integration with external data

## 🚀 Quick Start Guide

### Local Development
1. **Download/clone** the project files
2. **Run** `./launch.sh` (Mac/Linux) or open `index.html`
3. **Adjust** sliders and inputs to see real-time updates

### GitHub Hosting
1. **Create** a GitHub repository
2. **Upload** all project files
3. **Enable** GitHub Pages in repository settings
4. **Share** your calculator URL with others

## 💡 Use Cases

### Property Investment Analysis
- Evaluate purchase decisions
- Compare financing options
- Model different rental scenarios

### Business Planning  
- Present to investors or partners
- Plan for future growth
- Analyze break-even scenarios

### Financial Reporting
- Generate projections for lenders
- Track actual vs. projected performance
- Support budget planning

## 🆘 Need Help?

### Quick Questions
- Check **`HOW_TO_ADD_CALCULATIONS.md`** for simple modifications
- Review **`README.md`** for basic usage

### Technical Issues
- Consult **`TECHNICAL_DOCUMENTATION.md`** for detailed explanations
- Check browser console for error messages
- Verify all files are in the same directory

### Advanced Customization
- Study the JavaScript code in `script.js`
- Test changes locally before deploying
- Keep backups of working versions

---

**The BCV Property Calculator provides a comprehensive analysis tool for property investment decisions, with the flexibility to adapt to your specific needs and scenarios.** 