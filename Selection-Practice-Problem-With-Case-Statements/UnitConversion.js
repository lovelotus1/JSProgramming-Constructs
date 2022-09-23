const prompt = require('prompt-sync')();
let choice = prompt('enter 1 to 4 for unit conversion');
choice = Number(choice);
switch(choice)
{
    case 1:
        let number = prompt("enter the number to change from feet to inch")
        let feetToInch = number * 12;
        console.log(number+" feet equals to "+feetToInch+" inch");
        break;
    case 2:
        let number1 = prompt("enter the number to change from feet to meter");
        let feetToMeter = number1 / 3.281;
        console.log(number1+" feet equals to "+feetToMeter+" meter");
        break;
    case 3:
        let number2 = prompt("enter the number to change from inch to feet");
        let inchToFeet = number2/12;
        console.log(number2+" inch is equal to "+inchToFeet+" feet");
        break;
    case 4:
        let number3 = prompt("enter the number to change from meter to feet");
        let meterToFeet = number3 * 3.281;
        console.log(number3+" meter is equal to "+meterToFeet+" feet");
        break;
    default:
        console.log("!Invalid Input");
        break;
}