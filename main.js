// It is always helpful to use comments in your code!

//select the parent menu element
const main_menu = document.getElementById("main-menu").children;

console.log(main_menu);

var sub_menu = document.getElementsByClassName("sub-menu");

console.log(sub_menu);


function magic() {
	var sub_menu = document.getElementsByClassName("sub-menu");

	var sub_menu = sub_menu[1];
	sub_menu.classList.toggle("open");

	console.log(sub_menu);
}

document.addEventListener("mouseover", magic);






