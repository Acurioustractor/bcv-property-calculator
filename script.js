function formatCurrency(amount) {
    const absAmount = Math.abs(amount);
    const sign = amount < 0 ? '-' : '';
    
    if (absAmount >= 1000000) {
        return sign + '$' + (absAmount / 1000000).toFixed(2) + 'M';
    } else if (absAmount >= 1000) {
        return sign + '$' + Math.round(absAmount / 1000) + 'K';
    }
    return sign + '$' + Math.round(absAmount);
}

function formatCurrencyFull(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function updateCalculations() {
    // Get debt values
    const totalDebt = 3500000;
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    
    // Get rental values
    const newHouseRent = parseFloat(document.getElementById('newHouseRent').value);
    const newHouseOccupancy = parseFloat(document.getElementById('newHouseOccupancy').value) / 100;
    const bcvHouse1Rent = parseFloat(document.getElementById('bcvHouse1Rent').value);
    const bcvHouse2Rent = parseFloat(document.getElementById('bcvHouse2Rent').value);
    const bcvCabin1Rent = parseFloat(document.getElementById('bcvCabin1Rent').value);
    const bcvCabin2Rent = parseFloat(document.getElementById('bcvCabin2Rent').value);
    const bcvOccupancy = parseFloat(document.getElementById('bcvOccupancy').value) / 100;
    
    // Get additional revenue
    const blueSummitRevenue = parseFloat(document.getElementById('blueSummitRevenue').value) || 0;
    const restaurantRevenue = parseFloat(document.getElementById('restaurantRevenue').value) || 0;
    const conservationRevenue = parseFloat(document.getElementById('conservationRevenue').value) || 0;
    
    // Get expense ratios
    const managementCosts = parseFloat(document.getElementById('managementCosts').value) / 100;
    const operatingExpenses = parseFloat(document.getElementById('operatingExpenses').value) / 100;
    
    // Get new property portfolio inputs
    const bcvValue = parseFloat(document.getElementById('bcvValue')?.value) || 1600000;
    const bcvDebt = parseFloat(document.getElementById('bcvDebt')?.value) || 900000;
    const newPropertyPrice = parseFloat(document.getElementById('newPropertyPrice')?.value) || 2515000;
    const residenceSize = parseFloat(document.getElementById('residenceSize')?.value) || 2.5;
    const valuePerHa = parseFloat(document.getElementById('valuePerHa')?.value) || 100000;
    
    // Get partner contribution inputs
    const nicOperationalValue = parseFloat(document.getElementById('nicOperationalValue')?.value) || 200000;
    const housingSubsidy = parseFloat(document.getElementById('housingSubsidy')?.value) || 26000;
    const subsidyYears = parseFloat(document.getElementById('subsidyYears')?.value) || 10;
    const blueSummitValue = parseFloat(document.getElementById('blueSummitValue')?.value) || 3000000;
    const operationalSystems = parseFloat(document.getElementById('operationalSystems')?.value) || 500000;
    const nurseryRenovation = parseFloat(document.getElementById('nurseryRenovation')?.value) || 500000;
    const employmentProgram = parseFloat(document.getElementById('employmentProgram')?.value) || 300000;
    
    // Get worker housing inputs
    const marketRent = parseFloat(document.getElementById('marketRent')?.value) || 800;
    const subsidizedRent = parseFloat(document.getElementById('subsidizedRent')?.value) || 300;
    
    // Update display values
    document.getElementById('interestRateDisplay').textContent = `${(interestRate * 100).toFixed(1)}%`;
    document.getElementById('loanTermDisplay').textContent = `${loanTerm} years`;
    document.getElementById('newHouseRentDisplay').textContent = `$${newHouseRent}/week`;
    document.getElementById('newHouseOccupancyDisplay').textContent = `${(newHouseOccupancy * 100).toFixed(0)}%`;
    document.getElementById('bcvHouse1RentDisplay').textContent = `$${bcvHouse1Rent}/week`;
    document.getElementById('bcvHouse2RentDisplay').textContent = `$${bcvHouse2Rent}/week`;
    document.getElementById('bcvCabin1RentDisplay').textContent = `$${bcvCabin1Rent}/week`;
    document.getElementById('bcvCabin2RentDisplay').textContent = `$${bcvCabin2Rent}/week`;
    document.getElementById('bcvOccupancyDisplay').textContent = `${(bcvOccupancy * 100).toFixed(0)}%`;
    document.getElementById('managementCostsDisplay').textContent = `${(managementCosts * 100).toFixed(0)}%`;
    document.getElementById('operatingExpensesDisplay').textContent = `${(operatingExpenses * 100).toFixed(0)}%`;
    
    // Calculate debt service
    const monthlyRate = interestRate / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = totalDebt * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const annualDebtService = monthlyPayment * 12;
    const totalInterest = (monthlyPayment * numPayments) - totalDebt;
    
    // Calculate rental income
    const newHouseAnnual = newHouseRent * 52 * newHouseOccupancy;
    const bcvHouse1Annual = bcvHouse1Rent * 52 * bcvOccupancy;
    const bcvHouse2Annual = bcvHouse2Rent * 52 * bcvOccupancy;
    const bcvCabin1Annual = bcvCabin1Rent * 52 * bcvOccupancy;
    const bcvCabin2Annual = bcvCabin2Rent * 52 * bcvOccupancy;
    const totalRentalIncome = newHouseAnnual + bcvHouse1Annual + bcvHouse2Annual + bcvCabin1Annual + bcvCabin2Annual;
    
    // Calculate total revenue
    const totalRevenue = totalRentalIncome + blueSummitRevenue + restaurantRevenue + conservationRevenue;
    
    // Calculate expenses
    const propertyManagementCost = totalRentalIncome * managementCosts;
    const totalOperatingExpenses = (blueSummitRevenue + restaurantRevenue) * operatingExpenses + propertyManagementCost;
    
    // Calculate net cashflow
    const netCashflow = totalRevenue - annualDebtService - totalOperatingExpenses;
    
    // Update debt calculations
    document.getElementById('monthlyPaymentCalc').textContent = formatCurrencyFull(monthlyPayment);
    document.getElementById('annualPaymentCalc').textContent = formatCurrencyFull(annualDebtService);
    document.getElementById('totalInterestCalc').textContent = formatCurrencyFull(totalInterest);
    
    // Update rental income calculations
    document.getElementById('newHouseAnnual').textContent = formatCurrencyFull(newHouseAnnual);
    document.getElementById('bcvHouse1Annual').textContent = formatCurrencyFull(bcvHouse1Annual);
    document.getElementById('bcvHouse2Annual').textContent = formatCurrencyFull(bcvHouse2Annual);
    document.getElementById('bcvCabin1Annual').textContent = formatCurrencyFull(bcvCabin1Annual);
    document.getElementById('bcvCabin2Annual').textContent = formatCurrencyFull(bcvCabin2Annual);
    document.getElementById('totalRentalIncome').textContent = formatCurrencyFull(totalRentalIncome);
    
    // Update revenue summary
    document.getElementById('propertyRentalsSum').textContent = formatCurrencyFull(totalRentalIncome);
    document.getElementById('blueSummitSum').textContent = formatCurrencyFull(blueSummitRevenue);
    document.getElementById('restaurantSum').textContent = formatCurrencyFull(restaurantRevenue);
    document.getElementById('conservationSum').textContent = formatCurrencyFull(conservationRevenue);
    document.getElementById('totalRevenueSum').textContent = formatCurrencyFull(totalRevenue);
    
    // Update main results
    document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
    document.getElementById('debtService').textContent = formatCurrency(annualDebtService);
    document.getElementById('totalOpEx').textContent = formatCurrency(totalOperatingExpenses);
    document.getElementById('netCashflow').textContent = formatCurrency(netCashflow);
    
    // Update result card color
    const netCashflowElement = document.getElementById('netCashflow').parentElement;
    if (netCashflow > 0) {
        netCashflowElement.className = 'result-card positive';
    } else {
        netCashflowElement.className = 'result-card negative';
    }
    
    // Property Portfolio Calculations
    const bcvEquity = bcvValue - bcvDebt;
    const totalPropertyHa = 24.7;
    const conservationSize = totalPropertyHa - residenceSize;
    const residenceValue = residenceSize * valuePerHa;
    const conservationValue = conservationSize * valuePerHa;
    
    // Ensure conservation gift value is reasonable (cap at property purchase price)
    const maxConservationGift = Math.min(conservationValue, newPropertyPrice * 0.9); // Max 90% of purchase price
    const knightGiftValue = maxConservationGift;
    
    // Update property portfolio displays
    if (document.getElementById('bcvEquity')) {
        document.getElementById('bcvEquity').textContent = formatCurrencyFull(bcvEquity);
        document.getElementById('nicLandEquity').textContent = formatCurrencyFull(bcvEquity);
        document.getElementById('residenceSizeDisplay').textContent = `${residenceSize} ha`;
        document.getElementById('conservationSize').textContent = `${conservationSize.toFixed(1)} ha`;
        document.getElementById('residenceValue').textContent = formatCurrencyFull(residenceValue);
        document.getElementById('conservationValue').textContent = formatCurrencyFull(conservationValue);
        document.getElementById('knightGiftValue').textContent = formatCurrencyFull(knightGiftValue);
        document.getElementById('knightConservationGift').textContent = formatCurrencyFull(knightGiftValue);
    }
    
    // Partner Contribution Calculations with reasonable limits
    const housingSubsidyNPV = housingSubsidy * subsidyYears * 0.77; // Rough NPV with 5% discount
    const nicTotalContribution = bcvEquity + nicOperationalValue;
    const knightTotalContribution = knightGiftValue + housingSubsidyNPV;
    
    // Cap partner contributions at reasonable levels to prevent UI scaling issues
    const cappedBlueSummitValue = Math.min(blueSummitValue, 5000000); // Cap at $5M
    const cappedOperationalSystems = Math.min(operationalSystems, 1000000); // Cap at $1M
    const blueSummitTotalContribution = cappedBlueSummitValue + cappedOperationalSystems;
    
    const cappedNurseryRenovation = Math.min(nurseryRenovation, 1000000); // Cap at $1M
    const cappedEmploymentProgram = Math.min(employmentProgram, 500000); // Cap at $500K
    const philanthropistTotalContribution = cappedNurseryRenovation + cappedEmploymentProgram;
    
    const totalPartnerContributions = nicTotalContribution + knightTotalContribution + blueSummitTotalContribution + philanthropistTotalContribution;
    
    // Calculate equity percentages
    const nicEquityPercent = (nicTotalContribution / totalPartnerContributions) * 100;
    const knightEquityPercent = (knightTotalContribution / totalPartnerContributions) * 100;
    const blueSummitEquityPercent = (blueSummitTotalContribution / totalPartnerContributions) * 100;
    const philanthropistEquityPercent = (philanthropistTotalContribution / totalPartnerContributions) * 100;
    
    // Update partner contribution displays
    if (document.getElementById('nicTotalContribution')) {
        document.getElementById('housingSubsidyNPV').textContent = formatCurrencyFull(housingSubsidyNPV);
        document.getElementById('subsidyYearsDisplay').textContent = `${subsidyYears} years`;
        document.getElementById('nicTotalContribution').textContent = formatCurrencyFull(nicTotalContribution);
        document.getElementById('knightTotalContribution').textContent = formatCurrencyFull(knightTotalContribution);
        document.getElementById('blueSummitTotalContribution').textContent = formatCurrencyFull(blueSummitTotalContribution);
        document.getElementById('philanthropistTotalContribution').textContent = formatCurrencyFull(philanthropistTotalContribution);
        document.getElementById('totalPartnerContributions').textContent = formatCurrencyFull(totalPartnerContributions);
        
        document.getElementById('nicEquityPercent').textContent = `${nicEquityPercent.toFixed(1)}%`;
        document.getElementById('knightEquityPercent').textContent = `${knightEquityPercent.toFixed(1)}%`;
        document.getElementById('blueSummitEquityPercent').textContent = `${blueSummitEquityPercent.toFixed(1)}%`;
        document.getElementById('philanthropistEquityPercent').textContent = `${philanthropistEquityPercent.toFixed(1)}%`;
    }
    
    // Worker Housing Calculations
    const annualMarketRent = marketRent * 52;
    const annualSubsidizedRent = subsidizedRent * 52;
    const annualSubsidyCost = annualMarketRent - annualSubsidizedRent;
    const housingTaxBenefit = annualSubsidyCost * 0.30; // 30% tax benefit
    const netHousingCost = annualSubsidyCost - housingTaxBenefit;
    
    // Update worker housing displays
    if (document.getElementById('marketRentDisplay')) {
        document.getElementById('marketRentDisplay').textContent = `$${marketRent}/week`;
        document.getElementById('subsidizedRentDisplay').textContent = `$${subsidizedRent}/week`;
        document.getElementById('annualMarketRent').textContent = formatCurrencyFull(annualMarketRent);
        document.getElementById('annualSubsidizedRent').textContent = formatCurrencyFull(annualSubsidizedRent);
        document.getElementById('annualSubsidyCost').textContent = formatCurrencyFull(annualSubsidyCost);
        document.getElementById('housingTaxBenefit').textContent = formatCurrencyFull(housingTaxBenefit);
        document.getElementById('netHousingCost').textContent = formatCurrencyFull(netHousingCost);
    }
    
    // Calculate 5-year projections
    let currentBalance = totalDebt;
    const growthRate = 1.03; // 3% annual growth
    
    for (let year = 1; year <= 5; year++) {
        const yearRevenue = totalRevenue * Math.pow(growthRate, year - 1);
        const yearExpenses = totalOperatingExpenses * Math.pow(growthRate, year - 1);
        const yearNet = yearRevenue - annualDebtService - yearExpenses;
        
        // Calculate principal payment for the year
        let yearPrincipal = 0;
        for (let month = 1; month <= 12; month++) {
            const interestPayment = currentBalance * monthlyRate;
            const principalPayment = monthlyPayment - interestPayment;
            yearPrincipal += principalPayment;
            currentBalance -= principalPayment;
        }
        
        document.getElementById(`year${year}Revenue`).textContent = formatCurrency(yearRevenue);
        document.getElementById(`year${year}Debt`).textContent = formatCurrency(annualDebtService);
        document.getElementById(`year${year}Net`).textContent = formatCurrency(yearNet);
        document.getElementById(`year${year}Balance`).textContent = formatCurrency(currentBalance);
    }
}

// Initial calculation
document.addEventListener('DOMContentLoaded', function() {
    updateCalculations();
}); 