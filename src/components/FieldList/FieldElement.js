import React from "react";
import appConfig from "../../config";

/**
 * @author Mohamed Abdul Nasar
 * FieldElement functional component used in FieldList to render each of the field elements.
 * Maintains the stateHistory for each of the field changes.
 */

const FieldElement = (props) => {
	const {
		id: fieldId,
		items,
		fieldType,
		fieldName,
		fieldValue,
		fieldOptions,
		setItems,
		selectedItemId,
		stateHistory,
		setStateHistory,
	} = props;
	const onFieldChange = (evt) => {
		const { dataset, value, checked } = evt.target;
		const { id } = dataset;
		const cItems = [...items];
		const itemInd = cItems.findIndex((item) => item.id === selectedItemId);
		const fieldInd = cItems[itemInd].fields.findIndex(
			(field) => field.id === id
		);
		const changedField = cItems[itemInd].fields[fieldInd];
		const currentState = {
			itemId: selectedItemId,
			fieldId: changedField.id,
			fieldValue: changedField.fieldValue,
		};
		let nextState = {};
		switch (changedField.fieldType) {
			case "text":
			case "option":
				nextState = {
					itemId: selectedItemId,
					fieldId: changedField.id,
					fieldValue: value,
				};
				changedField.fieldValue = value;
				break;
			case "toggle":
				nextState = {
					itemId: selectedItemId,
					fieldId: changedField.id,
					fieldValue: checked,
				};
				changedField.fieldValue = checked;
				break;
			default:
				console.error(`${changedField.id} does not have a valid field type.`);
		}
		let clSHistory = [...stateHistory];
		if (clSHistory.length >= (appConfig.undoRedoCount || 10)) {
			clSHistory.splice(0, 1);
		}
		if (clSHistory.length === 0) {
			clSHistory = [currentState, nextState];
		} else {
			clSHistory.push(nextState);
		}
		setStateHistory(clSHistory);
		setItems(cItems);
	};
	switch (fieldType) {
		case "text":
			return (
				<input
					type="text"
					data-id={fieldId}
					name={fieldName}
					value={fieldValue}
					onChange={onFieldChange}
				/>
			);
		case "toggle":
			return (
				<input
					type="checkbox"
					data-id={fieldId}
					onChange={onFieldChange}
					checked={fieldValue === true}
				/>
			);
		case "option":
			return (
				<select
					name={fieldName}
					data-id={fieldId}
					value={fieldValue}
					onChange={onFieldChange}
				>
					{fieldOptions.map((option) => {
						const { optionName, optionValue } = option;
						return (
							<option key={optionValue} value={optionValue}>
								{optionName}
							</option>
						);
					})}
				</select>
			);
		default:
			console.error(`${fieldId} does not have a valid field type.`);
	}
};

export default FieldElement;
