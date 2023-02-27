/*
let miles;
let gallons;
let mpg;
let again = 'y';
//I'm not sure if this is the best way to handle this, it's just what popped into my brain first
function handleCallback(){
    if(again === 'y'){
        getMpg();
    }
    else if (again != 'n'){
        again = prompt('Run application again? (y or n)', 'y');
        handleCallback();
    }
    else{
        console.log('Application has exited.');
        return;
    }
}

function getMpg(){
    do {
        miles = parseFloat(prompt('Enter miles driven'));
        gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
        if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
            mpg = miles / gallons;
            console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
        } else {
            alert('One or both entries are invalid.');
        }
        again = prompt('Run application again? (y or n)', 'y');
    } while (again === 'y');
    handleCallback();
}

handleCallback();
*/