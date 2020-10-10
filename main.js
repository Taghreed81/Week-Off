 //WEEK1 DAY1
 //EX1
 function myFirstFunction(){
 }
 //EX2
 function helloWorld(){
 	  console.log("hello world");
 }
 //EX3
function returnFive(){
	return 5;
}
//EX4	
function helloWorldAgain(){
	return "hello World Again";
}
//EX5
function returnParameter(paremeter){
 return paremeter;
}
//EX6
function add(num1, num2){
return num1 + num2;
}
//EX7
function subtract(num1, num2){
return num1 - num2;
}

//EX8
function multiply(num1, num2){
return num1 * num2;
}
//EX9
function stringLength(str){
return str.length;
}

//EX10
function concatTwoStrings(str1, str2){
	return str1 + str2;
}
//EX11
function fullName(firstName, lastName){
	return firstName + " " + lastName;
}

function square(num){
	return num * num;
}
//EX12
function cube(num){
return num * num * num;
}
//EX13
function charAtIndex(str, num){
	return str.charAt(num);
}
//EX14
function addFourNums(n1, n2, n3, n4){
	return n1 + n2 + n3 + n4;
}
//EX15
function perimeterRect(w ,l){
 var p = 2 * l + 2 * w;
 return p;
}
//EX16
function areaRect(w, l){
	var A = w * l;
	return A;
}
//EX17
function perimeterTriangle(l1, l2, l3){
	var p = l1 + l2 + l3;
	return p;
}
//EX18
function areaTraingle(b, h){
var A = (1/2) * b * h;
return A;
}

//EX19
function tripleArea(w, l) {
var A = w * l;
return A * 3;
}

//Week1 day 2
//EX6
function opposite(boolean){
	return !boolean;
}

//EX7
function greaterThan5(num1, num2){
if(num1 > 5 || num2 > 5){
	return true;
}else{
	return false;
}

//EX8
function allGreaterThan5(num1, num2){
if ( num1 && num2 > 5){
	return true;
}
if (num1 && num2 < 5) {
return false;
}
}
//EX9
function largerThan5AndLessThan20(num) {
	if(num > 5 && num < 20){
		return true;
	}else{
		return false;
	}
}
//EX10
function not6AndLessThan10(num) {
	if( num !== 6 && num < 10){
		return true;
	}else {
		return false;
	}
}
//EX11

function largerThan3AndLessThan18(n1, n2, n3) {
	if ((n1 && n2 && n3 > 3) && (n1 && n2 && n3 <18)){
		return true;
	} else{
		return false;
	}
}
//EX12
function cloudyAndRainy(str1, str2) {
	var str1 = "cloudy";
	var str2 = "rainy";
	if(str1 && str2){
		return true;
	} else{
		return false;
	}
}
//EX13
function weatherActivities(str) {
var type1 = "cloudy";
var type2 = "rainy";
var type3 = "cold";
var type4 = "sunny";
if(str === type1){
	return "wear a jacket";
}else if( str === type2){
	return "take an umberlla";
}else if( str === type3){
	return "take care of the snow";
}else if(str === type4){
	return "take a sunglass";
}
}
//EX14
function evenAndGreaterThan7(num) {
	if( num % 2 ===0 && num > 7){
		return true;
	} else{
		return false;
	}
}
//EX15
function areValidCredentials(name, pass) {
	if((name.length > 3) && (pass.length >= 8)) {
		return true;
	} else {
		return false;
	}
}
//EX16
function findMinLengthOfThreeWords(w1, w2, w3) {
	var w1 = w1.length;
	var w2 = w2.length;
	var w3 = w3.length;

	if(w1 < w2 && w1 < w3){
		return w1;
	}else if ( w2 < w1 && w2 < w3){
		return w2;
	}else if(w3 < w1 && w3 < w2){
		return w3;
	}
}
//EX17
function findMaxLengthOfThreeWords(w1, w2, w3) {
	var w1 = w1.length;
	var w2 = w2.length;
	var w3 = w3.length;
	if(w1 > w2 && w1 > w3){
		return w1;
	}else if ( w2 > w1 && w2 > w3){
		return w2;
	} else if( w3 > w1 && w3 > w2){
		return w3;
	}
}
//EX18
function guessMyNumber(num) {
	var x =  Math.floor(Math.random(num));
	if ( num === x){
		return "You guessed my number!";
	} else{
		return "Nop, That wan't it";
	}
}
//W1D5  iteration with while loop
//EX1
function sumOfN( num){
	var sum = 0;
	while ( num > 0){
		sum = sum + num;
		num = num -1
	}
return sum;
}
//EX2
function factorialOfN(num) {
	var x = 1;
	while (num > 0){
		x = x * num;
		num = num-1;
		x++;
	}
	return x;
}
