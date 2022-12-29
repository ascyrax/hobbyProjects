import Key from "./Key";
import "../../public/keyboard.css";

export default function KeyBoard({
	keyBoardState,
	mp,
	charsTopRow,
	charsMidRow,
	charsBottomRow,
	handleClick,
}) {
	return (
		<div className="keyboard">
			<div className="keyRow">
				{charsTopRow.map((el) => {
					let keyObj = (keyBoardState ? keyBoardState : mp).get(el);
					return (
						<Key
							key={el}
							keyChar={keyObj.keyChar}
							keyColor={keyObj.keyColor}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
			<div className="keyRow">
				{charsMidRow.map((el) => {
					let keyObj = (keyBoardState ? keyBoardState : mp).get(el);

					return (
						<Key
							key={el}
							keyChar={keyObj.keyChar}
							keyColor={keyObj.keyColor}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
			<div className="keyRow">
				{charsBottomRow.map((el) => {
					let keyObj = (keyBoardState ? keyBoardState : mp).get(el);

					return (
						<Key
							key={el}
							keyChar={keyObj.keyChar}
							keyColor={keyObj.keyColor}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
		</div>
	);
}
