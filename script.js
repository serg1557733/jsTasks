'use strict';

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


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
/* let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


let personalMovieDB = {
    count:numberOfFilms,
    movies : {
    },
    actors : {},
    genres :[],
    privat : false
};

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

console.log(personalMovieDB); */
/* 
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
} */

/* while (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
    break;
}
while (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
    break;
}
while (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
    break;
}


console.log(personalMovieDB.count); */

//Функции, стрелочные ф-ции (ES6)

/* let num = 20;

function showFirstMessage(text){
        console.log(text);
         let num = 10;
         console.log(num);
}
showFirstMessage('test');
console.log(num);

function calc (a, b) {
    return (a + b);
    console.log(calc(4,3)); //нечитаемый код

}
console.log(calc(4,3));
console.log(calc(7,7));
console.log(calc(8,3)); */

//function declaration
/* function ret (){
    let num = 50;
    return num;
}
let anotherNumm = ret();
console.log(anotherNumm); */


//function expression
/* const logger = function (){
    console.log('hello')
};
logger();

const calcul = (a, b) => {return a + b};
console.log(calcul(8, 2));

const calcu = a =>  a + 4;
console.log(calcu(2));
 */



//const str = 'tEst';

//onsole.log(str.length); //количество символов строки длинна

/* const arr = [1, 8, 10];

console.log(arr.length);

let str1 = "Hello\nWorld";*/
//console.log(str.toLowerCase());  


//let fruit = 'some fruit';

//console.log(fruit.indexOf('y'));  //если не надено совпадений выдаст -1

/* const logg = 'Hello world';

console.log(logg.slice(2)); // end аргумент принимает значение +1


console.log(logg.substr(2)===logg.slice(2)); */


/* const num = 12.5;

console.log(Math.round(num)); */ //округление числа

/* const test = '12.2px';


console.log(parseInt(test)+2); //преобразование строки в целое число

console.log(parseFloat(test)); //в число с плавающей точкой */

//callback functions

/* function first() {
    setTimeout(function() {
        console.log('1');},500)
};

function second() {
    console.log('2');
}
first();
second();

function learning(arg, callback) {
    console.log(`i learn ${arg}`);
    callback();
}
function done() {
    console.log('i studied JS');
}

learning('JAVA', done);
 */
//деструктуризация 

/* const obj = {
    name: 'TEST',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }

}; */
/* console.log(obj.name);

delete obj.colors.background;

console.log(obj); */


//перебор ключей и свойств обьекта

/* 
for (let key in obj) {

    if (typeof(obj[key]) === 'object')
    {
        for (let i in obj[key]) 
        {
            console.log(`ins option ${i} had  value ${obj[key][i]}`);
        }
        
    }
    else {    
            console.log(`option ${key} had  value ${obj[key]}`);
            
        }  
} */
//счетчик свойств в обьекте
/* let counter = 0;
 for (let key in obj) {
     counter++;
 }

console.log(counter);
console.log(Object.keys(obj).length); */

//метод обьекта создан через ключ 

/* obj.makeTest() */ //запуск метода обьекта


//деструктуризация

/* let {border} =obj.colors ;
console.log(border);

let {border: br, bg} =obj.colors ;
console.log(br); */

//Методы массивов

/* const arr = [2, 10, 12, 8, 7]; */

//arr.pop(); удалить последний элемент 
//arr.push(0,66); добавит ьэлементы в конец
//console.log(arr.length);


//перебор элементов массива циклом
/* for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

for (let item of arr) {
    console.log(item);

} */

/* arr.forEach(function(value, i)
{
     console.log(value*2) ;

}); */


/* console.log(arr);

let arr2 = arr.map(item =>item*2);

console.log(arr2);

 */

/* const str = prompt('','');
const splitStr = str.split(''); */

//sort сортирует все как строки

/* arr.sort(compareNum);



splitStr.sort();

console.log(arr); */


//алгоритм быстрой сортировки - применяем шаблон и сортировка цифр работает норм
/* function compareNum( a,b) {
    return a-b;
} */

//псевдомассивы, структура хранения данных по порядку - тот же массив но без методов



