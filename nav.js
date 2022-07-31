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
		pageContent.style = "background-color: rgba(0,0,0,.25); outline: 2px solid rgba(255,255,255,.25); padding: 20px; color: #F0FF93; opacity: 0; font-size: 3vw; font-weight: 100; font-family: mc; text-align: center;";

		pageTitle.id = "aboutTitle";
		pageContent.id = "aboutContent";

		newBody.appendChild(pageTitle);
		newBody.appendChild(pageContent);
		document.body.appendChild(newBody);

		pageTitle.innerHTML = "Who<font color='#F0FF93'>?</font>";
		pageContent.style.marginLeft = "5%";
		pageContent.style.marginRight = "5%";
		pageContent.innerText = "Hello ! My name is Blake, I'm an Experienced Modeller & Builder in Roblox & Blender. I'm always free and accept only Robux as a Payement method. Before contacting me, please understand that I work with an upfront Payement to prevent getting scammed or wasting my time. The upfront payements can go from 30% to 50%. BUT! If it's a very big commission 10K+ it'll only be 20% of the Payement. Thank you for reading this ! ";

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

function addWork() {
	setTimeout(function() {
		var newBody = document.getElementById("newBody"); 
		newBody.remove();
		
		var newBody = document.createElement("div"); 
		newBody.id = "newBody";
		newBody.style = "text-align: center; position: absolute; left: 0; top: 0; right: 0; bottom: 0; transition: all 1.5s;";
		
		document.body.style.overflow = "visible";
		document.body.style.height = "200vw";

		newBody.style.height = "200vw";
		
		var images = ["1.PNG", "2.PNG", "3.PNG", "4.PNG"];

		var pageTitle = document.createElement("h1");
		var pageContent = document.createElement("h1");

		pageTitle.style = "color: white; opacity: 0; font-size: 7vw; font-family: mc; text-align: center;";
		pageContent.style = "color: white; opacity: 0; font-size: 3vw; font-family: Quicksand; text-align: center; background-color: rgba(0,0,0,.25); outline: 2px solid rgba(255,255,255,.25); padding: 20px; margin-left: 5%; margin-right: 5%;";

		pageTitle.id = "aboutTitle";
		pageContent.id = "aboutContent";

		for (var i = 0; i < images.length; i++) {
			var image = document.createElement("img");
			image.src = images[i];
			image.style = "height: 30vw; padding: 20px; border-radius: 50px; transition: all .2s";

			pageContent.appendChild(image);
		}

		newBody.appendChild(pageTitle);
		newBody.appendChild(pageContent);
		document.body.appendChild(newBody);

		pageTitle.innerHTML = "Gallery";

		pageTitle.style.transition = "all 2s";
		pageContent.style.transition = "all 2s";

		checkScreen();

		setTimeout(function() {
			pageTitle.style.opacity = "1";
			pageContent.style.opacity = "1";
		},100);

	},2000);
}

function removeWork() {
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
		
		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
		
		var pageTitle = document.createElement("h1");
		var pageContent = document.createElement("h1");

		pageTitle.style = "color: white; opacity: 0; font-size: 7vw; font-family: mc; text-align: center;";
		pageContent.style = "color: white; opacity: 0; font-size: 3vw; font-family: Quicksand; text-align: center;";

		pageTitle.id = "aboutTitle";
		pageContent.id = "aboutContent";

		newBody.appendChild(pageTitle);
		newBody.appendChild(pageContent);
		document.body.appendChild(newBody);

		pageTitle.innerHTML = "Contact Me";
		pageContent.style.marginLeft = "10px";
		pageContent.style.marginRight = "10px";
		pageContent.innerHTML = "<font color='#F0FF93'>Discord:<br/></font>ItzBlake#1470<br/><font color='#F0FF93' family='mc'>Email:<br/></font>blake.contact.medias@gmail.com";

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
			addWork();
		}
		else if (currentPage == 3) {
			removeWork();
			addContact();
		}
		navDebounce = false;
	}
}

window.onload = addIntro();
window.onclick = function(e) {
	main();
};
