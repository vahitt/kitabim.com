document.getElementById('close').style.display = "none";
function checkSize(size){
	if(size.matches){
		document.getElementById('Navbar__Items').style.display = "flex";
		document.getElementById('nav').style.display = "flex";			
	}
	else{
		document.getElementById('Navbar__Items').style.display = "flex";
		document.getElementById('nav').style.display = "flex";
		document.getElementById('close').style.display = "flex";
		document.getElementById('open').style.display = "none";
	}
}
function openNav() {
	var x = document.getElementById('open').style.display = "none";

	if(x == "none"){
		document.getElementById('Navbar__Items').style.display = "flex";
		document.getElementById('nav').style.display = "flex"; 				
		document.getElementById('close').style.display = "flex"
	}
}
function closeNav() {
	var y = document.getElementById('close').style.display;
	if(y == "flex"){
		document.getElementById('Navbar__Items').style.display = "none"; 
		document.getElementById('nav').style.display = "none"; 
		document.getElementById('close').style.display = "none";
		document.getElementById('open').style.display = "flex";
	}
}
var size = window.matchMedia("(min-width: 769px)");
checkSize(size);
size.addListener(checkSize)

		