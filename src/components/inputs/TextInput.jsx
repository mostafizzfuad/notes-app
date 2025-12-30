const TextInput = ({
	label,
	name,
	value,
	onChange,
	required = false,
	type = "text",
	placeholder = "",
}) => {
	return (
		<div className="mb-4">
			<label className="block font-semibold">{label}:</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className="w-full p-2 border rounded-lg"
				required={required}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextInput;
