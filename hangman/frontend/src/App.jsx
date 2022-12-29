import { useState } from "react";
import Hangman from "./components/Hangman";
import words from "../data/words.json";

function App() {
	const index = Math.floor(Math.random() * words.length);
	const [wordToGuess, setWordToGuess] = useState(words[index].toUpperCase());
	const [guessesLeft, setGuessesLeft] = useState(wordToGuess.length);
	const [userWon, setUserWon] = useState(false);
	if (userWon) alert("あなたが勝った 🥳🥂🍾");
	if (guessesLeft == 0) alert("負けた 😭😖🥵");

	console.log(wordToGuess);
	return (
		<div className="App">
			<Hangman
				wordToGuess={wordToGuess}
				guessesLeft={guessesLeft}
				setGuessesLeft={setGuessesLeft}
				userWon={userWon}
				setUserWon={setUserWon}
			/>
		</div>
	);
}

export default App;
