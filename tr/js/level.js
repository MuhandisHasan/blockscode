// Levels

var levels = [[3,'left','b36',[2,4,8,14,20,21,22,23,29,35,10,11,12],8],
							[7,'right','b36',[1,2,3,4,10,16,13,14,20,26,27,28,34,17,18,24,30],7],
							[1,'right','b31',[7,8,9,11,17,23,29,28,13,14,15,26,27],9],
							[1,'right','b36',[7,14,21,28,35,3,10,17,24],4],
							[1,'right','b36',[12,23,22,11,9,19],8]];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var lvl = +urlParams.get('id');

if (lvl === null || lvl == 0) {

	lvl = 0;

}else{

	lvl = lvl-1;

}

// Print game

var game = document.querySelector('#game');

console.log(levels);

var startingPoint = levels[lvl][0];
var facingWay = levels[lvl][1];
var finishLine = levels[lvl][2];
var blockAmount = levels[lvl][4];



console.log(startingPoint);

game.innerHTML += '<div id="startpoint" hidden>'+startingPoint+'</div>';
game.innerHTML += '<div id="facing" hidden>'+facingWay+'</div>';
game.innerHTML += '<img src="assets/finish-line.png" class="finish" id="finish" data-pos="'+finishLine+'">';

// Number for while loop here

var wallI = 0;

while(wallI < levels[lvl][3].length){

	console.log(levels[lvl][3][wallI]);

	game.innerHTML += '<img src="assets/wall.png" class="wall" data-pos="b'+levels[lvl][3][wallI]+'">';

	wallI++;

}

