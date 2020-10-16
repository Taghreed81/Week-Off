var email = document.getElementById("exampleInputEmail1");
var password= document.getElementById("exampleInputPassword1");

function check(){
	if(email.value.length === "")
		alret('please write your email');
}
 if(password.value.length < 7){
		alert('Please fill up your Password');

	$('.btn btn-primary').click(function(){
	if (email.val() === x || password.val() === y ){
		$(".signin").hide();
		$(".next-page").show();
	 	
 }
