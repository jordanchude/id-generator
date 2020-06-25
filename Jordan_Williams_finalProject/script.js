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
// Input from query selector of the id id-list.
const idList = document.querySelector('#id-list');

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
  // Inner text for each property value
  // inner text of the name
  nextIdName.innerText = `Name: ${newId.name}`;
  // inner text of the birthday
  nextIdBirthday.innerText = `DOB: ${newId.birthday}`;
  // inner text of the height by combining both the feet and inches
  nextIdHeight.innerText = `Height: ${newId.feet}'${newId.inches}`;
  // inner text of the state
  nextIdState.innerText = newId.state;
  //Append each property value to #id-list unordered list
  idList.appendChild(nextIdName);
  idList.appendChild(nextIdBirthday);
  idList.appendChild(nextIdHeight);
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

function stateBackground(){
  let backImage;
  let lowerCaseState = newId.state.toLowerCase();
    if (lowerCaseState === 'alabama'){
    backImage = "https://media.timeout.com/images/105239333/image.jpg";
  } else if (lowerCaseState === 'alaska'){
    backImage = "https://www.ncl.com/sites/default/files/1440x803_SUN_ALASKA_GlacierBayBlueLandscape.jpg";
  } else if (lowerCaseState === 'american samoa'){
    backImage = "https://i0.wp.com/americanfieldtrip.com/wp-content/uploads/2018/05/american-samoa-67.jpg?fit=1000%2C667&ssl=1";
  } else if (lowerCaseState === 'arizona'){
    backImage = "https://images.squarespace-cdn.com/content/v1/573da34f40261d8123b8440f/1572338313794-AO50FSIATJ3WQBIWKY37/ke17ZwdGBToddI8pDm48kG5SpE0MsKwe7z-ir8Qvjtd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfeuwzofiI2qEUaxSckZ5lYhs9lU2Gn8Jq9_d4TmnhxuNigDb9Qy1-VAJiP9oJ1Lyw/Web-Arizona-Dessert.jpg?format=1500w";
  } else if (lowerCaseState === 'arkansas'){
    backImage = "https://www.arkansasstateparks.com/sites/default/files/inline-images/Withrow%20Springs%20State%20Park-%20Arkansas1.jpg";
  } else if (lowerCaseState === 'california'){
    backImage = "https://cdn.cnn.com/cnnnext/dam/assets/170606120957-california---travel-destination---shutterstock-220315747.jpg";
  } else if (lowerCaseState === 'colorado'){
    backImage = "https://ewscripps.brightspotcdn.com/dims4/default/3a54f41/2147483647/strip/true/crop/2038x1146+5+216/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F26%2F12%2Fa6f367014ff6bd297b8b2fbe3c6e%2Fandrew-plutt.jpg";
  } else if (lowerCaseState === 'connecticut'){
    backImage = "https://img.theculturetrip.com/1440x807/wp-content/uploads/2016/07/squantz-pond-209864_1280.jpg";
  } else if (lowerCaseState === 'delaware'){
    backImage = "https://leafly-cms-production.imgix.net/wp-content/uploads/2017/01/27143041/delaware.jpg";
  } else if (lowerCaseState === 'district of columbia'){
    backImage = "https://ihitthebutton.com/wp-content/uploads/2016/07/best-dc-photo-spots-800x410.jpg";
  } else if (lowerCaseState === 'federated states of micronesia'){
    backImage = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Koloniasokehs.jpg";
  } else if (lowerCaseState === 'florida'){
    backImage = "https://i.pinimg.com/originals/3e/90/e4/3e90e4840c7b5782357e4d6d09fd3cd4.jpg";
  } else if (lowerCaseState === 'georgia'){
    backImage = "https://selectregistry.com/wp-content/uploads/2018/08/weekendgetawayfromatlantaga-Edited.jpg";
  } else if (lowerCaseState === 'guam'){
    backImage = "https://gmedical.com/blog/wp-content/uploads/2020/02/working-locum-tenens-guam.jpg";
  } else if (lowerCaseState === 'hawaii'){
    backImage = "https://aws.hawaii-guide.com/images/made/waikiki-things-to-do_1200_820_85_s_c1_c_c_0_0.jpg";
  } else if (lowerCaseState === 'idaho'){
    backImage = "https://slowviking.com/wp-content/uploads/2017/12/twin-falls-idaho-shoshone-falls-state-park-slow-viking-1-header-image.jpg";
  } else if (lowerCaseState === 'illinois'){
    backImage = "https://buyoya.com/wp-content/uploads/2016/12/chicago-cloud-gate.jpg";
  } else if (lowerCaseState === 'indiana'){
    backImage = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F12%2FIndianapolis-River-Stay-INDYGUIDE0817.jpg&q=85";
  } else if (lowerCaseState === 'iowa'){
    backImage = "https://i.redd.it/v9q5dnxrnsi31.jpg";
  } else if (lowerCaseState === 'kansas'){
    backImage = "https://www.getoutdoorskansas.org/sites/default/files/flint_hills_spring.jpg";
  } else if (lowerCaseState === 'kentucky'){
    backImage = "https://d2fxn1d7fsdeeo.cloudfront.net/kentuckyliving.com/wp-content/uploads/2016/11/07004029/KYLiving_SocialShare.jpeg";
  } else if (lowerCaseState === 'louisiana'){
    backImage = "https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/new%20orleans/mardi-gras-new-orleans-things-to-do-lead.jpg";
  } else if (lowerCaseState === 'maine'){
    backImage = "https://cache.marriott.com/marriottassets/destinations/hero/maine-destination.jpg?interpolation=progressive-bilinear";
  } else if (lowerCaseState === 'marshall islands'){
    backImage = "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/11/26/568e69e6-0f6b-11ea-82cd-148dc44829b8_image_hires_122115.jpg?itok=s8SaspkB&v=1574742083";
  } else if (lowerCaseState === 'maryland'){
    backImage = "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Mason_and_Dixon_Scenic_Byway_Maryland";
  } else if (lowerCaseState === 'massachusetts'){
    backImage = "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_1038059083.jpg";
  } else if (lowerCaseState === 'michigan'){
    backImage = "https://i.pinimg.com/originals/27/48/d3/2748d374f408dfce5391be33916b060d.jpg";
  } else if (lowerCaseState === 'minnesota'){
    backImage = "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Minnesota_Glacial_Ridge_Trail_Scenic_Byway";
  } else if (lowerCaseState === 'mississippi'){
    backImage = "";
  } else if (lowerCaseState === 'missouri'){
    backImage = "https://www.outfrontmedia.com/-/media/images/ofm/markets/stlouis/st-louis-hero.ashx";
  } else if (lowerCaseState === 'montana'){
    backImage = "https://www.tripsavvy.com/thmb/ctIIer8EKWHA8YqKHio2noZnEvI=/3888x2187/smart/filters:no_upscale()/scenic-view-of-st-mary-lake-against-rocky-mountains-during-winter-758582739-5aaf3bc83037130037271a04.jpg";
  } else if (lowerCaseState === 'nebraska'){
    backImage = "https://i.pinimg.com/originals/72/d3/a6/72d3a69db6b804eed02b1b5a2058fa07.jpg";
  } else if (lowerCaseState === 'nevada'){
    backImage = "https://www.roadunraveled.com/wp-content/uploads/2018/09/las-vegas-bellagio-fountains.jpg";
  } else if (lowerCaseState === 'new hampshire'){
    backImage = "https://peakvisor.com/img/news/white-mountains-nh.jpg";
  } else if (lowerCaseState === 'new jersey'){
    backImage = "https://www.royalcoachman.com/blog/wp-content/uploads/2018/10/fall-foliage.jpg";
  } else if (lowerCaseState === 'new mexico'){
    backImage = "https://ilovenewmexico.files.wordpress.com/2011/01/red-rocks.jpg";
  } else if (lowerCaseState === 'new york'){
    backImage = "https://static.brusselsairlines.com/_img/destinationPage2/USA/NYC-Central-Park.jpg";
  } else if (lowerCaseState === 'north carolina'){
    backImage = "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/11/18/CI_CrystalCoastTourismAuthority_CrystalCoast_CapeLookout.jpg.rend.hgtvcom.1280.853.suffix/1491593370556.jpeg";
  } else if (lowerCaseState === 'north dakota'){
    backImage = "https://www.ndtourism.com/sites/default/files/styles/slideshow_slide_large/public/legacy_images/North_Dakota_Scenery_Double%20Sunset%20G%20Bluff.jpg?itok=CNQC81r1";
  } else if (lowerCaseState === 'northern mariana islands'){
    backImage = "";
  } else if (lowerCaseState === 'ohio'){
    backImage = "";
  } else if (lowerCaseState === 'oklahoma'){
    backImage = "";
  } else if (lowerCaseState === 'oregon'){
    backImage = "";
  } else if (lowerCaseState === 'palau'){
    backImage = "";
  } else if (lowerCaseState === 'pennsylvania'){
    backImage = ""
  } else if (lowerCaseState === 'puerto rico'){
    backImage = ""
  } else if (lowerCaseState === 'rhode island'){
    backImage = ""
  } else if (lowerCaseState === 'south carolina'){
    backImage = ""
  } else if (lowerCaseState === 'south dakota'){
    backImage = ""
  } else if (lowerCaseState === 'tennessee'){
    backImage = ""
  } else if (lowerCaseState === 'texas'){
    backImage = ""
  } else if (lowerCaseState === 'utah'){
    backImage = ""
  } else if (lowerCaseState === 'vermont'){
    backImage = ""
  } else if (lowerCaseState === 'virgin island'){
    backImage = ""
  } else if (lowerCaseState === 'virginia'){
    backImage = ""
  } else if (lowerCaseState === 'washington'){
    backImage = ""
  } else if (lowerCaseState === 'west virginia'){
    backImage = ""
  } else if (lowerCaseState === 'wisconsin'){
    backImage = ""
  } else if (lowerCaseState === 'wyoming'){
    backImage = ""
  }
  document.querySelector('#disappear').style.backgroundImage = `url(${backImage})`;
};


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
    newId = new User(nameOfPerson.value, birthdayOfPerson.value, heightInFeet.value, heightInInches.value); // generates the new object of user if condition is met
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


