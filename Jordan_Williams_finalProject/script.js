/* Authors: Jordan Williams, Kwok Ren
Description: A program that accepts a user's identity details and outputs a fake ID with those details and additional requirements for a legal ID
Date: June 24th, 2020
Credit: N/A */ 

//Global Variables
  
//Input Query Selectors
// Input from query selector of the id name.
const nameOfPerson = document.querySelector('#name');
// Input from query selector of the id birthday.
const birthdayOfPerson = document.querySelector('#birthday');
// Input from query selector of the id feet.
const heightInFeet = document.querySelector('#feet');
// Input from query selector of the id inches.
const heightInInches = document.querySelector('#inches');
// Input from query selector of the id submit.
const submitButton = document.querySelector('#submit');
// Input from query selector of the class id-list.
const idList = document.querySelector('.id-list');
// Input from quert selector of the id photo.
const photo = document.querySelector('#photo');

// Initialize variable for user information objects
let newId;

function printId() {
  // create list item for each property value
  // create list item for the name 
  let nextIdName = document.createElement('li');
  // create list item for birthday
  let nextIdBirthday = document.createElement('li');
  // create list item for height
  let nextIdHeight = document.createElement('li');
  // selecting a list currently made already and adding the state to it
  let nextIdState = document.querySelector('#state');
  // create list item for the photo
  let nextPhoto = document.createElement('li');
  // Inner text for each property value
  // inner text of the name
  nextIdName.innerText = `Name: ${newId.name}`;
  // inner text of the birthday
  nextIdBirthday.innerText = `DOB: ${newId.birthday}`;
  // inner text of the height by combining both the feet and inches
  nextIdHeight.innerText = `Height: ${newId.feet}'${newId.inches}`;
  // inner text of the state
  nextIdState.innerText = newId.state;
  // inner HTML instead of inner text because we wanted to put an id on the photo so we can DOM manipulate it
  nextPhoto.innerHTML = `<img id="photoID" src="${newId.photo}">`
  //Append each property value to #id-list unordered list
  idList.appendChild(nextIdName); //Adds name list item
  idList.appendChild(nextIdBirthday); //Adds birthday list item
  idList.appendChild(nextIdHeight); //Adds height list item
  idList.appendChild(nextPhoto); //Adds photo list item
}
// function that allows us to clear the form
function resetValues(){
  // variable that defines the amount of inputs there are
  const lengthOfId = document.querySelectorAll('input').length;
  // for loop to go through every input possible based on it's length
  for (let i = 0; i < lengthOfId; i++){
    // with every loop, the selected input will become null
    document.querySelectorAll('input')[i].value = null;
  }
}
// function to reset everything
function reset(){
  resetValues(); //reset form inputs
  //Reset the object
  // we loop through each property of newId
  for (const property in newId) {
    // the condition is if it has a property
    if (newId.hasOwnProperty(property)){
      // then empty the property (resetting it to blank)
    newId[property] = "";
      }
    } 
    //Reset DOM to match objects
    // loop through the amount of lists there are
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
      // make all the inner text of each selected input blank (resetting it)
      document.querySelectorAll('li')[i].innerText = "";
      // making the id disappear when you reset
      document.querySelector('#disappear').style.display = 'none';
    }
  }


function generateState(){
  if (newId.state === undefined) { //Type Error - state is undefined
    return;
  } else {
    document.querySelector('#state').innerText = `${randomState()}`;
    newId.state = document.querySelector('#state').innerText;
    stateBackground();
  }
}


function generateId() {
  if (nameOfPerson.value !== "" && birthdayOfPerson.value !== "" && heightInFeet.value !== "" && heightInInches.value !== "") {
    newId = new User(nameOfPerson.value, birthdayOfPerson.value, heightInFeet.value, heightInInches.value, photo.value); // generates the new object of user if condition is met
    document.querySelector('#disappear').style.display = 'block';// this block will display if condition is met
    printId(); // activates the function that will print the values to the HTML when condition is met
    stateBackground(); // activates the function to generate the background image when condition is met
    resetValues(); // activates the function to reset the values in the forms when condition is met
  } else {
    // alerts you if you do not have all your forms filled out
    alert("Fill out all of your information!");
    return;
  }
}

//Grab the values in the inputs and put them in a new class
submitButton.addEventListener('click', generateId);
//submitButton.addEventListener('click', generateId);
document.querySelector('#state').addEventListener('click', generateState);
// document.querySelector('#state').addEventListener('click', generateId);
document.querySelector('#reset').addEventListener('click', reset);


