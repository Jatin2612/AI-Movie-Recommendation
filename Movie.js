// Movie.js
        // Sample movie data
        const movies = [
            { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/8h58g1g1g1g1g1g1g1g1g1g1g1g1g1g1.jpg" },
            { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0, image: "https://image.tmdb.org/t/p/w500/8h58g1g1g1g1g1g1g1g1g1g1g1g1g1g1.jpg" },
            { title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6, image: "https://image.tmdb.org/t/p/w500/8h58g1g1g1g1g1g1g1g1g1g1g1g1g1g1.jpg" },
            { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2, image: "https://image.tmdb.org/t/p/w500/8h58g1g1g1g1g1g1g1g1g1g1g1g1g1g1.jpg" },
            // Add more movies as needed
        ];

        // Function to display recommended movies
        function displayRecommendedMovies() {
            const recommendedMoviesContainer = document.getElementById("recommended-movies");
            recommendedMoviesContainer.innerHTML = ""; // Clear previous content

            // Filter and display movies based on some criteria (e.g., top-rated)
            const recommendedMovies = movies.filter(movie => movie.rating >= 8.5);
            
            recommendedMovies.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.className = "bg-white rounded-lg shadow-md p-4";
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="rounded-lg mb-4">
                    <h3 class="text-lg font-bold">${movie.title}</h3>
                    <p>Genre: ${movie.genre}</p>
                    <p>Year: ${movie.year}</p>
                    <p>Rating: ${movie.rating}</p>
                `;
                recommendedMoviesContainer.appendChild(movieCard);
            });
        }

        // Function to display all movies
        function displayAllMovies() {
            const allMoviesContainer = document.getElementById("all-movies");
            allMoviesContainer.innerHTML = ""; // Clear previous content

            movies.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.className = "bg-white rounded-lg shadow-md p-4";
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}" class="rounded-lg mb-4">
                    <h3 class="text-lg font-bold">${movie.title}</h3>
                    <p>Genre: ${movie.genre}</p>
                    <p>Year: ${movie.year}</p>
                    <p>Rating: ${movie.rating}</p>
                `;
                allMoviesContainer.appendChild(movieCard);
            });
        }

        // Event listeners for filters
        document.getElementById("genre-filter").addEventListener("change", displayAllMovies);
        document.getElementById("year-filter").addEventListener("change", displayAllMovies);
        document.getElementById("rating-filter").addEventListener("change", displayAllMovies);

        // Initial display
        displayRecommendedMovies();
        displayAllMovies();
    

