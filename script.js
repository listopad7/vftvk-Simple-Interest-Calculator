function compute()
{
    //Create references for input elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Check if principal is valid, and then calculate
    if (checkdata()){
    //Calculate interest
    var interest = principal * years * rate /100;
    //Calculate final year
    var year = new Date().getFullYear()+parseInt(years);
    //Return result
    document.getElementById("result").innerText="If you deposit " + principal + " at an interest rate of " + rate + "% you will receive an amount of " + interest+ " in the year " + year;
}
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

 function checkdata(){
      //Create references to the input elements we wish to validate
      var amount = document.getElementById("principal");
      // check if input field is empty
        if (amount.value == ""){
            alert("Enter a positive number");
          amount.focus();
          return false;
        }
      //check if entered amount is positive
      if (amount.value <= 0){
          alert("Enter a positive number");
          amount.focus();
          return false;
      }
      return true;
    }
        