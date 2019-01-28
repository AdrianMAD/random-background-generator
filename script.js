var css = document.querySelector("h2");
var css2 = document.querySelector("h3");
var css3 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css2.textContent = "Current CSS background: "+body.style.background + ";";
}

css.textContent ="Initial CSS background: "+"background: linear-gradient(to right, "+color1.value+", "+color2.value+");";    //display first color combination

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColor); // on click modify the background using the new random hex colors

function getRndInteger(min, max) { //generate a random number
  return Math.floor(Math.random() * (max - min)) + min;
}

function hexNumber (){ //generate a hex number 
	return getRndInteger(0, 256).toString(16)+getRndInteger(0, 256).toString(16)+getRndInteger(0, 256).toString(16);
}
function setRandomColor () { //modify the values with the new hex number
color1.value="#" + hexNumber();
color2.value="#" + hexNumber();
setGradient();
}


