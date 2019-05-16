/*Access the 4 variables we need to alter*/
var css_printed = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css_printed);
console.log(color1);
console.log(color2);

document.onload = setGradient(); // Shows the initial red/green CSS code

//Function setGradient() changes the background gradient
function setGradient(){
    
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", " 
        + color2.value 
        + ")";

    css_printed.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);



