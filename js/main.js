// alert("you found me");
var loginForm = document.querySelector("#loginForm");
var email = document.querySelector("#email");

function submitForm() {

	emailValue = email.value;

	if(emailValue.length < 6){
		alert("Invalid email")
		console.log(emailValue);
		return false;
	}
	else
	{
		alert("login successful");
		email.value = " ";
	}
	
}

loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	return submitForm();
})