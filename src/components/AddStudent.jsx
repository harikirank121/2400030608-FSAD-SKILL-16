import { useState, useEffect } from "react";
import axios from "axios";

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
            await axios.put(`http://localhost:8080/students/${selected.id}`, {
                name,
                email,
                course,
            });
            setSelected(null);
        } else {
            await axios.post("http://localhost:8080/students", {
                name,
                email,
                course,
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
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddStudent;