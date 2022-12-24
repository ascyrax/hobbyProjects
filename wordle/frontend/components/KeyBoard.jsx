import React from "react";
import Key from "./Key";
import "../public/keyboard.css";
let charsTopRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
let charsMidRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
let charsBottomRow = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "XX"];
let keyColorsTopRow = [],
	keyColorsMidRow = [],
	keyColorsBottomRow = [];
for (let i = 0; i < charsTopRow.length; i++) keyColorsTopRow.push(0);
for (let i = 0; i < charsMidRow.length; i++) keyColorsMidRow.push(0);
for (let i = 0; i < charsBottomRow.length; i++) keyColorsBottomRow.push(0);

export default function KeyBoard(props) {
	const [state, setState] = React.useState({
		keyColorsTopRow: keyColorsTopRow,
		keyColorsMidRow: keyColorsMidRow,
		keyColorsBottomRow: keyColorsBottomRow,
	});
	console.log(state);
	const wordToGuess = props.wordToGuess;

	let userGuess = [];
	function handleClick(keyChar) {
		userGuess.push(keyChar);
		console.log(userGuess);
	}

	function handleReClick(keyChar) {
		userGuess = userGuess.filter((el) => el != keyChar);
		console.log(userGuess);
	}

	function handleSubmit() {
		console.log(wordToGuess, userGuess);
		// check for green
		for (let i = 0; i < userGuess.length; i++) {
			console.log(userGuess[i], wordToGuess[i]);
			console.log(typeof userGuess[i], typeof wordToGuess[i]);
			if (userGuess[i] == wordToGuess[i]) {
				// top row
				console.log("match", i, userGuess[i]);
				for (let j = 0; j < charsTopRow.length; j++) {
					if (charsTopRow[j] == userGuess[i]) {
						keyColorsTopRow[j] = 1;

						setState((prevState) => ({
							...prevState,
							keyColorsTopRow: keyColorsTopRow,
						}));
					}
				}
				// mid row
				for (let j = 0; j < charsMidRow.length; j++) {
					if (charsMidRow[j] == userGuess[i]) {
						keyColorsMidRow[j] = 1;

						setState((prevState) => ({
							...prevState,
							keyColorsMidRow: keyColorsMidRow,
						}));
					}
				}
				// bottom row
				for (let j = 0; j < charsBottomRow.length; j++) {
					if (charsBottomRow[j] == userGuess[i]) {
						keyColorsBottomRow[j] = 1;

						setState((prevState) => ({
							...prevState,
							keyColorsBottomRow: keyColorsBottomRow,
						}));
					}
				}
			}
		}
		// check for yellow

		// check for grey
	}
	return (
		<div id="keyboard">
			<div id="keyRow">
				{charsTopRow.map((el, index) => {
					return (
						<Key
							key={el}
							keyChar={el}
							keyColor={keyColorsTopRow[index]}
							handleClick={handleClick}
							handleReClick={handleReClick}
							handleSubmit={handleSubmit}
						/>
					);
				})}
			</div>
			<div id="keyRow">
				{charsMidRow.map((el, index) => {
					return (
						<Key
							key={el}
							keyChar={el}
							keyColor={keyColorsMidRow[index]}
							handleClick={handleClick}
							handleReClick={handleReClick}
							handleSubmit={handleSubmit}
						/>
					);
				})}
			</div>
			<div id="keyRow">
				{charsBottomRow.map((el, index) => {
					return (
						<Key
							key={el}
							keyChar={el}
							keyColor={keyColorsBottomRow[index]}
							handleClick={handleClick}
							handleReClick={handleReClick}
							handleSubmit={handleSubmit}
						/>
					);
				})}
			</div>
		</div>
	);
}
