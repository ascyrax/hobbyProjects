import React from "react";
export default function Key(props) {
	const [state, setState] = React.useState({ clicked: false, form: 0 });

	function handleClick() {
		setState((prevState) => ({
			...prevState,
			clicked: true,
			form: 0, // + correct, 0 neutral, - wrong
		}));

		// check if this key is present in the word or not
		if (props.checkTheGuess(props.char)) {
			setState((prevState) => ({
				...prevState,
				form: 1,
			}));
		} else {
			setState((prevState) => ({
				...prevState,
				form: -1,
			}));
		}
	}

	return (
		<div
			id="key"
			onClick={handleClick}
			className={
				state.form > 0 ? "correct" : state.form < 0 ? "wrong" : "neutral"
			}
		>
			{props.char}
		</div>
	);
}
