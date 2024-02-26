/*Напишите функцию, которая принимает на вход список чисел и возвращает
список, содержащий только числа, факториал которых не превышает
заданного значения*/

const numConst = 25;
let fact = [fact1 = 1, fact2 = 1, fact3 = 1]
// let fact1 = 1;
// let fact2 = 1;
// let fact3 = 1;

let numbers = (array) => {
    for (let i = 1; i <= array[0]; i++) {
        fact[0] *= i; 
           
    }
    console.log(`Факториал числа 2 (первого числа списка) = ${fact[0]}`);

    for (let i = 1; i <= array[1]; i++) {
        fact[1] *= i;         
    }
    console.log(`Факториал числа 4 (второго числа списка) = ${fact[1]}`);

    for (let i = 1; i <= array[2]; i++) {
        fact[2] *= i;            
    }
    console.log(`Факториал числа 7 (третьего числа списка) = ${fact[2]}`);

    console.log("Заданное значение: 25");
    console.log("Список чисел, содержащий только числа, факториал которых не превышает заданное значение:");

    for (let i = 0; i < fact.length; i++) {
        if (fact[i] <= numConst) {
            console.log(array[i]);
        }
    }
    
} 
const nums = [2, 4, 7]
numbers(nums);

