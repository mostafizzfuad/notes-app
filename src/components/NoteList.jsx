import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
	return (
		<div className="space-y-4">
			{/* যদি কোনো নোট না থাকে তবে মেসেজ দেখাও */}
			{notes.length === 0 ? (
				<p className="text-center text-gray-500">No notes yet!</p>
			) : null}

			{/* নোট থাকলে ম্যাপ করে দেখাও */}
			{notes.map((note) => (
				// এখানে আমরা Note কম্পোনেন্ট রেন্ডার করছি এবং প্রপস পাস করছি
				<Note key={note.id} note={note} deleteNote={deleteNote} />
			))}
		</div>
	);
};

export default NoteList;
