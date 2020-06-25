/* Authors: Jordan Williams, Kwok Ren
Description: A program that accepts a user's identity details and outputs a fake ID with those details and additional requirements for a legal ID
Date: June 24th, 2020
Credit: N/A https://www.w3schools.com/js/js_validation.asp */ 

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
// Input from query selector of the id id-list.
const idList = document.querySelector('#id-list');

// let inputRequired = document.querySelector('input').required;
// console.log(inputRequired);
//if state = 'state', show relevant image

let newId;
//let newUser = new User("Jordan", "04/02/1990" ,5,2);
//console.log(newUser);
function printId() {
  //create list item for each property value
  let nextIdName = document.createElement('li');
  let nextIdBirthday = document.createElement('li');
  let nextIdHeight = document.createElement('li');
  let nextIdState = document.querySelector('#state');
  
  nextIdName.innerText = `Name: ${newId.name}`;
  nextIdBirthday.innerText = `DOB: ${newId.birthday}`;
  nextIdHeight.innerText = `Height: ${newId.feet}'${newId.inches}`;
  nextIdState.innerText = `${newId.state} State`;
  idList.appendChild(nextIdName);
  idList.appendChild(nextIdBirthday);
  idList.appendChild(nextIdHeight);
  //idList.appendChild(nextIdState);
}

const lengthOfId = document.querySelectorAll('input').length;

function resetValues(){
  for (let i = 0; i < lengthOfId; i++){
    document.querySelectorAll('input')[i].value = null;
  }
}

function reset(){
  resetValues();
  //Reset object
  for (const property in newId) {
    if (newId.hasOwnProperty(property)){
    newId[property] = "";
    }
    //Reset DOM to match objects
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
      document.querySelectorAll('li')[i].innerText = "";
      document.querySelector('#disappear').style.display = 'none';
    }
  }
  return newId;
  // document.querySelector('#disappear').style.display = 'none';
}

// for (var property in object) {
//   if (object.hasOwnProperty(property)) {
//     // Do things here
//   }
// }

function stateBackground(){
  let backImage;
  if (newId.state === 'Maryland'){
    backImage = "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  } else {
    return;
  }
  document.querySelector('#id-list').style.backgroundImage = `url(${backImage})`;
};

function stateBackground(){
  if (newId.state !== 'Maryland') return; 

  let backgroundImage = "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

  document.querySelector('#id-list').style.backgroundImage = `url("${backgroundImage}")`
};

function generateState(){
  if (newId.state === undefined) { //Type Error - state is undefined
    return;
  } else {
    document.querySelector('#state').innerText = `${randomState()}`;
    newId.state = document.querySelector('#state').innerText;
    console.log(newId);
    stateBackground();
  }
}

function generateState(){
  if (newId.state === undefined) return;

  document.querySelector('#state').innerText = `${randomState()}`;
  newId.state = document.querySelector('#state').innerText;
  stateBackground();
}


function generateId() {
  newId = new User(name, birthday, feet, inches); //generate new object
  newId.name = nameOfPerson.value;
  newId.birthday = birthdayOfPerson.value;
  newId.feet = heightInFeet.value;
  newId.inches = heightInInches.value;
  if (nameOfPerson.value !== "" && birthdayOfPerson.value !== "" && heightInFeet.value !== "" && heightInInches.value !== ""){
  document.querySelector('#disappear').style.display = 'block';
  printId();
  stateBackground();
  resetValues();
  } else {
    return;
  }
}


//Grab the values in the inputs and put them in a new class
submitButton.addEventListener('click', generateId);
//submitButton.addEventListener('click', generateId);
document.querySelector('#state').addEventListener('click', generateState);
// document.querySelector('#state').addEventListener('click', generateId);
document.querySelector('#reset').addEventListener('click', reset);


