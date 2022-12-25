import { useState, useEffect } from "react";

import Key from "./Key";
import useKeyBoard from "../hooks/useKeyBoard";
import "../../public/keyboard.css";

export default function KeyBoard(props) {
	let [keyBoardState, setKeyBoardState] = useState();
	let { mp, charsTopRow, charsMidRow, charsBottomRow, handleClick } =
		useKeyBoard(props.wordToGuess, setKeyBoardState);

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
