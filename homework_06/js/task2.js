let USD = parseFloat(prompt("enter the amount of money in dollars",""));
let EUR = parseFloat(prompt("enter the amount of money in euros",""));
const USDtoUAH = 27.1240;
const EURtoUAH = 33.2324;
let EURU = EUR / USD;      //amount of euros from the amount of dollars
let EURSum = EUR * EURtoUAH;
let USDSum = USD * USDtoUAH;


if (EUR <= 0 || USD <= 0 ||isNaN(USD) ||isNaN(EUR) ){
  console.log("incorrect input");
}
else{
  console.log(EUR +" euros are equal " + EURSum.toFixed(2)+ " UAH, " + USD + " dollars are equal "+ USDSum.toFixed(2) + " UAH, one euro is equal " +EURU.toFixed(2)+ " dollars.");
}
