export const renderMoviesToDOM = (movieHTML) => {
    const movieList = document.getElementById('movie-list');
 
    if (movieList) {
        movieList.innerHTML = movieHTML;
    } else {
        console.error('Could not find element with id "movie-list"');
    }
 };

 // Takes in the movieHTML string as an argument
 // Then selects the 'movie-list' DOM element
 // Sets the .innerHTML (better than .textContent in this situation) of that element to movieHTML