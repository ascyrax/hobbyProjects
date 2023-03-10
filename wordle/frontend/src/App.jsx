import React from "react";

import Wordle from "./components/Wordle";

import words from "../data/words.json";

import "../public/app.css";

function App() {
	const index = Math.floor(Math.random() * words.length);
	const [wordToGuess, setWordToGuess] = React.useState(
		words[index].toUpperCase()
	);
	console.log("wordToGuess", wordToGuess);

	return (
		<div className="App">
			<Wordle wordToGuess={wordToGuess} />
		</div>
	);
}

export default App;
