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

'use strict';

let num = '20';

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
    
        
}