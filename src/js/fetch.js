export default async function fetchMovie(movieName) {
  let URL = `https://www.omdbapi.com/?apikey=a23c34f&t=${movieName}`;
  let response = await fetch(URL);
  return await response.json();
}
