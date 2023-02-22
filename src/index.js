// Here is your key: a23c34f

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=a23c34f

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=4352ff90-31c5-428d-817b-03d3a7d670a3
// If you did not make this request, please disregard this email.
let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

let getMovie = () => {
  let movieName = movieNameRef.value;
  const key = '';

  let url = `http://www.omdbapi.com/?apikey=a23c34f&t=${movieName}`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a movie name</h3>`;
  } else {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.Response == 'True') {
          result.innerHTML = `<div class='info'>
          <img src=${data.Poster} class="poster"
          <div>
          <h2>${data.title}</h2>
          <div class="rating">
          <img src="/images/star-icon">
          <h4>${data.imdbRating}</h4>
          <div class="details">
          <span>${data.Rated}</span>
          <span>${data.Year}</span>
          <span>${data.Runtime}</span>
          <div>
          <div class="genre">
            <div>${data.Genre.split(',').join('</div><div>')}</div>
                </div></div>    <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p> 
                `;
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
