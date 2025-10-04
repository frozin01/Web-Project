function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="note-card">
      <strong>{note.title}</strong>
      <p>{note.description}</p>
      <button className="edit-btn" onClick={() => onEdit(note)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
}

export default NoteCard;