/*Напишите функцию, которая принимает на вход список чисел и возвращает
список, содержащий только числа, факториал которых не превышает
заданного значения*/

const numConst = 25;
let fact = [fact1 = 1, fact2 = 1, fact3 = 1]
// let fact1 = 1;
// let fact2 = 1;
// let fact3 = 1;

let numbers = (num1, num2, num3) => {
    for (let i = 0; i < num1; i++) {
        fact1 *= i;      
    }

    for (let i = 0; i < num2; i++) {
        fact2 *= i;         
    }

    for (let i = 0; i < num3; i++) {
        fact3 *= i;            
    }

    for (let i = 0; i < numbers.length; i++) {
        if (fact[i] <= numConst) {
            console.log();
        }
    }
    
} 
numbers(2, 4, 7);
