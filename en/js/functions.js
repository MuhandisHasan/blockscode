// Super Variables

var loopState = 1; // To be used in Function to add codes to workspace
var loopCodeList = []; // List Code to looped

var finishes = document.getElementById("finish");

console.log(finishes);

 // Finish block means block number that have finish line
var finishB;

// Usable block left

var usableLeft = +document.getElementById('block-left').dataset.use;

var blockLeftCon = document.getElementById('block-left-con');

// -------------------


var car = document.getElementById("car");
var wall = document.getElementsByClassName("wall");

// Function to get position of an element

function getPosition( element ) {
    var rect = element.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top
    };
}

// Function to place objects when page loaded
function placeObjects(position,facing)
{

	// Placing wall

	var i = 0;

  while (i<wall.length)
  {
  	// Getting value of data-pos

   	let block = wall[i].dataset.pos;

   	// Getting block position with data-pos value

   	let blockpos = getPosition(document.getElementById(block));

   	wall[i].style.top = blockpos.top + "px";
   	wall[i].style.left = blockpos.left + "px";

   	i++;

  }

  // Placing finish line

  // Getting value of data-pos

  // Getting block position with data-pos value

	finishB = finish.getAttribute('data-pos');

  var finishPos = getPosition(document.getElementById(finishB));

  finish.style.top = finishPos.top + "px";
  finish.style.left = finishPos.left + "px";

	// Placing car 

	let blockId = "b"+position;

	console.log(facing);


	if (facing == "up") {
		car.style.transform = 'rotate('+90+'deg)';
	}else if (facing == "down") {
		car.style.transform = 'rotate('+270+'deg)';
	}else if (facing == "left") {
		car.style.transform = 'rotate('+0+'deg)';
	}else if (facing == "right") {
		car.style.transform = 'rotate('+180+'deg)';
	}




	// Placing car
	car.style.left = getPosition(document.getElementById(blockId)).left + "px";
	car.style.top = getPosition(document.getElementById(blockId)).top + "px";

	// Returning current position

	var block = blockId.replace("b","");

	return block;

}

function moveUp(curPosition,collisons)
{

	// Get the block id that car is going to
	var block = curPosition - 6;

	var blockId = "b"+block;

	// Checking is there any wall at the block
	if (collisons.includes(blockId)) {

		// if so explode the car and reload the page

		car.src = 'assets/explosion.gif';
		car.style.transform = 'rotate('+0+'deg)';
		setTimeout(function(){location.reload()},1200);

	}else if(blockId == finishB){

		car.style.transform = 'rotate('+90+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";
		setTimeout(function(){alert("Congrats!"); location.reload();},600);

	}else if(!collisons.includes(blockId)){

		// if there is no wall just move the car

		car.style.transform = 'rotate('+90+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";

		return block;

	}else{

	}

}

function moveDown(curPosition,collisons)
{

	// explaination on moveTop function 

	var block = curPosition + 6;

	var blockId = "b"+block;

	if (collisons.includes(blockId)) {

		car.src = 'assets/explosion.gif';
		car.style.transform = 'rotate('+0+'deg)';
		setTimeout(function(){location.reload()},1200);

	}else if(blockId == finishB){

		car.style.transform = 'rotate('+270+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";
		setTimeout(function(){alert("Congrats!"); location.reload();},600);

	}else if(!collisons.includes(blockId)){

		car.style.transform = 'rotate('+270+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";

		return block;

	}else{

	}

}

function moveRight(curPosition,collisons)
{

	// explaination on moveTop function

	var block = curPosition + 1;
	var blockId = "b"+block;

	if (collisons.includes(blockId)) {

		car.src = 'assets/explosion.gif';
		car.style.transform = 'rotate('+0+'deg)';
		setTimeout(function(){location.reload()},1200);

	}else if(blockId == finishB){

		car.style.transform = 'rotate('+180+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";
		setTimeout(function(){alert("Congrats!"); location.reload();},600);

	}else if(!collisons.includes(blockId)){

		car.style.transform = 'rotate('+180+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";

		return block;

	}else{
		
	}

}

function moveLeft(curPosition,collisons)
{

	// explaination on moveTop function

	var block = curPosition - 1;

	var blockId = "b"+block;

	if (collisons.includes(blockId)) {

		car.src = 'assets/explosion.gif';
		car.style.transform = 'rotate('+0+'deg)';
		setTimeout(function(){location.reload()},1200);

	}else if(blockId == finishB){

		car.style.transform = 'rotate('+0+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";
		setTimeout(function(){alert("Congrats!"); location.reload();},600);

	}else if(!collisons.includes(blockId)){

		car.style.transform = 'rotate('+0+'deg)';
		car.style.top = getPosition(document.getElementById(blockId)).top + "px";
		car.style.left = getPosition(document.getElementById(blockId)).left + "px";

		return block;

	}else{

	}

}


// Function to add codes to workspace

const workSpace = document.querySelector("#w-blocks");
var codeList = document.querySelector("#code-list");

function addCode(id) {

	if(usableLeft == 0){

		alert("Can't use more codes !");

	}else if (id == "loop") {

		var times = +prompt("How many times codes will be repeated ?");

		console.log(times);

		if (isNaN(times) || times == 0 || times == 1) {

			alert("Please enter number more than 1 !");

		}else{

			workSpace.innerHTML += '<div class="code">Loop '+times+' Times</div>';
			loopState = times;
			usableLeft--;
			blockLeftCon.innerHTML = '<h6 class="m-auto block-left" data-use="'+usableLeft+'" id="block-left">'+usableLeft+' Usable Blocks Left</h6>';

		}

	}else if(id == "end-loop"){

		workSpace.innerHTML += '<div class="code">End Loop</div>';

		// Just variable to do loop

		var loopingCodes = 1

		for (var forLoopCodes = 0; forLoopCodes < loopState; forLoopCodes++) {
		
			while(loopCodeList.length >= loopingCodes){

				console.log(loopCodeList[loopingCodes-1]);
				codeList.innerText += "-"+loopCodeList[loopingCodes-1];

				loopingCodes++;

			}

			loopingCodes = 1;

		}

		loopCodeList = [];
		loopState = 1;
		usableLeft--;
		blockLeftCon.innerHTML = '<h6 class="m-auto block-left" data-use="'+usableLeft+'" id="block-left">'+usableLeft+' Usable Blocks Left</h6>';

	}else{

		if (loopState > 1) {

			workSpace.innerHTML += '<div class="w-code"><i class="bi bi-arrow-'+id+'"></i></div>';

			usableLeft--;
			blockLeftCon.innerHTML = '<h6 class="m-auto block-left" data-use="'+usableLeft+'" id="block-left">'+usableLeft+' Usable Blocks Left</h6>';

			loopCodeList.push(id);

			// Not in use

			// while (loopState+1 > loopingCodes) {
				
			// 	console.log("For loop");

			// 	codeList.innerText += "-"+id;

			// 	loopingCodes++;

			// }
			
		}else{

			usableLeft--;
			blockLeftCon.innerHTML = '<h6 class="m-auto block-left" data-use="'+usableLeft+'" id="block-left">'+usableLeft+' Usable Blocks Left</h6>';

			workSpace.innerHTML += '<div class="w-code"><i class="bi bi-arrow-'+id+'"></i></div>';
			codeList.innerText += "-"+id;

		}

	}

}

// Function to delete all codes in workspace

const btnDelete = document.querySelector("#btn-delete");

btnDelete.addEventListener('click',function deleteCode(){

	// workSpace.innerHTML = '';
	// codeList.innerText = '';

	location.reload();

});


// Function to read codes
function readCode(){

	var codeArray = codeList.textContent.split("-");

	codeArray.shift();

	return codeArray;

}

// Function to run keydown event through button

function createKey(key){

	const customEvent = new KeyboardEvent('keydown',{'keyCode':key});

	document.dispatchEvent(customEvent);

}

// Function to run code 1 (just have to make it in separate function) indentify codes

function indentifyCodes(codeArray,i){
			
		switch (codeArray[i]) {
		  case "up":
		    createKey(174);
		    break;
		  case "down":
		  	createKey(122);
		    break;
		  case "right":
		  	createKey(119);
		    break;
		  case "left":
		  	createKey(117);
		    break;
		}
		
}

// Function to run code 2

	function runCode(codeArray) {
		
		// run code number

		var rcI = 0;

		for (var i = 1; i < codeArray.length + 1; i++) {
		  setTimeout(function timer() {
		    indentifyCodes(codeArray,rcI);
		    rcI++;
		  }, i * 500);
		}

	}



