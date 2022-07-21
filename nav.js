var currentPage = 0;
var navDebounce = false;
var navDelay = "5s";

// front-page elements
var body2 = document.getElementById("body2");

function addIntro() {
	body2.style.animation = "unload 1s";

	//wait for animation to finish
	setTimeout(function() {
		body2.style.opacity = "0";
	}, 1000);

	// temp remove the body2 2000(animation1) + 2000(animation2) = 4000
	setTimeout(function() {
		body2.style.display = "none";

		// add body off the next page
		var body3 = document.createElement("div");
		body3.style = "text-align: center; position: absolute; left: 0; top: 0; right: 0; bottom: 0; transition: all 2s;";
		body3.id = "body3";

		// add spacing from top
		body3.style.paddingTop = "100px";

		// add next page widgets
		var about1 = document.createElement("img");
		var about2 = document.createElement("img");

		about1.src = "about1.png";
		about2.src = "about2.png";

		// fix layers + add spacing from top 350px instead of 250px
		about2.style = "position: absolute; left: calc(50% - 1031.5px/2 - 25px); top: 350px;";

		body3.appendChild(about1);
		body3.appendChild(about2);
		document.body.appendChild(body3);

		// add opacity animation
		about1.style.animation = "load 2s";
		about2.style.animation = "load 5s";
		
		// add smoothness to animation
		about2.style.transition = "all .2s";

		// wait for animation to finish then add flicker effect
		setTimeout(function() {
			about2.style.animation = "flicker 1s 1s infinite";
		}, 2500);
	}, 1000);
	
}

function removeIntro() {

}

function addWork() {

}

function removeWork() {

}

function addContact() {

}

function removeContact() {

}

function main() {
	if (navDebounce == false) {
		navDebounce = true;

		currentPage += 1;
		if (currentPage == 1) {
			addIntro();
		}
		else if (currentPage == 2) {
			removeIntro();
			addWork();
		}
		else if (currentPage == 3) {
			removeWork();
			addContact();
		}
		else if (currentPage >= 4) {
			removeContact();
			addIntro();

			// go to starting page
			currentPage = 1;
		}

		navDebounce = false;
	}
}

window.onclick = function(e) {
	main();
};
