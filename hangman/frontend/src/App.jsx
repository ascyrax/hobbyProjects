import React from "react";
import Draw from "../components/Draw";
import Word from "../components/Word";
import KeyBoard from "../components/KeyBoard";

import words from "../data/words.json";

function App() {
	const index = Math.floor(Math.random() * words.length);
	const [wordToGuess, setWordToGuess] = React.useState(words[index]);

	console.log(wordToGuess);

	function checkTheGuess(keyChar) {
		keyChar = keyChar.toLowerCase();

		for (let i = 0; i < wordToGuess.length; i++) {
			if (wordToGuess.charAt(i) === keyChar) return true;
		}
		return false;
	}

	return (
		<div className="App">
			<Draw />
			<Word />
			<KeyBoard checkTheGuess={checkTheGuess} />
		</div>
	);
}

export default App;
