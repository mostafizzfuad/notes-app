import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
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
	};

	return (
		<form className="mb-6">
			<div className="mb-4">
				<label className="block font-semibold">Title:</label>
				<input
					type="text"
					name="title" // এই নাম অবশ্যই স্টেটের key-এর মতো হতে হবে
					value={formData.title} // formData থেকে ভ্যালু নেওয়া হচ্ছে
					onChange={handleChange} // আমাদের নতুন হ্যান্ডলার
					className="w-full p-2 border rounded-lg"
					required
				/>
			</div>

			{/* Priority Dropdown */}
			<div className="mb-4">
				<label className="block font-semibold">Priority:</label>
				<select
					name="priority"
					value={formData.priority}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg"
				>
					<option value="High">🔴 High</option>
					<option value="Medium">🟠 Medium</option>
					<option value="Low">🟢 Low</option>
				</select>
			</div>

			{/* Category Dropdown */}
			<div className="mb-4">
				<label className="block font-semibold">Category:</label>
				<select
					name="category"
					value={formData.category}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg"
				>
					<option value="Work">📂 Work</option>
					<option value="Personal">🏠 Personal</option>
					<option value="Ideas">💡 Ideas</option>
				</select>
			</div>

			{/* Description Textarea */}
			<div className="mb-4">
				<label className="block font-semibold">Description:</label>
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg"
					rows="3"
					placeholder="Write your note details..."
					required
				></textarea>
			</div>

			<button
				type="submit"
				onClick={handleSubmit}
				className="w-full bg-purple-500 text-white cursor-pointer py-2 rounded-lg hover:bg-purple-600 transition"
			>
				Add Note
			</button>
		</form>
	);
};

export default NoteForm;
