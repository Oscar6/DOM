var button = document.querySelector("button");
var isPurple = false;

// OTHER CALL OUTS
// document.querySelector("body");
// document.getElementByTagName("body")[0]

// COLOR CHANGER LOGIC
// If white
	//make it purple
//Else
	//make it white

//DIFFERENT SOLUTIONS

// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "green";
// 		isPurple = false;
// 	} else {
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// });

//Short If Statement after else statement
//isPurple = !isPurple;
// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "green";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})