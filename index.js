import main from "./getMetrics.js";
/*
functions (each function builds off the other of it's category):
validMovieGenres, validMovieYears, randomMovie(), createGenreArray(genre), randomMovieGenre(genreMovies), 
createCastArray(castMember), randomMovieCast(castMovies), createYearArray(year), 
randomMovieYear(yearMovies), fullMovieInfo(randomMovie), 
findMatchingThree(movieArrOne, movieArrTwo, MovieArrThree), 
findMatchingTwo(movieArrOne, movieArrTwo), outputMovie(infoObject), 
outputMovieOfDay(infoObject) 
*/

const liRandomGenre = () => {
  const li = document.createElement("li");
  li.class = "randomGenre";

  let genreArr = main.validMovieGenres();
  li.textContent = genreArr[Math.floor(Math.random() * genreArr.length)];

  document.querySelector("ul#genre-list").appendChild(li);
};

liRandomGenre();
liRandomGenre();
liRandomGenre();
liRandomGenre();
liRandomGenre();

const liRandomCast = () => {
  const li = document.createElement("li");
  li.class = "randomCast";

  let castArr = main.validMovieCast();
  li.textContent = castArr[Math.floor(Math.random() * castArr.length)];

  document.querySelector("ul#cast-list").appendChild(li);
};

liRandomCast();
liRandomCast();
liRandomCast();
liRandomCast();
liRandomCast();

const perfectMovieList = (toBeReturned) => {
  // The parameters will be called with the form info from above
  let perfectMovies = [];
  const [genreMovies, castMovies, yearMovies] = [
    toBeReturned.genreArr,
    toBeReturned.castArr,
    toBeReturned.yearArr,
  ];
  console.log(genreMovies);
  console.log(castMovies);
  console.log(yearMovies);

  if (
    genreMovies.length > 0 &&
    castMovies.length > 0 &&
    yearMovies.length > 0
  ) {
    console.log("All exist");
    return main.randomMovieGenre(
      main.findMatchingThree(genreMovies, castMovies, yearMovies)
    );
  } else if (
    genreMovies.length > 0 ||
    castMovies.length > 0 ||
    yearMovies.length > 0
  ) {
    if (genreMovies.length > 0 && castMovies.length > 0) {
      console.log("GM and CM exist");
      return main.randomMovieGenre(
        main.findMatchingTwo(genreMovies, castMovies)
      );
    } else if (castMovies.length > 0 && yearMovies.length > 0) {
      console.log("CM and YM exist");
      return main.randomMovieGenre(
        main.findMatchingTwo(castMovies, yearMovies)
      );
    } else if (yearMovies.length > 0 && genreMovies.length > 0) {
      console.log("GM and YM exist");
      return main.randomMovieGenre(
        main.findMatchingTwo(genreMovies, yearMovies)
      );
    } else if (genreMovies.length > 0) {
      console.log("GM exist");
      return main.randomMovieGenre(genreMovies);
    } else if (castMovies.length > 0) {
      console.log("CM exist");
      return main.randomMovieCast(castMovies);
    } else if (yearMovies.length > 0) {
      console.log("YM exist");
      return main.randomMovieYear(yearMovies);
    } else if (
      genreMovies.length == 0 &&
      castMovies.length == 0 &&
      yearMovies.length == 0
    ) {
      console.log("No Parameters Entered");
      return main.randomMovie();
    }
  }
};

const form = document.querySelector("form");

const formManipulation = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formObject = Object.fromEntries(formData);
  const { genre, castMember, year } = formObject;

  console.log(formObject);

  console.log(genre);
  console.log(castMember);
  console.log(year);

  const toBeReturned = {
    genreArr: main.createGenreArray(genre),
    castArr: main.createCastArray(castMember),
    yearArr: main.createYearArray(year),
  };

  console.log(toBeReturned);

  form.reset();
  main.outputMovie(main.fullMovieInfo(perfectMovieList(toBeReturned)));
};

form.addEventListener("submit", formManipulation);
main.outputMovieOfDay(main.fullMovieInfo(main.randomMovie()));
