const prompt = require('prompt-sync')();
let number = prompt('enter the number to find factorial');
let fact = 1;
for(let i = 2; i <= number; i++)
{
    fact = fact * i;
}
console.log("factorial of "+ number+" is "+fact);