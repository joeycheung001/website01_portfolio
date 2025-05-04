function starAudio() {
    var starSound = document.getElementById('sound-star');
    starSound.play();
}

window.onresize = function() {
    const dropdown = document.getElementById("dropdown-menu");
    var divWidth = window.innerWidth;

    if (divWidth<=700) {
        dropdown.style.display = "none";
        bar1.style.rotate = "0deg";
        bar2.style.opacity = "100";
        bar3.style.rotate = "0deg";
    }else{
        dropdown.style.display = "block";
    }
}

function navDropdown() {
    const dropdown = document.getElementById("dropdown-menu");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");

    if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
        bar1.style.rotate = "-45deg";
        bar2.style.opacity = "0";
        bar3.style.rotate = "45deg";
	} else {
		dropdown.style.display = "none";
        bar1.style.rotate = "0deg";
        bar2.style.opacity = "100";
        bar3.style.rotate = "0deg";
	}
}