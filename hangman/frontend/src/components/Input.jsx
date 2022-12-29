import "../../public/input.css";
export default function Input({ wordToGuess, keyBoardState }) {
	let wordToGuessArr = wordToGuess.split("");
	return (
		<div className="input">
			{wordToGuessArr.map((char, i) => {
				let keyObj = keyBoardState ? keyBoardState.get(char) : "neutral";
				let keyVisibility = "hide";
				if (keyObj) {
					keyVisibility = keyObj.keyColor == "green" ? "show" : "hide";
				}

				return (
					<div key={i} className="letter-box">
						<div className={`letter ${keyVisibility}`}>{char}</div>
					</div>
				);
			})}
		</div>
	);
}
