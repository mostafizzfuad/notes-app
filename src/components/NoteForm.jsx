import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		category: "Work", // ডিফল্ট ভ্যালু Work
		priority: "Medium", // ডিফল্ট ভ্যালু Medium
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // ১. পেজ রিলোড হওয়া বন্ধ করা

		// ২. ভ্যালিডেশন: টাইটেল বা ডেসক্রিপশন না থাকলে রিটার্ন করা
		if (!formData.title || !formData.description) return;

		// ৩. নতুন নোট অবজেক্ট তৈরি করা (ইউনিক ID সহ)
		const newNote = { id: Date.now(), ...formData };

		// ৪. নোটস অ্যারে আপডেট করা (Immutability বজায় রেখে)
		setNotes([newNote, ...notes]);

		// ৫. ফর্ম রিসেট করা
		setFormData({
			title: "",
			description: "",
			category: "Work",
			priority: "Medium",
		});

		// সাবমিট করার পর ফর্ম লুকিয়ে ফেলা হচ্ছে
		setIsFormVisible(false);
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-6">
			{/* Toggle Button */}
			<button
				onClick={() => setIsFormVisible(!isFormVisible)}
				className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4 font-semibold"
			>
				{isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
			</button>

			{/* Form - শুধুমাত্র isFormVisible সত্য হলেই দেখাবে */}
			{isFormVisible && (
				<form className="mb-6">
					{/* Title Input */}
					<TextInput
						label="Title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						required
					/>

					{/* Priority Select */}
					<SelectInput
						label="Priority"
						name="priority"
						value={formData.priority}
						onChange={handleChange}
						options={[
							{ value: "High", label: "🔴 High" },
							{ value: "Medium", label: "🟠 Medium" },
							{ value: "Low", label: "🟢 Low" },
						]}
					/>

					{/* Category Select */}
					<SelectInput
						label="Category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						options={[
							{ value: "Work", label: "📂 Work" },
							{ value: "Personal", label: "🏠 Personal" },
							{ value: "Ideas", label: "💡 Ideas" },
						]}
					/>

					{/* Description Textarea */}
					<TextareaInput
						label="Description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						required
						placeholder="Write your note details..."
					/>

					<button
						type="submit"
						onClick={handleSubmit}
						className="w-full bg-purple-500 text-white cursor-pointer py-2 rounded-lg hover:bg-purple-600 transition"
					>
						Add Note
					</button>
				</form>
			)}
		</div>
	);
};

export default NoteForm;
