/*
// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
function getValues(){
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    validateValues(investment, rate, years);
}

//VALIDATE VALUES FROM USER
function validateValues(investment, rate, years){
    let isvalid = 1;
    if(isNaN(investment) === true){
        isvalid = 0;
    }
    else if(isNaN(rate) === true || rate < 0 || rate > 6){
        isvalid = 0;
    }
    else if(isNaN(years) || years > 30 || years < 1){
        isvalid = 0;
    }
    else if(isvalid === 0){
        console.log('you goofed up try again');
        getValues();
    }
    else {
        return true;
    }
}
// CALCULATE FUTURE VALUE
getValues();
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
*/