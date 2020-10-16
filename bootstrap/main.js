// $(".btn btn-primary").click(function(){
// 	if($("#exampleInputEmail1").val() === "" )
// 		alret("This field must be written");
// })
var email = document.getElementById("exampleInputEmail1");
var password= document.getElementById("exampleInputPassword1");

function check(){
	if(email.value.length > 9)
		alret('please write your email');
}
 if(password.value.length < 7){
		alert('Please fill up your Password');