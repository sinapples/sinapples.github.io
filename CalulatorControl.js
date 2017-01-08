
//Used to associate a stat and a location
 var statLocationArray = new Array();
 statLocationArray["HP"]="<b>Poni Wilds </b> in Poni Island and get surf ambushed";
 statLocationArray["Attack"]="<b>Route 4</b> in Akala Island";
 statLocationArray["Defense"]="<b>Exeggutor Island</b> in Poni Island ";
 statLocationArray["Sp.Attack"]="<b>Brooklet Hill</b> in Akala Island";
 statLocationArray["Sp.Defense"]="<b>Hano Beach</b> in Akala Island and get surf ambushed";
 
 statLocationArray["Speed"]="<b>Route 3</b> in Melemele Island";


 
//Used to associate a stat and a pokemon
 var statPokemonArray= new Array();
 statPokemonArray["HP"]="<b>Wailmer</b>  lvl ~40";
 statPokemonArray["Attack"]="<b>Lillipup, Pikipek, Mudbray, Yungoos, or Grubbin</b> lvl ~10";
 statPokemonArray["Defense"]="<b>Exeggcute </b> lvl 40~";

 statPokemonArray["Sp.Attack"]="<b>Psyduck</b>  lvl ~15";
 statPokemonArray["Sp.Defense"]="<b>Tentacool</b> lvl ~24";
 statPokemonArray["Speed"]="<b> Spearow or Cutiefly</b> lvl ~12";




//Constants  
var macho = 1;	
var  evPreStat = 256;	
var total = 25; 
var trainedStat = "stat";
var sosModifier = 2;

//Variables 
var fightStartBoolean = false;


function getLocation(){



   
    var form = document.forms["evTrainingForm"];

    var selectedStat = form.elements["stat"];
    var divobj4 = document.getElementById('Location');

    if (selectedStat.value == "select"){
        trainedStat =  "stat";
        divobj4.style.display='none';
        return;
    }
    var  pokemon = statPokemonArray[selectedStat.value];

    var  location = statLocationArray[selectedStat.value];

    trainedStat = selectedStat.value;
 
    divobj4.style.display='block';
    divobj4.innerHTML = "<p>Go to <br>"+ location + " <br>to fight  <br>" + pokemon + "  </p>";

}



function getItem() {  


    var theForm = document.forms["evTrainingForm"];
    var heldItem = theForm.elements["heldItem"];
    //Here since there are 4 radio buttons heldItem.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < heldItem.length; i++) {

        //if the radio button is checked
        if(heldItem[i].checked) {
            
	       if (heldItem[i].value == "macho" ) {
		         setMacho(2);
		        return 0;
            }
             if (heldItem[i].value == "none" ) {
                setMacho(1);
		        return 0;
            }
             if (heldItem[i].value == "power" ) {
                setMacho(1);
                return 8;
            }
        }
       
    }
     return 0;

}

function setMacho(value) {  
     macho = value;
}

function getMacho() {  

    return macho;
}

//getevTrainingForm() finds the candles price based on a check box selection
function getPokerus() {
    
    var pokerusValue=1;

    var form = document.forms["evTrainingForm"];
    var pokerusBoolean = form.elements["pokerus"];

    if(pokerusBoolean.checked==true){
        pokerusValue=2;
    }

    return pokerusValue;
}

function getMaxStat() {
  


    return 252;
  
}

        
function calculateTotal() {
    var baseEV = 1;
    evPerStat = getMaxStat();


    //Formula to calculate EVs 
    total = Math.ceil(evPerStat/  (  ( ( getItem() + baseEV ) * getMacho() *getPokerus() * sosModifier  ) )  );
    
    //display the result
    var output = document.getElementById('totalPrice');
    output.style.display='block';
    output.innerHTML = "<p>You need to battle <b>"+total + "</b> Pokemon</p>";
    
    var output2 = document.getElementById('fightButton');
     var divobj = document.getElementById('remaining');
            divobj.style.display='none';
       output2.style.display='inline';
     output2.innerHTML = "Start";
   fightStartBoolean = false;

    fight();
}

        
function fight() {
     var output2 = document.getElementById('fightButton');
    var divobj = document.getElementById('remaining');
    if (fightStartBoolean == true){
        output2.innerHTML = "Defeated";

        //display the result
   
        divobj.style.display='block';

    

         
          if (total == 2) {
             var koBoth= "<p>Knockout both Pokemon";
            divobj.innerHTML = koBoth+ "<br> <b>" +total + "</b> Pokemon left to fight</p>";
             total = total-1;
         }   
         else if (total > 0 ){
             divobj.innerHTML = "<p> <b>" +total + "</b> Pokemon left to fight</p>";
             total = total-1;
         }  

        else if (total == 0){
                divobj.innerHTML = "<p> Congrats!<br> Your <b>"+ trainedStat + "</b> is maxed out!</p>";
                output2.innerHTML = "Restart";
                total = total-1;

            }
        else if (total < 0) {
                calculateTotal() ;
        }


    }
    else {
        fightStartBoolean = true;
     

    }
}



function hideElements() {

    
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
    
    var divobj2 = document.getElementById('fightButton');
    divobj2.style.display='none';





}