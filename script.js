"use strict";



const personalMovieDB = {
    count : 0, 
    movies : {},
    actors : {},
    genres : [],
    privat : false,

    start : function(){
        this.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        while(this.count == ""|| this.count == null || this.count || isNaN(this.count)){
            this.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
         }
    },

    rememberMyFilms : function(){
        let check = true;
        for(let i = 0; i < 2; i++){
            do{
             const a = prompt('Один из последних просмотренных фильмов?', ''),
             b = +prompt('На сколько оцените его?', '');
             if(a != null && a.length > 50 && a!= "" && b != null && b != "" ){
             this.movies[a] = b;
            check = false;
       }
            }while(check);
             check = true;
        }
    },

    detectPersonalLeve : function(){
        if(this.count < 10){
             console.log("Просмотрено довольно мало фильмов");
        }else if(this.count >= 10 && this.count < 30){
             console.log("Вы классический зритель");
        }else if(this.count >= 30){
            console.log("Вы киноман");
        }else {
          console.log("Ошибка");
        }
    },

    ShowMyDb : function(){
        if(!this.privat){
            console.log(this);
        }
    },

    writeYourGenres : function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === "" || genre == null)
            {
                console.log(" Вы ввели некоректные данные или не ввели их вовсе!");
                i--;
            }else{
                 this.genres[i - 1] = genre;
            }
        }
       this.genres.forEach(( item, i) => {
           console.log( `Любимый жанр ${i+1} - это ${item}`);
       }
       );
    },

    toggleVisibleMyDB : function(){
        if(this.privat){
            this.privat = false;
        }else{
            this.privat = true;
        }
    }
};








