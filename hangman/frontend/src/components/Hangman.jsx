import { useState, useEffect } from "react";
import useKeyBoard from "../hooks/useKeyBoard";
import "../../public/hangman.css";
import Header from "./Header";
import Draw from "./Draw";
import Input from "./Input";
import KeyBoard from "./KeyBoard";

export default function Hangman({
	wordToGuess,
	guessesLeft,
	setGuessesLeft,
	userWon,
	setUserWon,
}) {
	let [keyBoardState, setKeyBoardState] = useState();
	let [userGuess, setUserGuess] = useState([]);
	let { mp, charsTopRow, charsMidRow, charsBottomRow, handleClick } =
		useKeyBoard(
			wordToGuess,
			setKeyBoardState,
			keyBoardState,
			userGuess,
			setUserGuess,
			guessesLeft,
			setGuessesLeft,
			userWon,
			setUserWon
		);
	// listen to keyboard presses as well
	function temp(e) {
		handleClick(e, e.key);
	}
	useEffect(() => {
		window.addEventListener("keyup", temp);
		return function cleanup() {
			window.removeEventListener("keyup", temp);
		};
	}, [handleClick]);
	return (
		<div className="hangman">
			<Header />
			<Draw guessesLeft={guessesLeft} />
			<Input wordToGuess={wordToGuess} keyBoardState={keyBoardState} />
			<KeyBoard
				mp={mp}
				keyBoardState={keyBoardState}
				charsTopRow={charsTopRow}
				charsMidRow={charsMidRow}
				charsBottomRow={charsBottomRow}
				handleClick={handleClick}
			/>
		</div>
	);
}
