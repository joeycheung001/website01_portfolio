
function starAudio() {
    var starSound = document.getElementById('sound-star');
    starSound.play();
}

window.onresize = function() {
    var x = document.getElementById("dropdown-menu");
    var divWidth = window.innerWidth;

    if (divWidth<=700) {
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

function navDropdown() {
    var x = document.getElementById("dropdown-menu");
    if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
