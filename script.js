"use strict";

let numberOfFilms;

const personalMovieDB = {
    count : numberOfFilms, 
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function start(){
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
     while(numberOfFilms == ""|| numberOfFilms == null || numberOfFilms || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();



function rememberMyFilms(){
        let check = true;
        for(let i = 0; i < 2; i++){
            do{
             const a = prompt('Один из последних просмотренных фильмов?', ''),
             b = +prompt('На сколько оцените его?', '');
             if(a != null && a.length > 50 && a!= "" && b != null && b != "" ){
             personalMovieDB.movies[a] = b;
            check = false;
    }
         }while(check);
             check = true;
        }
}

rememberMyFilms();

function  detectPersonalLevel(){
    if(personalMovieDB.count < 10){
         console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
         console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30)
    {
        console.log("Вы киноман");
    }else {
       console.log("Ошибка");
    }
}

detectPersonalLevel();

function ShowMyDb(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
}

ShowMyDb(personalMovieDB.privat)();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();