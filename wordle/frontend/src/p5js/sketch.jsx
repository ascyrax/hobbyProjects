// let charArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S']

let startingX = 5;
let objArr = [
	{ keyChar: "A", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "B", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "C", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "D", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "E", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "F", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "G", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "H", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "I", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "J", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "k", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "l", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "m", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "N", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "O", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "P", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "Q", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "R", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "S", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "T", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "U", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "V", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "W", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "X", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "Y", x: startingX, speedX: 0, strokeColor: [] },
	{ keyChar: "Z", x: startingX, speedX: 0, strokeColor: [] },
];

let minSpeedX = 0.1,
	maxSpeedX = 1;
let isWinnerFound = false;
let winner;

function setup() {
	createCanvas(1080, 720);

	isWinnerFound = false;

	for (let i = 0; i < objArr.length; i++) {
		objArr[i].x = startingX;
		objArr[i].speedX = random(minSpeedX, maxSpeedX);
		objArr[i].strokeColor = [random(0, 255), random(0, 255), random(0, 255)];
	}
}

function draw() {
	background(255);

	strokeWeight(10);

	checkForWinner();

	for (let i = 0; i < objArr.length; i++) {
		stroke(objArr[i].strokeColor);
		text(objArr[i].keyChar, objArr[i].x, 30 + (i * (height - 40)) / 25);
		objArr[i].x += objArr[i].speedX;
	}
}

function checkForWinner() {
	for (let i = 0; i < objArr.length; i++) {
		if (objArr[i].x >= width) {
			console.log(objArr[i].keyChar + " is the winner");
			isWinnerFound = true;
			winner = objArr[i];
			break;
		}
	}
	if (isWinnerFound) setup();
}
