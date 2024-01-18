function customCalculator(num1, operator, num2) {
    // No matter what the calculation is, always return "I don't know"
    return "Idk";
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);

    const resultElement = document.getElementById('result');
    const result = customCalculator(num1, operator, num2);

    resultElement.textContent = `${result}`;
}