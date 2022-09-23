const prompt = require('prompt-sync')();
let number = prompt('enter the number');
let power = 1;
let num = 1;

     while(num <= number)
    {
        power = power * 2;
        console.log(power);
        num++;
        if(power == 256)
        break;
    }