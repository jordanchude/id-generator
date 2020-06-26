// array with territory and arrays
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

//generate random state
function randomState(){
  let i = Math.floor(Math.random() * states.length);
  return states[i];
}

// class constructor for user
class User {
  constructor(name, birthday, feet, inches, photo){
    this.name = name;
    this.birthday = birthday;
    this.feet = feet;
    this.inches = inches;
    this.state = randomState();
    this.photo = photo;
  }
}