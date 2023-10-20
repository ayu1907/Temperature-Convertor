function convert() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let resultElement = document.getElementById('result');

    if (unit === 'celsius') {
        let fahrenheit = (temperature * 9/5) + 32;
        resultElement.textContent = fahrenheit.toFixed(2) + " °F";
    } else if (unit === 'fahrenheit') {
        let celsius = (temperature - 32) * 5/9;
        resultElement.textContent = celsius.toFixed(2) + " °C";
    }
}
