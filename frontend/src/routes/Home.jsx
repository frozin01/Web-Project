import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import "../App.css";

const API_URL = "http://localhost:5000/api/notes";

function Home() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);

  // Fetch notes
  useEffect(() => {
    fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => res.json())
      .then(setNotes)
      .catch(console.error);
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add note
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) return;
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(form),
    });
    const newNote = await res.json();
    setNotes([...notes, newNote]);
    setForm({ title: "", description: "" });
  };

  // Delete note
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    setNotes(notes.filter((note) => note._id !== id));
  };

  // Edit note
  const handleEdit = (note) => {
    setEditId(note._id);
    setForm({ title: note.title, description: note.description });
  };

  // Update note
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(form),
    });
    const updatedNote = await res.json();
    setNotes(notes.map((note) => (note._id === editId ? updatedNote : note)));
    setEditId(null);
    setForm({ title: "", description: "" });
  };

  return (
    <div className="home-container">
      <h2>Notes</h2>
      <form onSubmit={editId ? handleUpdate : handleSubmit} className="note-form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <br />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <br />
        <button type="submit" className="add-btn">{editId ? "Update" : "Add"} Note</button>
        {editId && (
          <button type="button" className="cancel-btn" onClick={() => { setEditId(null); setForm({ title: "", description: "" }); }}>
            Cancel
          </button>
        )}
      </form>
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note._id}>
            <NoteCard note={note} onEdit={handleEdit} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;