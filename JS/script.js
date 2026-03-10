// Input Elements 

var nameInput = document.getElementById("nameInput");
var bioInput = document.getElementById("bioInput");
var imgInput = document.getElementById("imgInput");
var colorInput = document.getElementById("colorInput");
var updateButton = document.getElementById("updateButton");

// Display Elements

var displayName = document.getElementById("displayName");
var displayBio = document.getElementById("displayBio");
var displayImage = document.getElementById("displayImage");
var card = document.getElementById("profileCard");

updateButton.onclick = function(){

	var newName = nameInput.value;
	var newBio = bioInput.value;
	var newImgURL = imgInput.value;
	var newColor = colorInput.value;

	displayName.innerHTML = newName;
	displayBio.innerHTML = newBio;
	displayImage.src = newImgURL;
	card.style.backgroundColor = newColor;

};