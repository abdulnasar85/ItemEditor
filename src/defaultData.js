/**
 * @author Mohamed Abdul Nasar
 * Default data required at the component.
 * 
 * PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string,
name: PropTypes.string,
fields: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string,
fieldName: PropTypes.string,
fieldType: PropTypes.oneOf([ 'text', 'option', 'toggle' ]),
fieldValue: PropTypes.oneOfType([
PropTypes.string, PropTypes.number, PropTypes.bool ]),
fieldOptions: PropTypes.ArrayOf(PropTypes.shape({
optionName: PropTypes.string,
optionValue: PropTypes.number
}))
}))
}))
 */
export default [
	{
		id: "abc",
		name: "ABC",
		fields: [
			{
				id: "field1",
				fieldName: "Field 1",
				fieldType: "text",
				fieldValue: "Value 1",
			},
			{
				id: "field2",
				fieldName: "Field 2",
				fieldType: "text",
				fieldValue: "Value 2",
			},
			{
				id: "field3",
				fieldName: "Field 3",
				fieldType: "toggle",
				fieldValue: true,
			},
			{
				id: "field4",
				fieldName: "Field 4",
				fieldType: "option",
				fieldValue: 2,
				fieldOptions: [
					{
						optionName: "option 1",
						optionValue: 1,
					},
					{
						optionName: "option 2",
						optionValue: 2,
					},
					{
						optionName: "option 3",
						optionValue: 3,
					},
				],
			},
			{
				id: "field12",
				fieldName: "Field 12",
				fieldType: "text",
				fieldValue: "Value 1",
			},
			{
				id: "field22",
				fieldName: "Field 22",
				fieldType: "text",
				fieldValue: "Value 2",
			},
			{
				id: "field32",
				fieldName: "Field 32",
				fieldType: "toggle",
				fieldValue: true,
			},
			{
				id: "field42",
				fieldName: "Field 42",
				fieldType: "option",
				fieldValue: 2,
				fieldOptions: [
					{
						optionName: "option 1",
						optionValue: 1,
					},
					{
						optionName: "option 2",
						optionValue: 2,
					},
					{
						optionName: "option 3",
						optionValue: 3,
					},
				],
			},
		],
	},
	{
		id: "def",
		name: "DEF",
		fields: [
			{
				id: "field2",
				fieldName: "Field 2",
				fieldType: "toggle",
				fieldValue: false,
			},
		],
	},
	{
		id: "ghi",
		name: "GHI",
		fields: [
			{
				id: "field3",
				fieldName: "Field 3",
				fieldType: "option",
				fieldValue: 2,
				fieldOptions: [
					{
						optionName: "option 1",
						optionValue: 1,
					},
					{
						optionName: "option 2",
						optionValue: 2,
					},
					{
						optionName: "option 3",
						optionValue: 3,
					},
				],
			},
		],
	},
	{
		id: "jkl",
		name: "JKL",
		fields: [
			{
				id: "field3",
				fieldName: "Field 3",
				fieldType: "option",
				fieldValue: 2,
				fieldOptions: [
					{
						optionName: "option 1",
						optionValue: 1,
					},
					{
						optionName: "option 2",
						optionValue: 2,
					},
					{
						optionName: "option 3",
						optionValue: 3,
					},
				],
			},
		],
	},
	{
		id: "mno",
		name: "MNO",
		fields: [
			{
				id: "field1",
				fieldName: "Field 1",
				fieldType: "text",
				fieldValue: "Value 1",
			},
			{
				id: "field2",
				fieldName: "Field 2",
				fieldType: "toggle",
				fieldValue: true,
			},
		],
	},
	{
		id: "pqr",
		name: "PQR",
		fields: [
			{
				id: "field1",
				fieldName: "Field 1",
				fieldType: "text",
				fieldValue: "Value 1",
			},
			{
				id: "field2",
				fieldName: "Field 2",
				fieldType: "toggle",
				fieldValue: false,
			},
		],
	},
];
