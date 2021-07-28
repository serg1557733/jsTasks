

'use strict';

// Код возьмите из предыдущего домашнего задания

/* let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');


let personalMovieDB = {
    count:numberOfFilms,
    movies : {
    },
    actors : {},
    genres :[],
    privat : false
};

let film1 = prompt('Один из последних просмотренных фильмов?','');
let rating1 = prompt('На сколько оцените его?','');
let film2 = prompt( 'Один из последних просмотренных фильмов?','');
let rating2 = prompt('На сколько оцените его?','');
personalMovieDB.movies[film1] =  rating1;
personalMovieDB.movies[film2] =  rating2;
console.log(numberOfFilms);
console.log(personalMovieDB); */
/* 
let num = 50;

if (num < 49) {
    console.log('error');
} else if (num >100)
{
    console.log('too mach');
} else if (num = 50) {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error7');
    
switch (num) {
    case 49: 
        console.log('erroooo');
        break;
    case '20':
        console.log('то 50');
    case 40:
        console.log('yes');
        break;
    default:  console.log('default');  
} */

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num < 55)  */

/* for (let i = 1; i<10; i++) {
    if (i === 2n){
        //break;
        continue;
    }
    console.log(i);
} */
/* Задание на урок:


1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();

let personalMovieDB = {
    count:numberOfFilms,
    movies : {
    },
    actors : {},
    genres :[],
    privat : false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?','');
        let b = prompt('На сколько оцените его?','');
       if (a !=='' && b !=='' && a !== null && b!== null && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] =  b;
        console.log('Done');
       } 
       else {
        console.log('error');
        i--;
       }
    }

}
rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    }
    else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }
    else if ( personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }
    else   {
        console.log("Произошла ошибка");
    } 

}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat) {
        console.log('Приватные данные'); 
    }
    else { 
    console.log(personalMovieDB);
}
}
function writeYourGenres() {
    for (let i = 0; i<3; i++) { 
     personalMovieDB.genres[i]= prompt(`Ваш любимый жанр под номером ${i+1}`,'');
     }
}

writeYourGenres();
showMyDB();

