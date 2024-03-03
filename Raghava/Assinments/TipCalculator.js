let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function calculate() {
    let billAmountValue = billAmount.value;
    let percentageTipValue = percentageTip.value;
    if (billAmountValue === "") {
        errorMessage.textContent = "Please Enter A Valid Input";
    } else if (percentageTipValue === "") {
        errorMessage.textContent = "Please Enter A Valid Input";
    } else {
        errorMessage.textContent = "";
        let value1 = parseInt(billAmountValue);
        let value2 = parseInt(percentageTipValue);
        tipAmount.value = value1 * (value2 / 100);
        totalAmount.value = value1 + parseInt(tipAmount.value);



    }
}
