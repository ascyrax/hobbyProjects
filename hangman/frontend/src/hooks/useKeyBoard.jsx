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
	guessesLeft,
	setGuessesLeft,
	userWon,
	setUserWon
) {
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
		if (guessesLeft == 0 || userWon) return;

		if (!isAnExpectedKey(keyChar)) return;
		// console.log(event, keyChar);

		userGuess.push(keyChar);
		setUserGuess(userGuess);

		let userGuessString = userGuess.toString().replaceAll(",", "");
		console.log(keyChar, userGuess, userGuessString);

		if (checkForVictory(userGuessString)) {
			console.log("victory");
			setUserWon(true);
		}

		if (wordToGuess.includes(keyChar)) {
			mp.set(keyChar, { keyChar: keyChar, keyColor: "green" });
			setKeyBoardState(mp);
		} else {
			mp.set(keyChar, { keyChar: keyChar, keyColor: "grey" });
			setKeyBoardState(mp);
			setGuessesLeft((prev) => prev - 1);
		}
	}

	function checkForVictory(userGuessString) {
		let cnt = 0;
		for (let i = 0; i < wordToGuess.length; i++) {
			if (userGuessString.includes(wordToGuess[i])) cnt++;
		}
		return cnt == wordToGuess.length;
	}

	return {
		mp,
		charsTopRow,
		charsMidRow,
		charsBottomRow,
		handleClick,
	};
}
