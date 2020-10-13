import React from "react";
import css from "./style.less";

/**
 * @author Mohamed Abdul Nasar
 * ItemList functional component to render the left side items.
 */

const ItemList = (props) => {
	const { items, selectedItemId, setSelectedItemId, setStateHistory } = props;

	const onClickOfItem = (evt) => {
		const { dataset } = evt.target;
		const { id } = dataset;
		setSelectedItemId(id);
		setStateHistory((stateHistory) => {
			stateHistory.push({ itemId: selectedItemId });
			return [...stateHistory];
		});
	};

	return (
		<div className={css.itemList}>
			{items.map((item) => {
				const { id, name } = item;
				return (
					<div
						className={
							selectedItemId === id ? "item-name selected-item" : "item-name"
						}
						title={`Item ${name}`}
						key={id}
						data-id={id}
						onClick={onClickOfItem}
					>
						{name}
					</div>
				);
			})}
		</div>
	);
};
export default ItemList;
