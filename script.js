
// GENERATE BUTTON...
let generateBtn = document.getElementById("generateBtn").addEventListener('click', function () {
    generateInput = document.getElementById("generateInput");
    let randomNum = Math.floor(Math.random() * 9000) + 1000;
    generateInput.value = randomNum;

    document.getElementById("generateBtn").style.background = '#5c659e';    
    document.getElementById("generateBtn").disabled = true;    

})
// calculator ALL input digit control...
function disableControl() {
    const CalculatorInput = document.getElementById("calculatorInput");
    if (CalculatorInput.value.length > CalculatorInput.maxLength) CalculatorInput.value = CalculatorInput.value.slice(0, CalculatorInput.maxLength);
}
    
// ALL ABOUT SUBMIT BUTTON....
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

        document.getElementById("calculatorInput").value = '';

        let tryLeft = document.getElementById('tryLeft');
        let tryLeftValue = tryLeft.innerText;
        if (tryLeftValue > 0 && totalCalculatorInputValue != 0 && generateValue != 0) {
            document.getElementById('tryLeft').innerText = tryLeftValue - 1;
            
        }
        if (tryLeftValue == 1) {
            document.getElementById('submitBtn').style.background = 'red';
        }
    }
    // ALERT MASSAGE...
    if (generateValue == 0 || totalCalculatorInputValue == 0) {
        document.getElementById("alertMassage").style.display = "block"
        document.getElementById("tryAgain").style.display = "none"
        if (document.getElementById("alertBtn").addEventListener('click',function () {
            document.getElementById("alertMassage").style.display = "none"
        })) {
            
        }
    }
})

