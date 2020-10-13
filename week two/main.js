// //week one day 1
// //EX4
// function emptyArray() {
// 	var new_array = [];
// 	return new_array;
// }
// //EX5
// function numbersArray() {
// 	var new_array = [1,2,3,4,5];
// 	return new_array;
// }
// //EX6
// function booleansArray() {
// 	var new_array = [true, true, true];
// 	return new_array;
// }
// //EX7
// function stringsArray() {
// 	var new_array = ["Tag" , "Ali"];
// 	return new_array;
// }
// //EX8
// function arrayLength(array) {
// return array.length;
// }
// //EX9
// function firstElement (array) {
// 	return array[0];
// }
// //EX10
// function lastElement(array) {
// 	return array[array.length -1];
// }
// //EX11
// function getNthElement(array, num) {
// 	return array[num];
// }
// //EX12
// function push(array, elm) {
// 	 array.push(elm);
// 	 return array;
// }
// //EX13
// function pop(array) {
// 	array.pop();
// 	return array;
// }
// //EX14
// function unshift(array, elm) {
// 	array.unshift(elm);
// 	return array;
// }
// //EX15
// function shift(array) {
// 	array.shift();
// 	return array;
// }
// //EX16
// function reassignLast(array, elm) {
// 	var last = array.length -1;
// 	 array[last] = elm;
// 	 return array;
// }
// //EX17
// function reassignNthElement(array, num, val) {
// 	array[num]= val;
// 	return array;
// }
// //EX18
// function indexOf(array, elm) {
// 	return array.indexOf(elm);
// }
// //EX19
// function slice(array,num1, num2) {
// 	return array.slice(num1, num2);
// }
// //EX20
// function addElement(array, i, elm) {
// 	array.splice(i,0, elm);
// 	return array;	
// }

//w2d2
//EX1
function arrayFor(array) {
	for (var x = 0; x < array.length; x++){
		return array;
	}
}
//EX3
function sum(numbers) {
	var sum = 0;
	for (var x = 0; x < numbers.length; x++) {
		sum = sum + numbers[x];	
	}
	return sum;
}
//EX4
function sumEveryOther(numbers) {
	var sum = 0;
	for(var x =0; x <numbers.length; x+=2){
		sum = sum + numbers[x];
	}
	return sum;
}
//EX5
function sumStartAt(numbers, index) {
var sum =0;
     for(var x = index; x < numbers.length; x++){
	sum = sum + numbers[x];
      }
     return sum;
}
//EX6
function sumUntil(numbers, index) {
	var sum =0;
	for (var x = 0; x < numbers[index]; x++){
		sum = sum + numbers[x];
	}
	return sum;
}
//EX7
function subtractReverse(numbers) {
	var sub =numbers.length-1 ;
	for(var x = numbers.length-2 ; x > 0 ; x--){
	sub = sub - numbers[x];
     }
     return sub;
}
//EX8
function product(array) {
	var pro = 1;
	for( var x = 0; x < array.length; x++){
		pro = pro * array[x];
	}
	return pro;
}
//EX9
function average(array) {
		var sum = 0;
	for(var x = 0; x < array.length ; x++){
		sum = sum + array[x];
	}
	var avarage = sum/array.length;
	return avarage;
}
