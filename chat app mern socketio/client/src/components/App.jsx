import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import SetAvatar from "./SetAvatar";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/setAvatar" element={<SetAvatar />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
