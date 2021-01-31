

const generateBtn = document.getElementById("generateBtn").addEventListener('click', function () {
    generateInput = document.getElementById("generateInput");
    let randomNum = (Math.random() * 10000 + '').split(".")[0];
    if (randomNum.length > 3) {
        generateInput.value = randomNum;
    }
})






const submit = document.getElementById("submitBtn").addEventListener('click', function () {

    let generateInput = document.getElementById("generateInput");
    let generateValue = generateInput.value;
    let totalCalculatorInput = document.getElementById("calculatorInput");
    let totalCalculatorInputValue = totalCalculatorInput.value;

    if (generateValue === totalCalculatorInputValue && totalCalculatorInputValue != '') {
        document.getElementById("pinMatched").style.display = "block";
        document.getElementById("tryAgain").style.display = "none"
        document.getElementById("generateInput").value = '';
        document.getElementById("calculatorInput").value = '';

        document.getElementById("welcome").style.display = "block"
        document.getElementById("hideTryLeft").style.display = 'none'
    }
    else {
        document.getElementById("tryAgain").style.display = "block"
        document.getElementById("pinMatched").style.display = "none";
        document.getElementById("generateInput").value = '';
        document.getElementById("calculatorInput").value = '';

        let tryLeft = document.getElementById('tryLeft');
        let tryLeftValue = tryLeft.innerText;
        if (tryLeftValue > 0 && totalCalculatorInputValue != 0 && generateValue != 0) {
            document.getElementById('tryLeft').innerText = tryLeftValue - 1;
            
        }
        if (tryLeftValue == 1) {
            document.getElementById('submitBtn').style.background = 'red';
            document.getElementById('submitBtn').disabled = true;
        }
    }
    if (generateValue == 0 || totalCalculatorInputValue == 0) {
        alert('Please, put  your all  value')
    }
})

