document.getElementById('searchMovieBtn').addEventListener('click', searchMovie);

async function searchMovie() {
    const title = document.getElementById('movieTitle').value;
    const apiKey = 'YOUR_API_KEY'; // Add your OMDB API key here
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            document.getElementById('movieResult').innerHTML = `
                <h3>${data.Title} (${data.Year})</h3>
                <img src="${data.Poster}" alt="${data.Title}">
                <p>${data.Plot}</p>
            `;
        } else {
            document.getElementById('movieResult').innerHTML = `<p>Movie not found!</p>`;
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}
