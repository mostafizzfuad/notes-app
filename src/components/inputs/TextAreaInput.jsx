const TextareaInput = ({
	label,
	name,
	value,
	onChange,
	required = false,
	rows = 3,
	placeholder = "",
}) => {
	return (
		<div className="mb-4">
			<label className="block font-semibold">{label}:</label>
			<textarea
				name={name}
				value={value}
				onChange={onChange}
				className="w-full p-2 border rounded-lg"
				required={required}
				rows={rows}
				placeholder={placeholder}
			></textarea>
		</div>
	);
};

export default TextareaInput;
