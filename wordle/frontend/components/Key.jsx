import React from "react";

const colors = ["neutral", "green", "yellow", "black"];

export default function Key(props) {
	const [state, setState] = React.useState({
		char: props.keyChar,
		clicked: false,
		mutable: true,
		color: props.keyColor,
	});

	function handleClick(e) {
		if (e.target.textContent == "ENTER") {
			props.handleSubmit();
		} else if (!state.clicked) {
			props.handleClick(state.char);
		}
	}

	return (
		<div id="key" onClick={handleClick} className={colors[props.keyColor]}>
			{state.char}
		</div>
	);
}
