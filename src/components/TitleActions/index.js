import React from "react";
import defaultItemData from "../../defaultData.js";
import css from "./style.less";
import appConfig from "../../config";

/**
 * @author Mohamed Abdul Nasar
 * TitleActions functional component to render the header along with the title
 * and action buttons. Uses a hook to control the stateIndex for undo and redo actions
 */

const TitleActions = (props) => {
	const {
		items,
		setItems,
		stateHistory,
		setSelectedItemId,
		setStateHistory,
	} = props;
	const [stateIndex, setStateIndex] = React.useState(stateHistory.length);
	React.useEffect(() => {
		setStateIndex(stateHistory.length - 1);
	}, [stateHistory]);
	
	const saveCurrentItems = () => {
		//either save it to a DB or localStorage
		localStorage.setItem("items", JSON.stringify(items));
		setStateHistory([]);
	};

	const cancelCurrentChanges = () => {
		let defaultData = localStorage.getItem("items")
			? JSON.parse(localStorage.getItem("items"))
			: defaultItemData;
		setItems(defaultData);
		setStateHistory([]);
	};

	const setFieldInToItems = (itemId, fieldId, value) => {
		if(!fieldId && !value) {
			return;
		}
		const clItems = [...items];
		const itemInd = clItems.findIndex((item) => item.id === itemId);
		const fieldInd = clItems[itemInd].fields.findIndex(
			(field) => field.id === fieldId
		);
		clItems[itemInd].fields[fieldInd].fieldValue = value;
		setItems([...clItems]);
	};
	const undoPreviousState = () => {
		setFieldInToItems(
			stateHistory[stateIndex - 1].itemId,
			stateHistory[stateIndex - 1].fieldId,
			stateHistory[stateIndex - 1].fieldValue
		);
		setSelectedItemId(() => stateHistory[stateIndex - 1].itemId);
		setStateIndex((curStateIndex) =>
			curStateIndex > 0 ? curStateIndex - 1 : 0
		);
	};

	const redoPreviousState = () => {
		setFieldInToItems(
			stateHistory[stateIndex + 1].itemId,
			stateHistory[stateIndex + 1].fieldId,
			stateHistory[stateIndex + 1].fieldValue
		);
		setSelectedItemId(() => stateHistory[stateIndex + 1].itemId);
		setStateIndex((curStateIndex) =>
			curStateIndex < stateHistory.length - 1
				? curStateIndex + 1
				: stateHistory.length
		);
	};
	return (
		<div className={css.titleActions}>
			<div className="title"> {appConfig.appTitle} </div>
			<div className="button-area">
				<button
					className="undo-button"
					title="Undo"
					onClick={undoPreviousState}
					disabled={stateIndex <= 0}
				>
					Undo
				</button>
				<button
					className="redo-button"
					title="Redo"
					onClick={redoPreviousState}
					disabled={stateIndex === stateHistory.length - 1}
				>
					Redo
				</button>
				<button title="Save" className="save-button" onClick={saveCurrentItems}>
					Save
				</button>
				<button title="Cancel" className="cancel-button" onClick={cancelCurrentChanges}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default TitleActions;
