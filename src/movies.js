const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = [];
    moviesArray.filter(element => {
        if (!allDirectors.includes(element.director)) {
            allDirectors.push(element.director);
        }
    })
    console.log(allDirectors)
    return allDirectors;
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = [];
    moviesArray.forEach(element => {
        if (element.director === 'Steven Spielberg' && element.genre.includes('Drama')) {
            spielbergMovies.push(element);
        }
    })
    console.log(spielbergMovies.length)
    return spielbergMovies.length;
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const moviesScore = moviesArray.reduce((a, b) => a + b.score, 0);
    const scoreAvg = (moviesScore / moviesArray.length).toFixed(2);
    console.log(scoreAvg);
    return scoreAvg;
}

scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = [];
    moviesArray.forEach(element => {
        if (element.genre.includes('Drama')) {
            dramaMovies.push(element.score)
        }
    })
    const moviesScore = dramaMovies.reduce((a, b) => a + b, 0);
    const scoreAvg = (moviesScore / dramaMovies.length).toFixed(2);
    console.log(scoreAvg);
    return scoreAvg;
}

dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMoviesByYear = moviesArray.sort((a, b) => (a.year < b.year) ? -1 : (a.year > b.year) ? 1 : 0);
    console.log(sortedMoviesByYear);
    return sortedMoviesByYear;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMoviesByTitle = moviesArray.sort((a, b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0);
    const firstTwentyMovies = sortedMoviesByTitle.slice(0, 20);
    console.log(firstTwentyMovies);
    return firstTwentyMovies;
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
