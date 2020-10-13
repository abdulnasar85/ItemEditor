import React from "react";
import css from "./style.less";
import FieldElement from "./FieldElement";

/**
 * @author Mohamed Abdul Nasar
 * FieldList functional component to paint the fields received from the App component.
 */

const FieldLabel = ({ name }) => <label htmlFor={name}> {name} </label>;

const Field = (props) => {
	const { fieldName } = props;
	return (
		<div className={css.field}>
			<FieldLabel name={fieldName} />
			<FieldElement {...props} />
		</div>
	);
};

const FieldList = (props) => {
	const {
		fields,
		setItems,
		selectedItemId,
		stateHistory,
		setStateHistory,
		items,
	} = props;
	return (
		<div className={css.fieldList}>
			{fields.map((field) => {
				const { id } = field;
				const fieldProps = {
					...field,
					setItems,
					selectedItemId,
					stateHistory,
					setStateHistory,
					items,
				};
				return <Field key={`${selectedItemId}-${id}`} {...fieldProps} />;
			})}
		</div>
	);
};
export default FieldList;
