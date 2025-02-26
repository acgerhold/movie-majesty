import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';

// imports the functions to generate and render html

const movieHTML = generateMoviesHTML();

renderMoviesToDOM(movieHTML);