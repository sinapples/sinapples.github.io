 //Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var cake_prices = new Array();
 cake_prices["HP"]="Poni Wilds, Surfing ambush (Poni Island)";
 cake_prices["Attack"]="Route 4 (Akala Island)";
 cake_prices["Defense"]="Eggy Island (Poni Island) ";
 cake_prices["Sp.Attack"]="Hau'oli Cemetary (Route 2, Melemele Island)";
 cake_prices["Sp.Defense"]="Hano Beach, Surfing ambush (east of Hano Grand Resort)";
 
 cake_prices["Speed"]="Verdant Cavern, dust cloud ambush [Moon only] (Route 2, Melemele Island)";


 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var filling_prices= new Array();
 filling_prices["HP"]="Wailmer";
 filling_prices["Attack"]="Lillipup, Pikipek, Mudbray, Yungoos, Grubbin ";
 filling_prices["Defense"]="Exeggcute";

 filling_prices["Sp.Attack"]="Gastly";
 filling_prices["Sp.Defense"]="Tentacool";
 filling_prices["Speed"]="Rattata";





var macho = 1;	
var  evPreStat = 256;
	
var total = 25; 
var trainedStat = "Trained Stat";



function getLocation(){



    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
 
  var  pokemon = filling_prices[selectedFilling.value];

  var  location = cake_prices[selectedFilling.value];


  var divobj4 = document.getElementById('Location');
    divobj4.style.display='block';
      divobj4.innerHTML = "<p>To Train go to <b>"+ location + " </b>and fight  <b>" + pokemon + "</b>  </p>";

}


// getItem() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getItem()
{  
    var cakeSizePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake = theForm.elements["selectedcake"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake.length; i++)
    {
        //if the radio button is checked
        if(selectedCake[i].checked)
        {
            
	  if (selectedCake[i].value == 2 ) {
		setMacho(2);
		return 0;
	}
	if (selectedCake[i].value == 0 ) {
		setMacho(1);
		return 0;
	}
            return 4;
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

function setMacho(val)
{  

     macho = val;
}

function getMacho()
{  

    return macho;
}

//getcakeform() finds the candles price based on a check box selection
function getPokerus()
{
    var candlePrice=1;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["pokerus"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=2;
    }
    //finally we return the candlePrice
    return candlePrice;
}

function getMaxStat()
{
  
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["maxStat"];

return 252;
   // return includeCandles.value;
}

        
function calculateTotal()
{
    var baseEV = 1;
     evPreStat = getMaxStat();
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = Math.ceil(evPreStat/  (  ( ( getItem() + baseEV ) * getMacho() *getPokerus()*2  ) )  );
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
        var divobj2 = document.getElementById('button');
    divobj2.style.display='block';
    divobj.innerHTML = "<p>You need to battle <b>"+cakePrice + "</b> Pokemon</p>";
    total = cakePrice;
fight()
}

        
function fight()
{
     

   
    //display the result
    var divobj = document.getElementById('remaining');
    divobj.style.display='block';
    if (total > 0 ){

    divobj.innerHTML = "<p> <b>" +total + "</b> Pokemon left to fight</p>";
    total = total-1;}
    else {
    divobj.innerHTML = "<p> <b>"+ trainedStat + "</b> is maxed out!</p>";


}
}



function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
        var divobj2 = document.getElementById('button');
    divobj2.style.display='none';







}