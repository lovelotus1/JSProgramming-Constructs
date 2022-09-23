let number = prompt('enter the number');
number = Number(number);
let power = 1;
for(let i = 1; i <= number; i++)
{
    power = power * 2;
    console.log(power);
}const prompt = require('prompt-sync')();