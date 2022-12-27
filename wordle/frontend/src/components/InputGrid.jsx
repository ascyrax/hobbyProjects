import { useState, useEffect } from "react";

import Row from "./Row";

import useInputGrid from "../hooks/useInputGrid";

import "../../public/inputGrid.css";

export default function InputGrid(props) {
	return (
		<div className="inputGrid">
			{props.grid.map((row, i) => {
				return <Row key={i} row={row} />;
			})}
		</div>
	);
}
