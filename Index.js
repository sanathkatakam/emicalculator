var slider1 = document.getElementById("amount");
var slider2 = document.getElementById("interest");
var slider3 = document.getElementById("year");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

output1.value = slider1.value;
output2.value = slider2.value;
output3.value = slider3.value;

slider1.oninput = function() {
  output1.value = this.value;
  var out1=output1;
}
slider2.oninput = function() {
  output2.value = this.value;
  var out2=output2;
}
slider3.oninput = function() {
  output3.value = this.value;
  var out3=output3;
}

output1.oninput = function() {
  slider1.value = this.value;
}

output2.oninput = function() {
  slider2.value = this.value;
}

output3.oninput = function() {
  slider3.value = this.value;
}

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {  

  const UIamount = output1.value;
  const UIinterest = output2.value;
  const UIyears = output3.value;

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("monthlyPayment").innerHTML = "&#8377;" + Number(monthlyPayment).toLocaleString();

  document.getElementById("totalInterest").innerHTML = "&#8377;" + Number(totalInterest).toLocaleString();

  document.getElementById("totalPayment").innerHTML = "&#8377;" + Number(totalPayment).toLocaleString();
    e.preventDefault();
}
