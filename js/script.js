"use strict";

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
// console.log(numberOfFilms);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// let a = prompt('Один из последних просмотренных фильмов?', ""),
//     b = prompt('На сколько оцените его?', ""),
//     c = prompt('Один из последних просмотренных фильмов?', ""),
//     d = prompt('На сколько оцените его?', "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log( personalMovieDB);

// if (4 == 9) {
//     console.log("OK");
// } else {
//     console.log('Error');
// }

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

(num == 50) ? console.log('Ok') : console.log('Error');

switch (num) {
    case 49:
        alert('не верно');
        break;
    case 100:
        alert('не верно');
        break;
    case 50:
        alert('в точку');
        break;
    default:
        alert('в следующий раз');
        break;
};