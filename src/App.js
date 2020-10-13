import React from "react";
import css from "./App.less";
import ItemList from "./components/ItemList";
import FieldList from "./components/FieldList";
import TitleActions from "./components/TitleActions";
import defaultItemData from "./defaultData.js";

/**
 * @author Mohamed Abdul Nasar
 * App functional component that initializes the hooks and passes down to other components.
 */

function App() {
	let defaultData = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: defaultItemData;
	const [items, setItems] = React.useState(defaultData);
	const [selectedItemId, setSelectedItemId] = React.useState(items[0].id);
	const [stateHistory, setStateHistory] = React.useState([]);

	const selectedItem = items.find((item) => item.id === selectedItemId);
	const { fields } = selectedItem;
	const props = {
		fields,
		items,
		setItems,
		selectedItemId,
		setSelectedItemId,
		stateHistory,
		setStateHistory,
	};
	return (
		<div className={css.itemEditorApp}>
			<div className="title-area">
				<TitleActions {...props} />
			</div>
			<div className="content-area">
				<div className="item-list-area">
					<ItemList {...props} />
				</div>
				<div className="field-list-area">
					<FieldList {...props} />
				</div>
			</div>
		</div>
	);
}

export default App;
