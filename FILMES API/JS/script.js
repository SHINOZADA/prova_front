// Dados simulados
const movies = [
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        image: "image/20224832.jpg",
    },
    {
        title: "Matrix",
        image: "image/20128877.JPG",
    },
    {
        title: "Avatar",
        image: "image/71fc1d0bb2bc1483e66941bb2f17d830.webp",
    },
    {
        title: "Inception",
        image: "image/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
];

function loadMovies(filter = "") {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredMovies.length === 0) {
        movieList.innerHTML = "<p>Nenhum filme encontrado.</p>";
    } else {
        filteredMovies.forEach((movie) => {
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
            `;
            movieList.appendChild(movieCard);
        });
    }
}

document.getElementById("search").addEventListener("input", (e) => {
    loadMovies(e.target.value);
});

loadMovies();