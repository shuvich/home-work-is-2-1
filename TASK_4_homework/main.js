/*Задание 1:  Создать двумерный массив и вывести его содержимое в консоль.
Найти сумму всех элементов двумерного массива.
Подсчитать количество элементов в каждом вложенном массиве.
Цикл for...of с вложенностью: */

console.log("Задание 1.");

let array = [ [5, 3, 8], [6, 9, 1]];
let summ = 0;
let str = "Сумма всех элементов: ";


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        let result = array[i][j];
        console.log(result);
        summ = summ + array[i][j];
        //console.log(str, summ);
    }
    console.log("----------");
}
console.log(str, summ);


/*Задание 2: Создать массив объектов (например, информацию о пользователях) 
и вывести значения определенного свойства для каждого объекта.
Изменить значение определенного свойства каждого объекта в массиве. */

console.log("\nЗадание 2.");

let persons = [
    {
        name: "Alex",
        age: 19
    },
    {
        name: "Iris",
        age: 23
    }
];
let namePerson = "Имя: ";
let agePerson = "Возраст: ";

for (let item of persons) {
    console.log(namePerson, item.name, "\n", agePerson, item.age);
    console.log("Спустя год:");
    item.age += 1;
    console.log(namePerson, item.name, "\n", agePerson, item.age);
    console.log("\n");
}


/*Задание 3: Создать объект, содержащий вложенные объекты (например, информацию о компаниях и их сотрудниках) 
и вывести имена сотрудников для каждой компании. */

console.log("\nЗадание 3.");

let companies = [
    {
        company: "Samsung",
        numberOfStaff: 1000,
        bestStaff: {
            name: "Farben",
            age: 28,
            experience: 5
        },
    },
    {
        company: "HYBE",
        numberOfStaff: 670,
        bestStaff: {
            name: "Bryan",
            age: 34,
            experience: 8
        },
    },
    {
        company: "Ferrari",
        numberOfStaff: 4500,
        bestStaff: {
            name: "Charles Leclerc",
            age: 26,
            experience: 6
        },
    }
]

for (let item of companies) {
    //let nameBestStaff = company[item].bestStaff[1];
    console.log(`Лучший работник компании "${item.company}": ${item.bestStaff["name"]}`);
}