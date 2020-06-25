// Options for states
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

function randomState(){
  let i = Math.floor(Math.random() * states.length);
  return states[i];
}

//console.log(randomState());

// class constructor for user
class User {
  constructor(name, birthday, feet, inches){
    this.name = name;
    this.birthday = birthday;
    this.feet = feet;
    this.inches = inches;
    this.state = randomState();
  }
}

//let newUser = new User("Jordan", "12/31/1993", 5, 7);
//console.log(newUser);