import descriptionTemplates from './js/templates';
import fetchMovie from './js/fetch';

let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

let getMovie = () => {
  let movieName = movieNameRef.value;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a movie name</h3>`;
  } else {
    fetchMovie(movieName)
      .then(data => {
        if (data.Response == 'True') {
          descriptionTemplates(data);
        } else {
          result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTM = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};

searchBtn.addEventListener('click', getMovie);
window.addEventListener('load', getMovie);
