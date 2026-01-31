"use strict";

const SeasonTypes = [
  { value: 1, caption: "Spring" },
  { value: 2, caption: "Summer" },
  { value: 3, caption: "Autumn" },
  { value: 4, caption: "Winter" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function cmbTask1CalculateClick() {
  const Task1Output = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");

  const width = parseInt(txtRectWidth.value);
  const height = parseInt(txtRectHeight.value);
  const area = width * height;
  const perimeter = 2 * (width + height);

  Task1Output.innerHTML = `Width: ${width}, Height: ${height}`;
  Task1Output.innerHTML += `<br/>Circumference = ${perimeter}, Area = ${area}`;
}

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.onclick = cmbTask1CalculateClick;

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function pressKey(event) {
  const Task2Output = document.getElementById("txtTask2Output"); // Output area for Task 2

  if (event.key === "Enter" || event.key === "Return") {
    const word = txtTask2Word.value; // Get the value from the input field
    Task2WordsArray.push(word); // Add the word to the array

    Task2Output.innerHTML = `You have entered ${Task2WordsArray.length} words: <br/>`;
    Task2Output.innerHTML += Task2WordsArray.join(", ");
    txtTask2Word.value = "";
  }
}

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", pressKey);
const Task2WordsArray = [];

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const chkTask3 = document.getElementsByName("chkTask3"); // Get all checkbox elements
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer"); // Get the check answer button
const Task3Output = document.getElementById("txtTask3Output");
function CheckAnswerClick() {
  Task3Output.innerHTML = "";
  for (let i = 0; i < chkTask3.length; i++) {
    const chkBox = chkTask3[i];
    const text = `Check box ${i + 1} checked? ${chkBox.checked}`;
    Task3Output.innerHTML += text + "<br/>";
  }
}
cmbTask3CheckAnswer.addEventListener("click", CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function rdbCarNameSelect(aEvent){
  const txtTask4Output = document.getElementById("txtTask4Output");
  txtTask4Output.innerHTML =
    `User select season type number: ${aEvent.target.value}`
  ;
} 

const divTask4Season = document.getElementById("divTask4Season");
for(let i = 0; i < SeasonTypes.length; i++){
  const season = SeasonTypes[i];
  const inpRadio = document.createElement("input");
  inpRadio.type = "radio";
  inpRadio.name = "rdbSeason";
  inpRadio.value = season.value;
  inpRadio.id = "rdbSeason" + i.toString();
  inpRadio.addEventListener("change", rdbCarNameSelect);
  const lblCaption = document.createElement("label");
  lblCaption.for = inpRadio.id;
  lblCaption.appendChild(document.createTextNode(season.caption));
  divTask4Season.appendChild(inpRadio);
  divTask4Season.appendChild(lblCaption);
  divTask4Season.appendChild(document.createElement("br"));

  console.log(`SeasonTypes[${i}].value = ${season.value}, SeasonTypes[${i}].caption = ${season.caption}`)
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function SelectTask5AnimalsChange(){
  const animalValue = selectTask5Animals.value;
  txtTask5Output.innerHTML = "User selected animal num:#" + animalValue;
}
selectTask5Animals.addEventListener("change", SelectTask5AnimalsChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");
 
for(let i = 0; i < GirlsNames.length; i++){
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(GirlsNames[i]));
  selectTask6Girls.appendChild(option);
}
function SelectGirlsChange(){
  const value = parseInt(selectTask6Girls.value);
  const name = GirlsNames[value];
  txtTask6Output.innerHTML = `You selected: ${value}, ${name}`;
}
selectTask6Girls.addEventListener("change", SelectGirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");
const tblMoviesBody = tblMovies.getElementsByTagName("tbody")[0];

function cmbAddMovieClick(){
  const movieTitle = txtMovieTitle.value;
  const movieGenreIndex = parseInt(selectMovieGenre.value);
  const movieGenre = MovieGenre[movieGenreIndex];
  const movieDirector = txtMovieDirector.value;
  const movieRate = txtMovieRate.value;
  const newRow = tblMoviesBody.insertRow();
  const cellTitle = newRow.insertCell();
  const cellGenre = newRow.insertCell();
  const cellDirector = newRow.insertCell();
  const cellRate = newRow.insertCell();
  cellTitle.innerHTML = movieTitle;
  cellGenre.innerHTML = movieGenre;
  cellDirector.innerHTML = movieDirector;
  cellRate.innerHTML = movieRate;
  // Clear input fields
  txtMovieTitle.value = "";
  selectMovieGenre.value = "0";
  txtMovieDirector.value = "";
  txtMovieRate.value = "";
}

for(let i = 0; i < MovieGenre.length; i++){
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(MovieGenre[i]));
  selectMovieGenre.appendChild(option);
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);
// Create three sample movies
txtMovieTitle.value = "The Shawshank Redemption";
selectMovieGenre.value = "7";
txtMovieDirector.value = "Frank Darabont";
txtMovieRate.value = "9.3";
cmbAddMovieClick();

txtMovieTitle.value = "The Godfather";
selectMovieGenre.value = "5";
txtMovieDirector.value = "Francis Ford Coppola";
txtMovieRate.value = "9.2";
cmbAddMovieClick();

txtMovieTitle.value = "The Dark Knight";
selectMovieGenre.value = "0";
txtMovieDirector.value = "Christopher Nolan";
txtMovieRate.value = "9.0";
cmbAddMovieClick();

// Prepare one new movie, for fast testing:
txtMovieTitle.value = "Inception";
selectMovieGenre.value = "17";
txtMovieDirector.value = "Christopher Nolan";
txtMovieRate.value = "8.8";