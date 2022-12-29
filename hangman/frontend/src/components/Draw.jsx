import "../../public/draw.css";
import { useState, useEffect } from "react";

export default function Draw({ guessesLeft }) {
	let arr = ["head", "torso", "leftHand", "rightHand", "leftLeg", "rightLeg"];
	let wrongGuesses = 6 - guessesLeft;
	let [displayArr, setDisplayArr] = useState([]);
	console.log(displayArr);
	useEffect(() => {
		let temp = [];
		for (let i = 0; i < 6; i++) {
			if (i < wrongGuesses) temp.push("show");
			else temp.push("hide");
		}
		setDisplayArr(temp);
	}, [guessesLeft]);
	return (
		<div className="draw">
			<div className="absPosEl poleVerticalBig "></div>
			<div className="absPosEl poleHorizontal "></div>
			<div className="absPosEl poleVerticalSmall "></div>

			{arr.map((el, i) => {
				return (
					<div key={i} className={`absPosEl ${arr[i]} ${displayArr[i]}`}></div>
				);
			})}
		</div>
	);
}
