import React from "react";
import useKeyBoard from "../hooks/useKeyBoard";
export default function Key(props) {
	return (
		<div
			id={props.keyChar}
			className={props.keyColor + " " + "key"}
			onClick={(e) => {
				props.handleClick(e, props.keyChar);
			}}
		>
			{props.keyChar}
		</div>
	);
}
