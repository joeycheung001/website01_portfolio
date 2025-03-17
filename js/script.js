function navDropdown() {
    var x = document.getElementById("dropdown-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onresize = function() {
    var x = document.getElementById("dropdown-menu");
    x.style.display = "block";
}