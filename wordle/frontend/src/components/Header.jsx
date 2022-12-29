import "../../public/header.css";
export default function Header(props) {
	return (
		<div className="header">
			<div className="div-menu">
				<button className="btn-menu"></button>
			</div>
			<h1 className="title">Wordle</h1>
			<div className="div-options">
				<ul className="ul-options">
					<li className="info">A</li>
					<li className="stats">B</li>
					<li className="settings">C</li>
				</ul>
			</div>
		</div>
	);
}
