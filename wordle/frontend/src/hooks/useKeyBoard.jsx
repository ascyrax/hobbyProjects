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

export default function useKeyBoard(wordToGuess, setKeyBoardState, prevMp) {
	// console.log("useKeyBoard recalled");

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
	// console.log(userGuess);
	// HANDLING THE KEY CLICKS
	function handleClick(event, keyChar) {
		keyChar = keyChar.toUpperCase();

		if (keyChar === "XX" || keyChar === "BACKSPACE") {
			if (userGuess.length > 0) {
				userGuess.pop();
			}
			console.log(userGuess);
			return;
		}

		if (!isAnExpectedKey(keyChar)) return;
		// console.log(event, keyChar);

		if (keyChar === "ENTER") {
			if (userGuess.length < wordToGuess.length) {
				console.log("enter correct no of chars before submitting");
				return;
			} else {
				handleSubmit();
			}
		}

		if (userGuess.length === wordToGuess.length) return;
		//    [ TODO ]    IF GAME IS OVER => RETURN
		userGuess.push(keyChar);
		console.log(userGuess);
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
		setKeyBoardState(mp);
		// userGuess = [];
	}

	return { mp, charsTopRow, charsMidRow, charsBottomRow, handleClick };
}
