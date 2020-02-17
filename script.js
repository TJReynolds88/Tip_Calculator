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
    document.getElementById("amountOfTip").innerHTML = totalTip;
    var costOfFinalBill = totalTip += inputVal;
    document.getElementById("yourCost").innerHTML = costOfFinalBill; 
  }
}