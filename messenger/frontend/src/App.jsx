import { useState } from "react";
let a = 11;
function App() {
	const [count, setCount] = useState(console.log("hi"));
	console.log("a " + a, "count " + count);
	function decrement() {
		console.log("decrement");
		// setCount((prevCnt) => prevCnt - 1);
		setCount((prevCnt) => prevCnt - 1);
		a++;
		console.log("a " + a, "count " + count);
	}
	function increment() {
		console.log("increment");
		// setCount((prevCnt) => prevCnt + 1);
		setCount((prevCnt) => prevCnt + 1);
		a++;
		console.log("a " + a, "count " + count);
	}
	return (
		<div
			className="App"
			style={{ position: "absolute", top: "30vh", left: "40vw", scale: "5" }}
		>
			<button onClick={decrement}>-</button>
			{count}
			<button onClick={increment}>+</button>
		</div>
	);
}

export default App;
