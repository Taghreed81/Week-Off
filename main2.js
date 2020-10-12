var myNumbers = document.getElementbyClassName("give"),
    myClear   = document.getElementbyId("clear"),
    equal     = document.getElementbyId("eq"),
    myValue   = document.getElementbyId("type");

    for ( var i = 0; i < myNumbers.length; i++) {
    	myNumbers[i].onclick = function() {
    		myValue.value = this.value
    	}
    }

    // myClear.onclick = function clear() {
    // 	myValue.value = "";
    // }

    // equal.onclick = function equal() {
    // 	// if(myValue.value == ""){
    // 	// 	myValue.placeholder = "Enter any number";
    // 	// } else {
    // 	myValue.value = eval(myValue.value);
    //     }
    
