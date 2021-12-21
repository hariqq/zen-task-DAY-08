//1)https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//question 1 - class movie
class Movie {
  constructor(movieTitle, studioName, movieRating = "PG") {
    this.movieTitle = movieTitle; //setting class properties using inputs from instance
    this.movieRating = movieRating;
    this.studioName = studioName;
  }

  getPG(inputArray) {
    const outputArray = []; //creating a new array to hold returning values
    for (let i = 0; i < inputArray.length; i++) {
      let ratingComparator = inputArray[i].movieRating.slice(0, 2); //for each movie instance slicing first 2 elements of its rating
      if (ratingComparator === "PG") {
        //comparing sliced value with PG
        outputArray.push(
          //if sliced movie rating is PG then it's values below as a string are pushed into output array
          `${inputArray[i].movieTitle} with rating ${inputArray[i].movieRating} created by ${inputArray[i].studioName}`
        );
      }
    }
    return outputArray; //returning final array after comparing all instances' movie ratings
  }

  setMovieName(inputMovieName) {
    this.movieName = inputMovieName; //function to set the name of the movie
  }

  setStudioName(inputStudioName) {
    this.studioName = inputStudioName; //function to set name of the studio
  }

  setMovieRating(inputMovieRating) {
    this.movieRating = inputMovieRating; //function to set the movie rating
  }
}

const film1 = new Movie("movie1", "studio1", "rating1"); //creating and initialising 5 movie instances
const film2 = new Movie("movie2", "studio2", "PG13");
const film3 = new Movie("movie3", "studio3");
const film4 = new Movie("movie4", "studio4", "R");
const film5 = new Movie("movie5", "studio5", "rating5");

const arrayInstances = [film1, film2, film3, film4, film5]; //creating an array with instances as the elements

const testInstance = new Movie(); //creating the testInstance to call class
finalArray = testInstance.getPG(arrayInstances); //array of instances is given as input and returned values are shown below
console.log(`Returned array with PG movies are:
${finalArray}`);

const questionD = new Movie(); //creating an instance with no property values
questionD.setMovieName("Casino Royale"); //setting moviename using function
questionD.setStudioName("Eon Productions"); //setting studioname using function
questionD.setMovieRating("PG13"); //setting movierating using function
console.log(`after instance creation the preoperty values of instance questinoD are:
moviename: ${questionD.movieName}
studioname: ${questionD.studioName}
movierating: ${questionD.movieRating}
`); //after setting values the properties of this new instance is shown.

