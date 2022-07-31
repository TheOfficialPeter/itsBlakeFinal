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
	newBody.id = "newBody";
	title.id = "title";
	name.id = "name";
	click.id = "click";
	scroll.id = "scroll";

	// add styling
	click.innerText = "click";
	click.style = "font-family: mc; color: white; font-weight: 400; font-size: 3vw; line-height: 72px; letter-spacing: 0.45em; transform: translateY(100px); animation: scroll 2s infinite;";
	scroll.src = "scroll.png";

	newBody.style = "position: absolute; left: 0; right: 0; top: 0; bottom: 0; text-align: center; color: white; margin: 20px; opacity: 0; transition: all 1.5s";
	title.style = "font-size: 5vw; font-family: fuzzy; font-weight: 100;";
	name.style = "font-size: 10vw; font-family: mc; margin-top: -5%; color: rgba(200, 200, 100, 1);";

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
	var newBody = document.getElementById("newBody");
	newBody.id = "newBody";

	// fade out
	newBody.style.opacity = "0";
}

function addAbout() {
	setTimeout(function() {
		var newBody = document.getElementById("newBody");
		newBody.remove();

		var newBody = document.createElement("div"); 
		newBody.id = "newBody";
		newBody.style = "text-align: center; position: absolute; left: 0; top: 0; right: 0; bottom: 0; transition: all 1.5s;";

		var pageTitle = document.createElement("h1");
		var pageContent = document.createElement("h1");

		pageTitle.style = "color: white; opacity: 0; font-size: 7vw; font-family: fuzzy; text-align: center;";
		pageContent.style = "color: white; opacity: 0; font-size: 3vw; font-weight: 100; font-family: mc; text-align: center;";

		pageTitle.id = "aboutTitle";
		pageContent.id = "aboutContent";

		newBody.appendChild(pageTitle);
		newBody.appendChild(pageContent);
		document.body.appendChild(newBody);

		pageTitle.innerHTML = "Who am <font color='#F0FF93'>I</font>?";
		pageContent.style.marginLeft = "10px";
		pageContent.style.marginRight = "10px";
		pageContent.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

		pageTitle.style.transition = "all 2s";
		pageContent.style.transition = "all 2s";

		checkScreen();

		setTimeout(function() {
			pageTitle.style.opacity = "1";
			pageContent.style.opacity = "1";
		},100);
	},2000);
}

function removeAbout() {
	var newBody = document.getElementById("newBody"); 
	newBody.style.opacity = "0";
}

function addContact() {
	setTimeout(function() {
		var newBody = document.getElementById("newBody"); 
		newBody.remove();
		
		var newBody = document.createElement("div"); 
		newBody.id = "newBody";
		newBody.style = "text-align: center; position: absolute; left: 0; top: 0; right: 0; bottom: 0; transition: all 1.5s;";

		var pageTitle = document.createElement("h1");
		var pageContent = document.createElement("h1");

		pageTitle.style = "color: white; opacity: 0; font-size: 7vw; font-family: mc; text-align: center;";
		pageContent.style = "color: white; opacity: 0; font-size: 3vw; font-weight: 100; font-family: Arial; text-align: center;";

		pageTitle.id = "aboutTitle";
		pageContent.id = "aboutContent";

		newBody.appendChild(pageTitle);
		newBody.appendChild(pageContent);
		document.body.appendChild(newBody);

		pageTitle.innerHTML = "Contact Me";
		pageContent.style.marginLeft = "10px";
		pageContent.style.marginRight = "10px";
		pageContent.innerHTML = "<font color='#F0FF93'>Discord:<br/></font>ItzBlake#1470<br/><font color='#F0FF93'>Email:<br/></font>blake.contact.medias@gmail.com";

		pageTitle.style.transition = "all 2s";
		pageContent.style.transition = "all 2s";

		checkScreen();

		setTimeout(function() {
			pageTitle.style.opacity = "1";
			pageContent.style.opacity = "1";
		},100);

	},2000);
}

function main() {
	if (navDebounce == false) {
		navDebounce = true;
		
		currentPage += 1;
		console.log(currentPage);
		if (currentPage == 1) {
			removeIntro();
			addAbout();
		}
		else if (currentPage == 2) {
			removeAbout();
			addContact();
		}
		navDebounce = false;
	}
}

window.onload = addIntro();
window.onclick = function(e) {
	main();
};
