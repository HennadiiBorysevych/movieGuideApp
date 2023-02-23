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
          <img src=${data.Poster} class="poster">
          <div>
          <h2>${data.Title}</h2>
          <div class="rating">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <path fill="#ffb92a" d="M11.974 2.211l2.756 5.562 6.162.896c.753.109 1.053 1.05.497 1.593l-4.47 4.36 1.056 6.145c.162.746-.604 1.311-1.246.93L12 18.316l-5.531 2.913c-.642.38-1.408-.184-1.246-.93l1.056-6.145-4.47-4.36c-.556-.543-.255-1.484.497-1.593l6.162-.896 2.756-5.562zm.026 2.788c-.11-.224-.243-.224-.352 0l-2.557 5.16-5.718.83c-.279.04-.392.366-.21.555l4.126 4.018-.974 5.66c-.049.285.26.497.513.364l5.113-2.689 5.113 2.689c.253.133.562-.079.513-.364l-.974-5.66 4.126-4.018c.182-.189.069-.515-.21-.555l-5.718-.83-2.557-5.16z"/>
</svg>
          <h4>${data.imdbRating}</h4>
          </div>
          <div class="details">
          <span>${data.Rated}</span>
          <span>${data.Year}</span>
          <span>${data.Runtime}</span>
          </div>
          <div class="genre">
            <div>${data.Genre.split(',').join('</div><div>')}</div>
                </div>
                </div>
                </div>    
                <h3>Plot:</h3>
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
