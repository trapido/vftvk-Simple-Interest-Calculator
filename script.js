function compute()
//
{
    //Convert all inputs into numbers
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+years;
    //Add validation
    if (isNaN(principal) || principal <= 0){
      alert("Enter a positive number");
      document.getElementById("principal").focus();
    }
    else {
      result = document.getElementById("result");
      result.style.display = "block";
      result.innerHTML="If you deposit \<mark\>"+principal+
      "\<\/mark>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark>,\<br\>You will receive an amount of \<mark\>"+interest+
      "\<\/mark>,\<br\>in the year \<mark\>"+year+"\<\/mark>\<br\>"
    }

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}
