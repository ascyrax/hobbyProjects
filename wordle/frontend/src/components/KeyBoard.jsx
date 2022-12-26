import { useState, useEffect } from "react";

import Key from "./Key";
import useKeyBoard from "../hooks/useKeyBoard";
import "../../public/keyboard.css";

function printColors(name, variable) {
	console.log(name);
	if (variable == undefined) {
		console.log(undefined);
		return;
	}
	let temp = [];
	for (let [key, val] of variable) temp.push(val.keyColor);
	console.log(temp);
}

export default function KeyBoard(props) {
	// console.log("keyboard rerendered");
	let [keyBoardState, setKeyBoardState] = useState();
	let { mp, charsTopRow, charsMidRow, charsBottomRow, handleClick } =
		useKeyBoard(props.wordToGuess, setKeyBoardState, keyBoardState);

	// listen to keyboard presses as well
	function temp(e) {
		handleClick(e, e.key);
	}
	useEffect(() => {
		// console.log("useEffect ran");
		window.addEventListener("keyup", temp);
		return function cleanup() {
			window.removeEventListener("keyup", temp);
		};
	}, [handleClick]);

	return (
		<div id="keyboard">
			<div id="keyRow">
				{charsTopRow.map((el) => {
					let keyObj = (keyBoardState ? keyBoardState : mp).get(el);
					return (
						<Key
							key={el}
							keyChar={keyObj.keyChar}
							keyColor={keyObj.keyColor}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
			<div id="keyRow">
				{charsMidRow.map((el) => {
					let keyObj = (keyBoardState ? keyBoardState : mp).get(el);

					return (
						<Key
							key={el}
							keyChar={keyObj.keyChar}
							keyColor={keyObj.keyColor}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
			<div id="keyRow">
				{charsBottomRow.map((el) => {
					let keyObj = (keyBoardState ? keyBoardState : mp).get(el);

					return (
						<Key
							key={el}
							keyChar={keyObj.keyChar}
							keyColor={keyObj.keyColor}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
		</div>
	);
}
