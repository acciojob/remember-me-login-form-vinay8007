//your JS code here. If required.
const form = document.getElementById("loginForm");
const usernameInput  =document.getElementById("username");
const passwordInput  =document.getElementById("password");
const checkbox =document.getElementById("checkbox");
const existingBnt  =document.getElementById("existing");

const savedUser  =localStorage.getItem("username");
const savedPass =localStorage.getItem("password");

if(savedUser && savedPass){
	existingBnt.style.display= "block";
}

form.addEventListener("submit", function(e){
	e.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	alert(`Logged in as ${username}`);

	if(checkbox.checked){
		    localStorage.setItem("username", username);
            localStorage.setItem("password", password);
    } else{
		   localStorage.removeItem("username");
		   localStorage.removeItem("password");
	}
});

existingBnt.addEventListener("click", function(){
	const savedUser = localStorage.getItem("username");

	if(savedUser){
		alert(`Logged in as ${savedUser}`);
	}
})
