console.log("Вариант 2.\n")

/*  Создайте объект с данными о фильме (название, год выпуска,
режиссер, жанр и т.д.).
    Используйте цикл for...in, чтобы вывести все свойства объекта на
экран.
    Добавьте условие, которое проверяет жанр фильма (например,
комедия, драма, фантастика) и выведите сообщение о его жанровой
принадлежности.*/

let film = {
    name: "Five Nights at Freddy's (film)",     //название
    releaseDates: "October 25, 2023",           //дата выпуска/релиза
    directed: "Emma Tammi",                     //режиссер
    genres: ["Mystery", "Horror", "Thriller"],  //жанры          
    runningTimeMin: 109,                        //длительность фильма
    boxOffice: "$295.8 million",                //кассовые сборы
    rating: 5.5                                 //рейтинг от 1 до 10
};


// for (let item of film) {
//     console.log(`Название фильма: ${item.name}\nДата выхода: ${item.releaseDates}`);
// };

for (let item in film) {
    console.log(`${item}: ${film[item]}`);
};

console.log(`\nЖанр фильма ${film.name} - Horror или Drama?\n`);

for (let i = 0; i < film.genres.length; i++) {
    let genre = film.genres[i];
    if (genre == "Horror" || genre == "Drama") {
        console.log(`Да, жанр фильма ${film.name} - Horror или Drama`);
        console.log(`Жанры: ${film.genres}`);
    };
    //console.log(genre);  
}
//let genre = film.genres[index];

/*if (genre === "Horror" || genre === "Drama") {
    console.log(`Да, жанр фильма ${film.name} - Horror или Drama`);
    console.log(`Жанры: ${film.genres}`);
}
else {
    console.log(`Нет, жанр фильма ни один из предложенных. Жанры: ${film.genres}`)
}*/