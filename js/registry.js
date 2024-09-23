window.hriChartData = function(selectedYear, feature) {
    let yearSuffix = String(selectedYear).slice(-2);
    let categories = ['A', 'B', 'C', 'D']; // Use uppercase for display purposes
    let values = ['Originations']; // First element as the series name (optional)

    categories.forEach(category => {
        let key = `hri${yearSuffix}${category.toLowerCase()}`; // Assuming keys are lowercase
        let value = parseInt(feature.properties[key], 10) || 0;
        values.push(value); // Add value to the series
    });

    // Return both categories and values as separate arrays
    return [categories, values];
};

window.pocChartData = function(selectedYear, feature) {
    let yearSuffix = String(selectedYear).slice(-2);
    let categories = ['A', 'B', 'C']; // Use uppercase for display purposes
    let values = ['Originations']; // First element as the series name (optional)

    categories.forEach(category => {
        let key = `min${yearSuffix}${category.toLowerCase()}`; // Assuming keys are lowercase
        let value = parseInt(feature.properties[key], 10) || 0;
        values.push(value); // Add value to the series
    });

    // Return both categories and values as separate arrays
    return [categories, values];
};
