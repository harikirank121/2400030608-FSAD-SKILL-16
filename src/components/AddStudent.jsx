import { useState, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function AddStudent({ refresh, selected, setSelected }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    useEffect(() => {
        if (selected) {
            setName(selected.name);
            setEmail(selected.email);
            setCourse(selected.course);
        }
    }, [selected]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selected) {
            await axios.put(`${API}/students/${selected.id}`, {
                name, email, course
            });
            setSelected(null);
        } else {
            await axios.post(`${API}/students`, {
                name, email, course
            });
        }

        setName("");
        setEmail("");
        setCourse("");
        refresh();
    };

    return (
        <div>
            <h2>Add / Update Student</h2>

            <form onSubmit={handleSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input value={course} onChange={e => setCourse(e.target.value)} placeholder="Course" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddStudent;