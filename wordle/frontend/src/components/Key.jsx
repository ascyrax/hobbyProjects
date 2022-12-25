import React from "react";
import useKeyBoard from "../hooks/useKeyBoard";
export default function Key(props) {
	return (
		<div
			id="key"
			className={props.keyColor}
			onClick={(e) => {
				props.handleClick(e, props.keyChar);
			}}
		>
			{props.keyChar}
		</div>
	);
}
