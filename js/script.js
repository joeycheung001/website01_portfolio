
function starAudio() {
    var starSound = document.getElementById('sound-star');
    starSound.play();
}

function navDropdown() {
    var x = document.getElementById("dropdown-menu");
    if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

window.onresize = function() {
    var x = document.getElementById("dropdown-menu");
    x.style.display = "block";
}