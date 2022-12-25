import InputGrid from "./InputGrid";
import KeyBoard from "./KeyBoard";

export default function Wordle(props) {
	return (
		<div id="wordle">
			<h1>wortToGuess = "{props.wordToGuess}"</h1>
			<InputGrid />
			<KeyBoard wordToGuess={props.wordToGuess} />
		</div>
	);
}
