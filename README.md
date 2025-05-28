# BCV Property & Partnership Ecosystem Calculator

A comprehensive financial analysis and partnership modeling tool for Black Cockatoo Valley (BCV) ACT properties. Analyzes complex multi-partner structures including property ownership, conservation land transfers, worker housing programs, and equity distributions across a $6M+ ecosystem.

## 🌟 Features

### 🏘️ Property Portfolio Management
- **Multi-Property Analysis**: BCV (55ha) and 589 Property (24.7ha) modeling
- **Land Subdivision Simulator**: Dynamic allocation between residence and conservation land
- **Real-time Valuation**: Adjustable per-hectare land values with instant calculations
- **Equity Tracking**: Live net equity calculations for all properties

### 🤝 Partnership & Equity Analysis
- **Multi-Partner Contributions**: Track financial and operational contributions across 4 partners
- **Automatic Equity Calculations**: Real-time percentage calculations based on contribution levels
- **Partner Profiles**: Nic/ACT, Knight Family, Blue Summit, and Philanthropist modeling
- **Voting Rights Analysis**: Multiple methods for determining decision-making power

### 🏠 Worker Housing Economics
- **Subsidized Housing Modeling**: Market vs. affordable rent comparison
- **Tax Benefit Calculations**: 30% tax deduction modeling for charitable contributions
- **Long-term Cost Analysis**: Multi-year subsidy commitment tracking
- **Tenant Categorization**: Different housing scenarios for various worker types

### 💰 Financial Analysis & Projections
- **Interactive Property Analysis**: Real-time calculations for rental income from multiple properties
- **Debt Service Calculations**: Monthly and annual payment calculations with adjustable interest rates and loan terms
- **Revenue Stream Management**: Track income from:
  - 589 Property (New House)
  - BCV Properties (Houses 1 & 2, Cabins 1 & 2)
  - Blue Summit Cottages
  - Restaurant operations
  - Conservation grants and credits
- **Expense Tracking**: Property management costs and operating expense ratios
- **5-Year Projections**: Forward-looking financial analysis with 3% annual growth assumptions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository to your local machine
2. **Open the project folder** in your file manager
3. **Launch the application** by opening `index.html` in your web browser

That's it! No installation required - this is a pure HTML/CSS/JavaScript application.

### Alternative Launch Methods

#### Option 1: Direct File Opening
- Right-click on `index.html`
- Select "Open with" → Your preferred browser

#### Option 2: Local Server (Recommended for development)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

#### Option 3: Live Server (VS Code)
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
ACT Calculators/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript calculations
└── README.md          # This file
```

## 🎮 How to Use

1. **Adjust Interest Rate**: Use the slider to set annual interest rate (3% - 8%)
2. **Set Loan Term**: Choose loan duration (10-30 years)
3. **Configure Rental Rates**: Set weekly rent for each property
4. **Set Occupancy Rates**: Adjust expected occupancy percentages
5. **Input Additional Revenue**: Enter Blue Summit, Restaurant, and Conservation income
6. **Review Results**: Monitor the real-time dashboard showing:
   - Total Annual Revenue
   - Annual Debt Service
   - Operating Expenses
   - Net Annual Cashflow
7. **Analyze 5-Year Projection**: View year-by-year financial forecasts

## 🔧 Customization

### Modifying Default Values
Edit the following in `index.html`:
- Total debt amount (currently $3.5M)
- Default rental rates
- Default occupancy rates
- Revenue amounts

### Styling Changes
Modify `styles.css` to customize:
- Color schemes
- Layout spacing
- Font choices
- Responsive breakpoints

### Calculation Logic
Update `script.js` to adjust:
- Growth rate assumptions (currently 3%)
- Expense calculation methods
- Currency formatting

## 🌐 GitHub Pages Deployment

To host this calculator on GitHub Pages:

1. **Create a GitHub repository**
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
4. **Access your calculator** at: `https://yourusername.github.io/repository-name`

## 💡 Features Breakdown

### Financial Calculations
- **Loan Amortization**: Standard mortgage payment calculations
- **Cash Flow Analysis**: Revenue minus expenses and debt service
- **Multi-Property Portfolio**: Track 5 separate rental properties
- **Growth Projections**: 3% annual growth modeling

### Interactive Elements
- **Range Sliders**: Easy adjustment of rates and percentages
- **Real-time Updates**: Instant recalculation on input changes
- **Color-coded Results**: Visual indicators for positive/negative cash flow
- **Responsive Design**: Adapts to all screen sizes

### Professional Presentation
- **Modern UI**: Clean, professional design
- **Print-friendly**: Optimized for reports and presentations
- **Mobile-ready**: Full functionality on mobile devices

## 🛠 Technical Details

- **Framework**: Vanilla HTML/CSS/JavaScript (no dependencies)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Lightweight and fast-loading
- **Offline Capable**: Works without internet connection once loaded

## 📊 Default Assumptions

- **Total Debt**: $3,500,000
- **Interest Rate**: 5.5% (adjustable 3-8%)
- **Loan Term**: 20 years (adjustable 10-30 years)
- **Revenue Growth**: 3% annually
- **Management Costs**: 12% of rental income
- **Operating Expenses**: 45% of business revenue

## 🤝 Contributing

This calculator can be enhanced with additional features:
- Export to PDF functionality
- Scenario comparison tools
- Tax calculation integration
- Advanced amortization schedules
- Historical data tracking

## 📞 Support

For questions or modifications, please refer to the code comments or create issues in the GitHub repository.

## 📄 License

This project is provided as-is for financial analysis purposes. Please consult with financial professionals for investment decisions.

---

**Black Cockatoo Valley Property Calculator** - Making property investment analysis simple and accessible. 