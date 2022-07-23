var currentPage = 0;
var navDebounce = false;

function addIntro() {
	// add body off the next page
	var newBody = document.createElement("div");
	var title = document.createElement("h1");
	var name = document.createElement("h1");
	var click = document.createElement("h1");
	var scroll = document.createElement("img");

	// add inner Text
	title.innerText = "Hi. I'm";
	name.innerText = "Blake";
	newBody.id = "newBody";

	// add ids
	click.id = "click";
	scroll.id = "scroll";

	// add styling
	click.innerText = "click";
	click.style = "font-family: mc; color: white; font-weight: 400; font-size: 3vw; line-height: 72px; letter-spacing: 0.45em; transform: translateY(100px); animation: scroll 2s infinite;";
	scroll.src = "scroll.png";
	newBody.style = "position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center; color: white; margin: 20px; opacity: 0; transition: all 2s";
	title.style = "font-size: 10vw; font-family: fuzzy; font-weight: 100;";
	name.style = "font-size: 20vw; font-family: mc; margin-top: -100px; color: rgba(200, 200, 100, 1);";

	// render elements
	document.body.appendChild(newBody);
	newBody.appendChild(title);
	newBody.appendChild(name);
	newBody.appendChild(click);
	newBody.appendChild(scroll);

	// load new body
	setTimeout(function() {
		newBody.style.opacity = "1";
	},500);
}

function removeIntro() {
	console.log("hello");
	var newBody = document.getElementById("newBody");

	// fade out
	newBody.style.opacity = "0";

	// wait for animation to complete
	setTimeout(function() {
		newBody.style.display = "none";

		// add new elements
		newBody = document.createElement("div"); 
		newBody.style = "text-align: center; position: absolute; left: 0; top: 0; right: 0; bottom: 0; transition: all 2s;";
		
		// add elements to new body
		var pageTitle = document.createElement("h1");
		var arrow = document.createElement("img");
		var neon1 = document.createElement("h1");
		var neon2 = document.createElement("h1");
		var plus = document.createElement("img");
		
		// render elements
		newBody.appendChild(pageTitle);
		newBody.appendChild(arrow);
		newBody.appendChild(neon1);
		newBody.appendChild(neon2);
		newBody.appendChild(plus);
		document.body.appendChild(newBody);
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
			removeIntro();
			addAbout();
		}
		else if (currentPage == 2) {
			removeAbout();
			addWork();
		}
		else if (currentPage == 3) {
			removeWork();
			addContact();
		}
		else if (currentPage == 4) {
			removeContact();
			
			// go to starting page
			currentPage = 1;
		}
		navDebounce = false;
	}
}

window.onload = addIntro();
window.onclick = function(e) {
	main();
};
