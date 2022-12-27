import { useState, useEffect } from "react";
import InputGrid from "./InputGrid";
import KeyBoard from "./KeyBoard";
import Header from "./Header";
import useKeyBoard from "../hooks/useKeyBoard";
import "../../public/wordle.css";

export default function Wordle({ wordToGuess }) {
	let [keyBoardState, setKeyBoardState] = useState();
	let [userGuess, setUserGuess] = useState([]);
	let tempGrid = [];
	for (let i = 0; i < 6; i++) {
		let tempArr = [];
		for (let j = 0; j < wordToGuess.length; j++)
			tempArr.push({ keyChar: "", keyColor: "neutral" });
		tempGrid.push(tempArr);
	}
	let [grid, setGrid] = useState(tempGrid);
	let {
		mp,
		charsTopRow,
		charsMidRow,
		charsBottomRow,
		handleClick,
		handleGrid,
	} = useKeyBoard(
		wordToGuess,
		setKeyBoardState,
		keyBoardState,
		userGuess,
		setUserGuess,
		setGrid
	);

	// useEffect(() => {
	// 	// for (let i = 0; i < grid.length; i++) {
	// 	// 	for (let j = 0; j < grid[0].length; j++) {
	// 	// 		tempGrid[i][j] = grid[i][j];
	// 	// 	}
	// 	// }
	// 	// for (let j = 0; j < userGuess.length; j++) {
	// 	// 	tempGrid[guessNo][j] = {
	// 	// 		keyChar: userGuess[j],
	// 	// 		keyColor: mp.get(userGuess[j]).keyColor,
	// 	// 	};
	// 	// }
	// 	// setGrid(tempGrid);
	// 	handleGrid();
	// }, [userGuess]);

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
		<div className="wordle">
			<Header />
			<InputGrid userGuess={userGuess} grid={grid} />
			<KeyBoard
				mp={mp}
				keyBoardState={keyBoardState}
				charsTopRow={charsTopRow}
				charsMidRow={charsMidRow}
				charsBottomRow={charsBottomRow}
				handleClick={handleClick}
			/>
			{/* <h1>wordToGuess = "{wordToGuess}"</h1> */}
		</div>
	);
}
