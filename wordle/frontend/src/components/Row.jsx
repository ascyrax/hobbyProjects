export default function Row(props) {
	return (
		<div className="row">
			{props.row.map((el, index) => {
				// console.log(el);
				return (
					<div key={index} className={"box" + " " + el.keyColor}>
						{el.keyChar}
					</div>
				);
			})}
		</div>
	);
}
