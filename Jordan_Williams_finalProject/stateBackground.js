// the function that will generate a unique background based on what the state is
function stateBackground(){
  // initializing backImage
  let backImage;
  //Variables for all state indices and lower case values
  let alabama = states[states.indexOf('Alabama')].toLowerCase();
  let alaska = states[states.indexOf('Alaska')].toLowerCase();
  let americanSamoa = states[states.indexOf('American Samoa')].toLowerCase();
  let arizona = states[states.indexOf('Arizona')].toLowerCase();
  let arkansas = states[states.indexOf('Arkansas')].toLowerCase();
  let california = states[states.indexOf('California')].toLowerCase();
  let colorado = states[states.indexOf('Colorado')].toLowerCase();
  let connecticut = states[states.indexOf('Connecticut')].toLowerCase();
  let delaware = states[states.indexOf('Delaware')].toLowerCase();
  let districtOfColumbia = states[states.indexOf('District of Columbia')].toLowerCase();
  let federatedStatesOfMicronesia = states[states.indexOf('Federated States of Micronesia')].toLowerCase();
  let florida = states[states.indexOf('Florida')].toLowerCase();
  let georgia = states[states.indexOf('Georgia')].toLowerCase();
  let guam = states[states.indexOf('Guam')].toLowerCase();
  let hawaii = states[states.indexOf('Hawaii')].toLowerCase();
  let idaho = states[states.indexOf('Idaho')].toLowerCase();
  let illinois = states[states.indexOf('Illinois')].toLowerCase();
  let indiana = states[states.indexOf('Indiana')].toLowerCase();
  let iowa = states[states.indexOf('Iowa')].toLowerCase();
  let kansas = states[states.indexOf('Kansas')].toLowerCase();
  let kentucky = states[states.indexOf('Kentucky')].toLowerCase();
  let louisiana = states[states.indexOf('Louisiana')].toLowerCase();
  let maine = states[states.indexOf('Maine')].toLowerCase();
  let marshallIslands = states[states.indexOf('Marshall Islands')].toLowerCase();
  let maryland = states[states.indexOf('Maryland')].toLowerCase();
  let massachusetts = states[states.indexOf('Massachusetts')].toLowerCase();
  let michigan = states[states.indexOf('Michigan')].toLowerCase();
  let minnesota = states[states.indexOf('Minnesota')].toLowerCase();
  let mississippi = states[states.indexOf('Mississippi')].toLowerCase();
  let missouri = states[states.indexOf('Missouri')].toLowerCase();
  let montana = states[states.indexOf('Montana')].toLowerCase();
  let nebraska = states[states.indexOf('Nebraska')].toLowerCase();
  let nevada = states[states.indexOf('Nevada')].toLowerCase();
  let newHampshire = states[states.indexOf('New Hampshire')].toLowerCase();
  let newJersey = states[states.indexOf('New Jersey')].toLowerCase();
  let newMexico = states[states.indexOf('New Mexico')].toLowerCase();
  let newYork = states[states.indexOf('New York')].toLowerCase();
  let northCarolina = states[states.indexOf('North Carolina')].toLowerCase();
  let northDakota = states[states.indexOf('North Dakota')].toLowerCase();
  let northernMarianaIslands = states[states.indexOf('Northern Mariana Islands')].toLowerCase();
  let ohio = states[states.indexOf('Ohio')].toLowerCase();
  let oklahoma = states[states.indexOf('Oklahoma')].toLowerCase();
  let oregon = states[states.indexOf('Oregon')].toLowerCase();
  let palau = states[states.indexOf('Palau')].toLowerCase();
  let pennsylvania = states[states.indexOf('Pennsylvania')].toLowerCase();
  let puertoRico = states[states.indexOf('Puerto Rico')].toLowerCase();
  let rhodeIsland = states[states.indexOf('Rhode Island')].toLowerCase();
  let southCarolina = states[states.indexOf('South Carolina')].toLowerCase();
  let southDakota = states[states.indexOf('South Dakota')].toLowerCase();
  let tennessee = states[states.indexOf('Tennessee')].toLowerCase();
  let texas = states[states.indexOf('Texas')].toLowerCase();
  let utah = states[states.indexOf('Utah')].toLowerCase();
  let vermont = states[states.indexOf('Vermont')].toLowerCase();
  let virginIsland = states[states.indexOf('Virgin Island')].toLowerCase();
  let virginia = states[states.indexOf('Virginia')].toLowerCase();
  let washington = states[states.indexOf('Washington')].toLowerCase();
  let westVirginia = states[states.indexOf('West Virginia')].toLowerCase();
  let wisconsin = states[states.indexOf('Wisconsin')].toLowerCase();
  let wyoming = states[states.indexOf('Wyoming')].toLowerCase();
  
  //Conditionals to compare object property of state to the variables that indicated the state indices lower cased.
  let lowerCaseState = newId.state.toLowerCase();
    if (lowerCaseState === alabama){
    backImage = "https://media.timeout.com/images/105239333/image.jpg";
  } else if (lowerCaseState === alaska){
    backImage = "https://www.ncl.com/sites/default/files/1440x803_SUN_ALASKA_GlacierBayBlueLandscape.jpg";
  } else if (lowerCaseState === americanSamoa){
    backImage = "https://i0.wp.com/americanfieldtrip.com/wp-content/uploads/2018/05/american-samoa-67.jpg?fit=1000%2C667&ssl=1";
   } else if (lowerCaseState === arizona){
    backImage = "https://images.squarespace-cdn.com/content/v1/573da34f40261d8123b8440f/1572338313794-AO50FSIATJ3WQBIWKY37/ke17ZwdGBToddI8pDm48kG5SpE0MsKwe7z-ir8Qvjtd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfeuwzofiI2qEUaxSckZ5lYhs9lU2Gn8Jq9_d4TmnhxuNigDb9Qy1-VAJiP9oJ1Lyw/Web-Arizona-Dessert.jpg?format=1500w";
  } else if (lowerCaseState === arkansas){
    backImage = "https://www.arkansasstateparks.com/sites/default/files/inline-images/Withrow%20Springs%20State%20Park-%20Arkansas1.jpg";
  } else if (lowerCaseState === california){
    backImage = "https://cdn.cnn.com/cnnnext/dam/assets/170606120957-california---travel-destination---shutterstock-220315747.jpg";
  }  else if (lowerCaseState === colorado){
    backImage = "https://ewscripps.brightspotcdn.com/dims4/default/3a54f41/2147483647/strip/true/crop/2038x1146+5+216/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F26%2F12%2Fa6f367014ff6bd297b8b2fbe3c6e%2Fandrew-plutt.jpg";
  } else if (lowerCaseState === connecticut){
    backImage = "https://img.theculturetrip.com/1440x807/wp-content/uploads/2016/07/squantz-pond-209864_1280.jpg";
  } else if (lowerCaseState === delaware){
    backImage = "https://leafly-cms-production.imgix.net/wp-content/uploads/2017/01/27143041/delaware.jpg";
  } else if (lowerCaseState === districtOfColumbia){
    backImage = "https://ihitthebutton.com/wp-content/uploads/2016/07/best-dc-photo-spots-800x410.jpg";
  } else if (lowerCaseState === federatedStatesOfMicronesia){
    backImage = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Koloniasokehs.jpg";
   } else if (lowerCaseState === florida){
    backImage = "https://i.pinimg.com/originals/3e/90/e4/3e90e4840c7b5782357e4d6d09fd3cd4.jpg";
  } else if (lowerCaseState === georgia){
    backImage = "https://selectregistry.com/wp-content/uploads/2018/08/weekendgetawayfromatlantaga-Edited.jpg";
  } else if (lowerCaseState === guam){
    backImage = "https://gmedical.com/blog/wp-content/uploads/2020/02/working-locum-tenens-guam.jpg";
  } else if (lowerCaseState === hawaii){
    backImage = "https://aws.hawaii-guide.com/images/made/waikiki-things-to-do_1200_820_85_s_c1_c_c_0_0.jpg";
  } else if (lowerCaseState === idaho){
    backImage = "https://slowviking.com/wp-content/uploads/2017/12/twin-falls-idaho-shoshone-falls-state-park-slow-viking-1-header-image.jpg";
  } else if (lowerCaseState === illinois){
    backImage = "https://buyoya.com/wp-content/uploads/2016/12/chicago-cloud-gate.jpg";
  } else if (lowerCaseState === indiana){
    backImage = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F12%2FIndianapolis-River-Stay-INDYGUIDE0817.jpg&q=85";
  } else if (lowerCaseState === iowa){
    backImage = "https://i.redd.it/v9q5dnxrnsi31.jpg";
  } else if (lowerCaseState === kansas){
    backImage = "https://www.getoutdoorskansas.org/sites/default/files/flint_hills_spring.jpg";
   } else if (lowerCaseState === kentucky){
    backImage = "https://d2fxn1d7fsdeeo.cloudfront.net/kentuckyliving.com/wp-content/uploads/2016/11/07004029/KYLiving_SocialShare.jpeg";
  } else if (lowerCaseState === louisiana){
    backImage = "https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/new%20orleans/mardi-gras-new-orleans-things-to-do-lead.jpg";
  } else if (lowerCaseState === maine){
    backImage = "https://cache.marriott.com/marriottassets/destinations/hero/maine-destination.jpg?interpolation=progressive-bilinear";
  } else if (lowerCaseState === marshallIslands){
    backImage = "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/11/26/568e69e6-0f6b-11ea-82cd-148dc44829b8_image_hires_122115.jpg?itok=s8SaspkB&v=1574742083";
  } else if (lowerCaseState === maryland){
    backImage = "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Mason_and_Dixon_Scenic_Byway_Maryland";
  } else if (lowerCaseState === massachusetts){
    backImage = "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_1038059083.jpg";
   } else if (lowerCaseState === michigan){
    backImage = "https://i.pinimg.com/originals/27/48/d3/2748d374f408dfce5391be33916b060d.jpg";
  } else if (lowerCaseState === minnesota){
    backImage = "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Minnesota_Glacial_Ridge_Trail_Scenic_Byway";
  } else if (lowerCaseState === mississippi){
    backImage = "https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2016/03/07111340/B-9.png";
  } else if (lowerCaseState === missouri){
    backImage = "https://www.outfrontmedia.com/-/media/images/ofm/markets/stlouis/st-louis-hero.ashx";
  } else if (lowerCaseState === montana){
    backImage = "https://www.columbiafallschamber.org/wp-content/uploads/2016/01/AvalancheLake.jpg";
  } else if (lowerCaseState === nebraska){
    backImage = "https://i.pinimg.com/originals/72/d3/a6/72d3a69db6b804eed02b1b5a2058fa07.jpg";
  } else if (lowerCaseState === nevada){
    backImage = "https://www.roadunraveled.com/wp-content/uploads/2018/09/las-vegas-bellagio-fountains.jpg";
  } else if (lowerCaseState === newHampshire){
    backImage = "https://peakvisor.com/img/news/white-mountains-nh.jpg";
  } else if (lowerCaseState === newJersey){
    backImage = "https://www.royalcoachman.com/blog/wp-content/uploads/2018/10/fall-foliage.jpg";
  } else if (lowerCaseState === newMexico){
    backImage = "https://ilovenewmexico.files.wordpress.com/2011/01/red-rocks.jpg";
  } else if (lowerCaseState === newYork){
    backImage = "https://static.brusselsairlines.com/_img/destinationPage2/USA/NYC-Central-Park.jpg";
  } else if (lowerCaseState === northCarolina){
    backImage = "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/11/18/CI_CrystalCoastTourismAuthority_CrystalCoast_CapeLookout.jpg.rend.hgtvcom.1280.853.suffix/1491593370556.jpeg";
  } else if (lowerCaseState === northDakota){
    backImage = "https://www.ndtourism.com/sites/default/files/styles/slideshow_slide_large/public/legacy_images/North_Dakota_Scenery_Double%20Sunset%20G%20Bluff.jpg?itok=CNQC81r1";
  } else if (lowerCaseState === northernMarianaIslands){
    backImage = "https://www.cappex.com/themes/custom/fingerprint/images/colleges-by-state/northernmarianaislands_statecolleges.jpg";
  } else if (lowerCaseState === ohio){
    backImage = "https://www.webfeatcomplete.com/wp-content/uploads/2019/07/Clevelandmobile.png";
  } else if (lowerCaseState === oklahoma){
    backImage = "https://jwallacephoto.com/blog/wp-content/uploads/galleries/post-2133/full/oklahoma%20-%2001.jpg";
  } else if (lowerCaseState === oregon){
    backImage = "https://bicycleadventures.com/wp-content/uploads/2019/06/crater-lake-1600x896.jpg";
  } else if (lowerCaseState === palau){
    backImage = "https://7b7157f59fb5914df25d-83ec9bcc8970758aaa4b1923747e8d1b.ssl.cf1.rackcdn.com/113254ebbbc46356cad118c933d46be9.jpg";
  } else if (lowerCaseState === pennsylvania){
    backImage = "https://www.visitphilly.com/wp-content/uploads/2018/02/city-hall-north-broad-street-convention-center-new-medlow-for-vp-2200x1237px.jpg";
  } else if (lowerCaseState === puertoRico){
    backImage = "https://www.telegraph.co.uk/content/dam/Travel/hotels/2020/February/san-juan-cruise-port-guide-lead.jpg";
  } else if (lowerCaseState === rhodeIsland){
    backImage = "https://waterfire.org/wp-content/uploads/2018/12/cover.jpg";
  } else if (lowerCaseState === southCarolina){
    backImage = "https://specials-images.forbesimg.com/imageserve/805157896/960x0.jpg?fit=scale";
  } else if (lowerCaseState === southDakota){
    backImage = "https://www.travelsouthdakota.com/sites/default/files/styles/hero_l/public/2020-03/cc04-25-18mtrushmore0068.jpg?itok=JXs83c8p";
  } else if (lowerCaseState === tennessee){
    backImage = "https://admissions.utk.edu/wp-content/uploads/sites/72/2019/06/knoxville.jpg";
  } else if (lowerCaseState === texas){
    backImage = "https://www.qantas.com/content/dam/travelinsider/images/explore/north-america/usa/dallas/the-best-things-to-do-in-dallas/dallas-fort-worth-city-skyline-texas.jpg";
  } else if (lowerCaseState === utah){
    backImage = "https://cdn.britannica.com/69/95669-050-3ECCFE19/Salt-Lake-City-Utah.jpg";
  } else if (lowerCaseState === vermont){
    backImage = "https://www.smartertravel.com/uploads/2018/02/Stowe-Vermont-hero-1.jpg";
  } else if (lowerCaseState === virginIsland){
    backImage = "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/04/Vessup-DJI_0181-1080x674.jpg";
  } else if (lowerCaseState === virginia){
    backImage = "https://www.avepoint.com/blog/careers/wp-content/uploads/sites/3/2019/07/RVA.jpg";
  } else if (lowerCaseState === washington){
    backImage = "https://www.nationsonline.org/gallery/USA/Seattle-Space-Needle.jpg";
  } else if (lowerCaseState === westVirginia){
    backImage = "https://peakvisor.com/img/news/West-Virginia.jpg";
  } else if (lowerCaseState === wisconsin){
    backImage = "https://www.synergyetherapy.com/wp-content/uploads/2019/10/bigstock-Milwaukee-Wisconsin-USA-down-305666320.jpg";
  } else if (lowerCaseState === wyoming){
    backImage = "https://www.nps.gov/grte/planyourvisit/images/adams_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false";
  }
  document.querySelector('#disappear').style.backgroundImage = `url(${backImage})`; //set background image of dissappear id to newly defined backImage
}

