import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
	const [notes, setNotes] = useState([]); // নোটস এর জন্য গ্লোবাল স্টেট (বাই ডিফল্ট ফাঁকা অ্যারে)

	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};

	return (
		<div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-center">
				📝 Notes App
			</h2>

			{/* ফর্ম কম্পোনেন্ট */}
			<NoteForm notes={notes} setNotes={setNotes} />

			{/* লিস্ট কম্পোনেন্ট - এখানে আমরা notes স্টেট পাস করছি */}
			<NoteList notes={notes} deleteNote={deleteNote} />
		</div>
	);
};

export default App;
