var currentPage = 0;
var navDebounce = false;

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
		var newBody = document.createElement("div");
		var title = document.createElement("h1");
		var name = document.createElement("h1");
	
		// add inner Text
		title.innerText = "Hi. I'm";
		name.innerText = "Blake";

		// add styling
		newBody.style = "position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center; color: white; margin: 20px; opacity: 0; transition: all 2s";
		title.style = "font-size: 10vw; font-family: fuzzy; font-weight: 100;";
		name.style = "font-size: 20vw; font-family: mc; margin-top: -100px; color: rgba(200, 200, 100, 1);";

		// render elements
		document.body.appendChild(newBody);
		newBody.appendChild(title);
		newBody.appendChild(name);
		newBody.appendChild(document.getElementById("click"));
		newBody.appendChild(document.getElementById("scroll"));

		// load new body
		setTimeout(function() {
			newBody.style.opacity = "1";
		},500);
	}, 1000);
}

function removeIntro() {
	console.log("hello");
	var body3 = document.getElementById("body3");

	// fade out
	body3.style.opacity = "0";

	// wait for animation to complete
	setTimeout(function() {
		body3.style.display = "none";

		// add new elements
		var body4 = document.createElement("div"); 
		body4.style = "text-align: center; position: absolute; left: 0; top: 0; right: 0; bottom: 0; transition: all 2s;";
		
		// add elements to new body
		var pageTitle = document.createElement("h1");
		var arrow = document.createElement("img");
		var neon1 = document.createElement("h1");
		var neon2 = document.createElement("h1");
		var plus = document.createElement("img");
		
		// render elements
		body4.appendChild(pageTitle);
		body4.appendChild(arrow);
		body4.appendChild(neon1);
		body4.appendChild(neon2);
		body4.appendChild(plus);
		document.body.appendChild(body4);
 	}, 5000);
}

function addAbout() {

}

function removeAbout() {

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
			addAbout();
		}
		else if (currentPage == 3) {
			removeAbout();
			addWork();
		}
		else if (currentPage == 4) {
			removeWork();
			addContact()
		}
		else if (currentPage >= 5) {
			removeContact();
			
			// go to starting page
			currentPage = 1;
		}

		navDebounce = false;
	}
}

window.onclick = function(e) {
	main();
};
