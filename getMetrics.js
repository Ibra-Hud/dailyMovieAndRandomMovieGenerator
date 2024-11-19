import movies from "./movies.js";

// TODO: Ready for export
const main = {
  // Returns an array filled with all the movie genres, can be used to display a number of movies.
  validMovieGenres: () => {
    let genres = [];
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (!genres.includes(genre)) {
          genres.push(genre);
        }
      });
    });
    return genres;
  },

  // Refactored to get valid years
  validMovieYears: () => {
    let years = [];
    movies.forEach((movie) => {
      if (!years.includes(movie.year)) {
        years.push(movie.year);
      }
    });

    return years;
  },

  // Refactored to get valid cast members
  validMovieCast: () => {
    let castArr = [];
    movies.forEach((movie) => {
      movie.cast.forEach((cast) => {
        if (!castArr.includes(cast)) {
          castArr.push(cast);
        }
      });
    });
    return castArr;
  },

  randomMovie: () => {
    let movieIndex = Math.floor(Math.random() * movies.length);
    let randomMovie = movies[movieIndex];
    console.log(randomMovie);
    return randomMovie;
  },

  createGenreArray: (genre) => {
    // Genre would be accessed as form.genre.value (i.e.) which can be used as the "input"

    // This portion creates a list of all movies matching the criteria for the genre
    let genreMovies = movies.filter((movie) => movie.genres.includes(genre));
    // Should return an array filled with every movie pertaining to the genre
    return genreMovies;
  },

  // Returns a random movie that fits the genre
  randomMovieGenre: (genreMovies) => {
    let movieIndexGenre = Math.floor(Math.random() * genreMovies.length);
    let randomMovie = genreMovies[movieIndexGenre];
    return randomMovie;
  },

  // TODO: Ready for export
  createCastArray: (castMember) => {
    let castMovies = movies.filter((movie) => movie.cast.includes(castMember));
    return castMovies;
  },

  // Returns a random movie that contains the cast member
  randomMovieCast: (castMovies) => {
    let movieIndexCast = Math.floor(Math.random() * castMovies.length);
    let randomMovie = castMovies[movieIndexCast];
    return randomMovie;
  },

  // Returns a random movie

  createYearArray: (year) => {
    let yearMovies = movies.filter((movie) => movie.year == year);
    return yearMovies;
  },

  randomMovieYear: (yearMovies) => {
    let movieIndexYear = Math.floor(Math.random() * yearMovies.length);
    let randomMovie = yearMovies[movieIndexYear];
    return randomMovie;
  },

  // Outputs a movies info
  fullMovieInfo: (randomMovie) => {
    const infoObject = {
      movieThumbnail: randomMovie.thumbnail,
      movieTitle: randomMovie.title,
      movieYear: randomMovie.year,
      movieGenres: randomMovie.genres,
      movieCast: randomMovie.cast,
      movieExtract: randomMovie.extract,
    };

    return infoObject;
  },

  findMatchingThree: (movieArrOne, movieArrTwo, MovieArrThree) => {
    let matching = movieArrOne.filter((movie) => movieArrTwo.includes(movie));
    matching = matching.filter((movie) => MovieArrThree.includes(movie));
    return matching;
  },

  findMatchingTwo: (movieArrOne, movieArrTwo) => {
    const matching = movieArrOne.filter((movie) => movieArrTwo.includes(movie));
    return matching;
  },

  outputMovie: (infoObject) => {
    const info = infoObject;
    const img = document.querySelector("#img1");
    const h4 = document.querySelector("#movie-title");
    const h5 = document.querySelector("#movie-year");
    const p0 = document.querySelector("#genres");
    const p1 = document.querySelector("#movie-genres");
    const p00 = document.querySelector("#cast");
    const p2 = document.querySelector("#movie-cast");
    const p3 = document.querySelector("#movie-info");
    img.src = info.movieThumbnail;
    img.alt = "movie-poster";
    h4.textContent = info.movieTitle;
    h5.textContent = info.movieYear;
    p0.textContent = "Genre(s):";
    p1.textContent = info.movieGenres.join(", ");
    p00.textContent = "Cast:";
    p2.textContent = info.movieCast.join(", ");
    p3.textContent = info.movieExtract;
  },

  outputMovieOfDay: (infoObject) => {
    const info = infoObject;
    const img = document.querySelector("#img0");
    const h4 = document.querySelector("#movie-title0");
    const h5 = document.querySelector("#movie-year0");
    const p0 = document.querySelector("#genres0");
    const p1 = document.querySelector("#movie-genres0");
    const p00 = document.querySelector("#cast0");
    const p2 = document.querySelector("#movie-cast0");
    const p3 = document.querySelector("#movie-info0");
    img.src = info.movieThumbnail;
    img.alt = "movie-poster";
    h4.textContent = info.movieTitle;
    h5.textContent = info.movieYear;
    p0.textContent = "Genre(s):";
    p1.textContent = info.movieGenres.join(", ");
    p00.textContent = "Cast:";
    p2.textContent = info.movieCast.join(", ");
    p3.textContent = info.movieExtract;
  },
};

export default main;
