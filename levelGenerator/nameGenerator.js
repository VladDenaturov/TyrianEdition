

var count = 10
 
var randomName =(Math.floor(Math.random()*count));
var randomTypeName = (Math.floor(Math.random()*7))
var randomLocationIn = (Math.floor(Math.random()*3))
var NumericName = (Math.floor(Math.random()*21))
var randomEnviorment = (Math.floor(Math.random()*10))

const lvlName  = {
    locationName: "",           //eg. name of the planet,asteroid etctr...
    locationTypeName: "",           //eg. asteroid,planet,space station etc..
    locationInLocationName: "",     //eg. {$locationTypeName} + {$locationInLocationName} + {$location name}  //moon near the neunoch <--example //to do add "the,of " etc..
     locationNumericName: "",            //eg. x12,ps56 etc..
    enviromentType: "",                     //eg. desert,jungle,bio-mehcnical,corrupted etc...


}

function GenerateLvlName(){
// location name random name
switch (randomName) {
    case 0: lvlName.locationName = "teridaonoch"; break;
    case 1: lvlName.locationName = "astrumnova"; break;
    case 2: lvlName.locationName = "shislost"; break;
    case 3: lvlName.locationName = "neunoch"; break;
    case 4: lvlName.locationName = "eokamn"; break;                                             //to do: make random names as you did them here
    case 6: lvlName.locationName = "hjutamnem"; break;
    case 7: lvlName.locationName = "kazirs"; break;
    case 8: lvlName.locationName = "narzirst"; break;
    case 9: lvlName.locationName = "gomnoł"; break;
    case 10: lvlName.locationName = "lergrad"; break;
    default:
        break;
}

//location Type random name

switch (randomTypeName) {

    case 0: lvlName.locationTypeName = "moon"; break;
    case 1: lvlName.locationTypeName = "moon"; break;
    case 2: lvlName.locationTypeName = "moon"; break;
    case 3: lvlName.locationTypeName = "moon"; break;
    case 4: lvlName.locationTypeName = "moon"; break;                                             
    case 5: lvlName.locationTypeName = "moon"; break;
    case 6: lvlName.locationTypeName = "moon"; break;
   
    default:
        break;
}



switch (randomLocationIn) {

    case 0: lvlName.locationInLocationName = "near the"; break;
    case 1: lvlName.locationInLocationName = "of the"; break;
    case 2: lvlName.locationInLocationName = "of the"; break;
    default:
        break;
}

switch (NumericName) {

    case 0: lvlName.locationNumericName = "x12"; break;
    case 1: lvlName.locationNumericName = "x11"; break;
    case 2: lvlName.locationNumericName = "x1"; break;
    case 3: lvlName.locationNumericName = "x2"; break;
    case 4: lvlName.locationNumericName = "x3"; break;                                             
    case 6: lvlName.locationNumericName = "x4"; break;
    case 7: lvlName.locationNumericName = "x5"; break;
    case 8: lvlName.locationNumericName = "x6"; break;
    case 9: lvlName.locationNumericName = "x7"; break;
    case 10: lvlName.locationNumericName = "x8"; break;
    case 11: lvlName.locationNumericName = "x9"; break;
    case 12: lvlName.locationNumericName = "x10"; break;
    case 13: lvlName.locationNumericName = "x20"; break;
    case 14: lvlName.locationNumericName = "x19"; break;
    case 15: lvlName.locationNumericName = "x13"; break;                                             
    case 16: lvlName.locationNumericName = "x14"; break;
    case 17: lvlName.locationNumericName = "x15"; break;
    case 18: lvlName.locationNumericName = "x16"; break;
    case 19: lvlName.locationNumericName = "x17"; break;
    case 20: lvlName.locationNumericName = "x18"; break;
    default:
        break;
        
}




var levelGeneratedName = lvlName.locationTypeName + " " + lvlName.locationNumericName + " " + lvlName.locationInLocationName + " planet" + " " + lvlName.locationName

console.log(levelGeneratedName);
}
GenerateLvlName();




