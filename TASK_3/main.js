// let students=["Андрей", "Иван", "Стас"]; //массив
// students[2] = false; //поменять элемент (в [ ] ) массива на любой другой (false/true, 254, евгений)
// student[50] = "ИНдекс 50";

// console.log(students); //вывод

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304]]; //вложенные массивы
// college[1][1] = 112; //замена элемента в массиве на другое значение
// let kab = college[1][1]; //выведет кабинет 111. 1 массив 1 элемент (начало с нуля)
// console.log(college);

let number = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(number);

const countLength = 5;

if (number.length === countLength) {
    console.log("ok");
}
else if (number.length < countLength) {
    let result = countLength - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину нужно увеличить до ${countLength}. Не хватает еще ${result} элементов`);
}
else if (number.length > countLength) {
    result = number.length - countLength;
    console.log(`Длина вашего массива: ${number.length}. Длину нужно уменьшить до ${countLength}. Удалите из массива ${result} элементов`);
}

