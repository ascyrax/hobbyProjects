import { useState } from "react";
export default function useKeyBoard(wordToGuess, setState) {
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

	let [mp, setMp] = useState(new Map());

	setState(mp);

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

	let userGuess = [];
	// HANDLING THE KEY CLICKS
	function handleClick(event, keyChar) {
		// console.log(event, keyChar);
		if (keyChar === "XX" && userGuess.length > 0) {
			userGuess.pop();
			return;
		}
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
		console.log(userGuessString);

		for (let i = 0; i < wordToGuess.length; i++) {
			if (userGuessString[i] === wordToGuess[i]) {
				let keyChar = userGuessString[i];
				mp.set(keyChar, { keyChar: keyChar, keyColor: "green" });
			}
		}
		console.log(mp);
	}

	return { mp, charsTopRow, charsMidRow, charsBottomRow, handleClick };
}
