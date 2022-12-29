import "../../public/header.css";
export default function Header(props) {
	return (
		<div className="header">
			<div className="div-menu">
				<button className="btn-menu"></button>
			</div>
			<h1 className="title">Save The Man</h1>
			<div className="div-options">
				<ul className="ul-options">
					<li className="info">info</li>
					<li className="stats">stats</li>
					<li className="settings">settings</li>
				</ul>
			</div>
		</div>
	);
}
