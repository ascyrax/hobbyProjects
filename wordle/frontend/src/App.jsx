import React from "react";
import KeyBoard from "../components/KeyBoard";

import words from "../data/words.json";

function App() {
	const index = Math.floor(Math.random() * words.length);
	const [wordToGuess, setWordToGuess] = React.useState(
		words[index].toUpperCase()
	);

	console.log(wordToGuess);

	return (
		<div className="App">
			<KeyBoard wordToGuess={wordToGuess} />
		</div>
	);
}

export default App;
