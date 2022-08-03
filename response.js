function checkScreen() {
	var click = document.getElementById("click");
	var scroll = document.getElementById("scroll");
	if (window.innerWidth <= 800) {
		
	}

	if (window.innerWidth <= 700) {
		// check for info page
		//var about1 = document.getElementById("about1");
		//var about2 = document.getElementById("about2");
		
		var title = document.getElementById("title");
		var name = document.getElementById("name");

		var title2 = document.getElementById("title2");
		var content = document.getElementById("pageContent");

		var aboutTitle = document.getElementById("aboutTitle");
		var about = document.getElementById("aboutContent");

		var workTitle = document.getElementById("workTitle");
		
		if (workTitle !== null) {
			workTitle.style.fontSize = "10vw";
		}

		if (name !== null && title !== null) {
			// change font size of title page
			title.style.fontSize = "10vw";
			name.style.fontSize = "20vw";
		}

		if (title2 !== null && content !== null){
			title2.style.fontSize = "10vw";
			content.style.fontSize = "5vw";
		}

		if (aboutTitle !== null && about !== null){
			aboutTitle.style.fontSize = "10vw";
			about.style.fontSize = "4vw";
		}

		if (scroll !== null && click !== null){
			scroll.style.width = "15%";
			click.style.fontSize = "7vw";
		}
	}

}

window.onload = checkScreen;
window.onresize = checkScreen;
