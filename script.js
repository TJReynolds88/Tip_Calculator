//Onload put focus on input
document.getElementById("total").addEventListener("load", ready() );

function ready() {
  document.getElementById("total").focus();
}
// Get $ Total 
function getInputValue() {
  var inputVal = document.getElementById("total").value;

  radioValue(inputVal);
}

//Check radio buttons
function radioValue(inputVal){
  var percent = document.getElementsByName('tipPercent');

  for ( i = 0; i < percent.length; i++) {
    if(percent[i].checked)
    var tip = inputVal * percent[i].value;
    totalTip = tip / 100;
    document.getElementById("amountOfTip").innerHTML =  (Math.round(totalTip * 100) / 100).toFixed(2);;
    var costOfFinalBill = Number(totalTip) + Number(inputVal);
    document.getElementById("yourCost").innerHTML =  (Math.round(costOfFinalBill * 100) / 100).toFixed(2);; 
  }
}

