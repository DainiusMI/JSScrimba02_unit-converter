

function convert() {
    let inputedValue = document.getElementById('inputed-number');

    let metersToFeet = inputedValue.value * 3.28084;
    let feetToMeters = inputedValue.value / 3.28084;
    
    let litersToGallons = inputedValue.value * 0.264172;
    let gallonsToLiters = inputedValue.value / 0.264172;
    
    let kilogramsToPounds = inputedValue.value * 2.2046;
    let poundsToKilograms = inputedValue.value / 2.2046;

    document.getElementById('meter-feet').textContent = inputedValue.value + " meters = "  + metersToFeet.toFixed(3) + " feet";
    document.getElementById('feet-meter').textContent = inputedValue.value + " feet = "  + feetToMeters.toFixed(3) + " meters";

    document.getElementById('liter-gallon').textContent = inputedValue.value + " Liters = "  + litersToGallons.toFixed(3) + " Gallons";
    document.getElementById('gallon-liter').textContent = inputedValue.value + " Gallons = "  + gallonsToLiters.toFixed(3) + " Liters";
    
    document.getElementById('kilogram-pound').textContent = inputedValue.value + " Kilograms = "  + kilogramsToPounds.toFixed(3) + " Pounds";
    document.getElementById('pound-kilogram').textContent = inputedValue.value + " Pounds = "  + poundsToKilograms.toFixed(3) + " Kilograms";
}
function changeTheme() {
    let bottomSectionEl = document.getElementById('bottom-section');
    let themeButtonEl = document.getElementById('theme-button');
    bottomSectionEl.classList.toggle('dark-theme');
    themeButtonEl.classList.toggle('light-theme');


}