var cake_prices = new Array();
cake_prices["Round6"]=20;
cake_prices["Round8"]=25;
cake_prices["Round10"]=35;
cake_prices["Round12"]=75;

// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice()
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
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice = cake_prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

var filling_prices= new Array();
filling_prices["None"]=0;
filling_prices["Lemon"]=5;
filling_prices["Custard"]=5;
filling_prices["Fudge"]=7;
filling_prices["Mocha"]=8;
filling_prices["Raspberry"]=10;
filling_prices["Pineapple"]=5;
filling_prices["Dobash"]=9;
filling_prices["Mint"]=5;
filling_prices["Cherry"]=5;
filling_prices["Apricot"]=8;
filling_prices["Buttercream"]=7;
filling_prices["Chocolate Mousse"]=12;

//This function finds the filling price based on the
//drop down selection
function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
    var selectedFilling = theForm.elements["filling"];

    //set cakeFilling Price 
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
    var candlePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    //finally we return the candlePrice
    return candlePrice;
}

//inscriptionPrice() finds the candles price based on a check box selection
function inscriptionPrice()
{
    var inscriptionPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includeinscription"];

    //If they checked the box set candlePrice to 5
    if(includeinscription.checked==true)
    {   
        inscriptionPrice=20;
    }   
    //finally we return the candlePrice
    return inscriptionPrice;
} 

function getQuantity()
{
    //Assume form with id="theform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
    if(howmany == 0)
    {
	howmany = 1;
    }
return howmany;
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() +
                          candlesPrice() + inscriptionPrice();
    cakePrice = cakePrice * getQuantity();

    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Cake $"+cakePrice;

}
