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
