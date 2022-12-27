import { useState } from "react";

// function printColors(name, variable) {
// 	console.log(name);
// 	if (variable == undefined) {
// 		console.log(variable);
// 		return;
// 	}
// 	let temp = [];
// 	for (let [key, val] of variable) temp.push(val.keyColor);
// 	console.log(temp);
// }

export default function useKeyBoard(
	wordToGuess,
	setKeyBoardState,
	prevMp,
	userGuessPrev,
	setUserGuess,
	setGrid
) {
	let [guessNo, setGuessNo] = useState(0);

	let [charsTopRow, setCharsTopRow] = useState([
		"Q",
		"W",
		"E",
		"R",
		"T",
		"Y",
		"U",
		"I",
		"O",
		"P",
	]);
	let [charsMidRow, setCharsMidRow] = useState([
		"A",
		"S",
		"D",
		"F",
		"G",
		"H",
		"J",
		"K",
		"L",
	]);
	let [charsBottomRow, setCharsBottomRow] = useState([
		"ENTER",
		"Z",
		"X",
		"C",
		"V",
		"B",
		"N",
		"M",
		"XX",
	]);
	let [colors, setColors] = useState(["neutral", "green", "yellow", "grey"]);

	let mp = new Map();

	for (let i = 0; i < charsTopRow.length; i++) {
		mp.set(charsTopRow[i], { keyChar: charsTopRow[i], keyColor: colors[0] });
	}
	for (let i = 0; i < charsMidRow.length; i++) {
		mp.set(charsMidRow[i], { keyChar: charsMidRow[i], keyColor: colors[0] });
	}
	for (let i = 0; i < charsBottomRow.length; i++) {
		mp.set(charsBottomRow[i], {
			keyChar: charsBottomRow[i],
			keyColor: colors[0],
		});
	}
	if (prevMp) {
		for (let [key, val] of prevMp) {
			mp.set(key, val);
		}
	}

	function isAnExpectedKey(keyChar) {
		for (let char of charsTopRow) if (char === keyChar) return true;
		for (let char of charsMidRow) if (char === keyChar) return true;
		for (let char of charsBottomRow) if (char === keyChar) return true;
		return false;
	}

	let userGuess = [];
	for (let i = 0; i < userGuessPrev.length; i++)
		userGuess.push(userGuessPrev[i]);

	// HANDLING THE KEY CLICKS
	function handleClick(event, keyChar) {
		keyChar = keyChar.toUpperCase();

		if (keyChar === "XX" || keyChar === "BACKSPACE") {
			if (userGuess.length > 0) {
				userGuess.pop();
			}
			setUserGuess(userGuess);
			handleGridInput();
			console.log(userGuess);
			return;
		}

		if (!isAnExpectedKey(keyChar)) return;
		// console.log(event, keyChar);

		if (keyChar === "ENTER") {
			if (userGuess.length < wordToGuess.length) {
				console.log("enter correct no of chars before submitting");
			} else {
				handleSubmit();
			}
			return;
		}

		if (userGuess.length === wordToGuess.length) return;
		//    [ TODO ]    IF GAME IS OVER => RETURN
		userGuess.push(keyChar);
		// console.log(userGuess);
		setUserGuess(userGuess);
		handleGridInput();
	}

	// HANDLING THE SUBMIT
	function handleSubmit() {
		let userGuessString = userGuess.toString().replaceAll(",", "");

		// green
		for (let i = 0; i < wordToGuess.length; i++) {
			if (userGuessString[i] === wordToGuess[i]) {
				let keyChar = userGuessString[i];
				mp.set(keyChar, { keyChar: keyChar, keyColor: "green" });
			}
		}

		// yellow
		for (let i = 0; i < userGuessString.length; i++) {
			let keyChar = userGuessString[i];
			let keyColor = mp.get(keyChar).keyColor;
			if (keyColor == "green") continue;

			for (let j = 0; j < wordToGuess.length; j++) {
				if (keyChar == wordToGuess[j]) {
					mp.set(keyChar, { keyChar: keyChar, keyColor: "yellow" });
					break;
				}
			}
		}

		// grey
		for (let i = 0; i < userGuessString.length; i++) {
			let keyChar = userGuessString[i];
			if (mp.get(keyChar).keyColor == "neutral") {
				mp.set(keyChar, { keyChar: keyChar, keyColor: "grey" });
			}
		}
		handleGridSubmit();

		if (userGuessString == wordToGuess) {
			alert("dobroye utra");
			return;
		}

		setUserGuess([]);
		setGuessNo((prev) => prev + 1);
		setKeyBoardState(mp);
		if (guessNo == 5) alert("kitanai");
	}

	function handleGridSubmit() {
		setGrid((prevGrid) => {
			let tempGrid = [];

			for (let i = 0; i < prevGrid.length; i++) {
				let tempRow = [];
				for (let j = 0; j < prevGrid[0].length; j++) {
					tempRow.push(prevGrid[i][j]);
				}
				tempGrid.push(tempRow);
			}
			for (let j = 0; j < prevGrid[0].length; j++) {
				tempGrid[guessNo][j] = {
					keyChar: prevGrid[guessNo][j].keyChar,
					keyColor: findColor(j),
				};
			}
			return tempGrid;
		});
	}

	function findColor(index) {
		if (wordToGuess[index] == userGuess[index]) return "green";
		else {
			for (let char of wordToGuess) {
				if (char == userGuess[index]) return "yellow";
			}
			return "grey";
		}
	}

	function handleGridInput() {
		setGrid((prevGrid) => {
			let tempGrid = [];

			for (let i = 0; i < prevGrid.length; i++) {
				let tempRow = [];
				for (let j = 0; j < prevGrid[0].length; j++) {
					tempRow.push(prevGrid[i][j]);
				}
				tempGrid.push(tempRow);
			}
			for (let j = 0; j < prevGrid[0].length; j++) {
				tempGrid[guessNo][j] = {
					keyChar: userGuess[j],
					keyColor: "neutral",
				};
			}
			return tempGrid;
		});
	}
	return {
		mp,
		charsTopRow,
		charsMidRow,
		charsBottomRow,
		handleClick,
		guessNo,
		handleGridSubmit,
		handleGridInput,
	};
}
