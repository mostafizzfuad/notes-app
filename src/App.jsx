import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
	const [notes, setNotes] = useState(() => {
		// ১. লোকাল স্টোরেজ থেকে ডেটা আনার চেষ্টা করা
		const savedNotes = JSON.parse(localStorage.getItem("notes")); // JSON.parse করে স্ট্রিং থেকে অবজেক্টে রূপান্তর করা হচ্ছে
		// ২. যদি ডেটা থাকে তবে সেটি রিটার্ন করা, না থাকলে ফাঁকা অ্যারে
		return savedNotes || [];
	});

	// নোট পরিবর্তন হলে LocalStorage-এ সেভ করা হবে
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

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
