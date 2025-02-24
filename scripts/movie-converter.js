import { movies } from './movies-data.js';

export const generateMoviesHTML = () => {
    let movieHTML = '';
 
    for (const movie of movies) {
        movieHTML += `
            <article class="movie">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
                <div class="movie__details">
                    <h2 class="movie__title">${movie.title}</h2>
                    <p class="movie__description">${movie.description}</p>
                </div>
            </article>
        `;
    }
 
    return movieHTML
 };

 // Structure of each movie card
 // Each movie cart is contained in an <article> element.
 // Inside of each article are an <img> for the movie image, src set to poster, alt set to the movie title
 // Also a <div> inside to include movie details from class 'movie_details'
 // The description is wrapped in a <p> (paragraph?) with the class 'movie_description'
 // The title is wrapped in <h2> (header level 2) with class 'movie_title'
 
// * Need to start using <article></article> in my event cards instead of all divs