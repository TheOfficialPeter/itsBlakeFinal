function checkScreen() {
	// check mobile
	if (window.innerWidth <= 700) {
		// check for info page
		//var about1 = document.getElementById("about1");
		//var about2 = document.getElementById("about2");
		var logo = document.getElementById("logo");
		var click = document.getElementById("click");
		var scroll = document.getElementById("scroll");

		scroll.style.width = "10%";
		click.style.fontSize = "5vw";
		logo.style.width = "50%";
	}
}

window.onload = checkScreen;
window.onresize = checkScreen;
