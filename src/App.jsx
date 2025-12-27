import NoteForm from "./components/NoteForm";
import { useState } from "react";

const App = () => {
	const [notes, setNotes] = useState([]); // নোটস এর জন্য গ্লোবাল স্টেট (বাই ডিফল্ট ফাঁকা অ্যারে)

	return (
		<div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-center">
				📝 Notes App
			</h2>

			{/* প্রপস হিসেবে স্টেট এবং সেটার ফাংশন পাঠানো হচ্ছে */}
			<NoteForm notes={notes} setNotes={setNotes} />
		</div>
	);
};

export default App;
