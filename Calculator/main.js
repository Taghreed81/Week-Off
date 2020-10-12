
var myNumbers = document.getElementsByClassName("give");
var myClear   = document.getElementById("clear");
var equal     = document.getElementById("eq");
var myValue   = document.getElementById("type");
 var x = myNumbers;

    for ( var i = 0; i < myNumbers.length; i++) {
    	myNumbers[i].onclick = function() {
    		myValue.value += this.value
    	}
    }

    myClear.onclick = function clear() {
    	myValue.value = "";
    }

    equal.onclick = function equal() {
    	if(myValue.value == ""){
    		myValue.placeholder = "Enter any number";
    	} else {
    	myValue.value = eval(myValue.value);
        }
    }