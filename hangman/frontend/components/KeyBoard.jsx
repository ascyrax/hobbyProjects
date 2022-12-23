import Key from "./Key";
import keyboard from "../public/keyboard.css";
let chars = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
export default function KeyBoard(props) {
	function checkTheGuess(keyChar) {
		return props.checkTheGuess(keyChar);
	}
	return (
		<div id="keyboard">
			{chars.map((el) => {
				return <Key key={el} char={el} checkTheGuess={checkTheGuess} />;
			})}
		</div>
	);
}
