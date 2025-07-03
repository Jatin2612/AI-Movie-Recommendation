// Mock Database - In a real app, this would be API calls to a backend
class MovieDB {
    constructor() {
        this.movies = [
            {
                id: 1,
                title: "Inception",
                genre: ["Sci-Fi", "Action", "Thriller"],
                year: 2010,
                rating: 8.8,
                director: "Christopher Nolan",
                cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                poster: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c99de974-6b8f-4034-a62c-f803e2d3e2c7.png" + "?text=Inception",
                alt: "Movie poster for Inception showing a dreamlike cityscape bending over itself"
            },
            {
                id: 2,
                title: "The Shawshank Redemption",
                genre: ["Drama"],
                year: 1994,
                rating: 9.3,
                director: "Frank Darabont",
                cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                poster: "https://placehold.co/300x450" + "?text=Shawshank",
                alt: "Movie poster for The Shawshank Redemption featuring the two main characters in prison"
            },
            {
                id: 3,
                title: "The Dark Knight",
                genre: ["Action", "Crime", "Drama"],
                year: 2008,
                rating: 9.0,
                director: "Christopher Nolan",
                cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
                description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                poster: "https://placehold.co/300x450" + "?text=Dark+Knight",
                alt: "Movie poster for The Dark Knight featuring Batman standing in front of a burning building"
            },
            {
                id: 4,
                title: "Pulp Fiction",
                genre: ["Crime", "Drama"],
                year: 1994,
                rating: 8.9,
                director: "Quentin Tarantino",
                cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
                description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                poster: "https://placehold.co/300x450" + "?text=Pulp+Fiction",
                alt: "Movie poster for Pulp Fiction featuring Uma Thurman lying on a bed with a cigarette"
            },
            {
                id: 5,
                title: "Parasite",
                genre: ["Comedy", "Drama", "Thriller"],
                year: 2019,
                rating: 8.6,
                director: "Bong Joon Ho",
                cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
                description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
                poster: "https://placehold.co/300x450" + "?text=Parasite",
                alt: "Movie poster for Parasite showing the main characters with their eyes covered"
            },
            {
                id: 6,
                title: "Spirited Away",
                genre: ["Animation", "Adventure", "Family"],
                year: 2001,
                rating: 8.6,
                director: "Hayao Miyazaki",
                cast: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
                description: "