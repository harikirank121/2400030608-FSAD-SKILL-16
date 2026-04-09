import { useState, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function StudentList({ setSelected, refreshFlag }) {
    const [students, setStudents] = useState([]);

    const fetchData = () => {
        axios.get(`${API}/students`)
            .then(res => setStudents(res.data));
    };

    useEffect(() => {
        fetchData();
    }, [refreshFlag]);

    const deleteStudent = async (id) => {
        await axios.delete(`${API}/students/${id}`);
        fetchData();
    };

    return (
        <div>
            <h2>Student List</h2>
            {students.map(s => (
                <div key={s.id}>
                    {s.name} | {s.email} | {s.course}
                    <button onClick={() => deleteStudent(s.id)}>Delete</button>
                    <button onClick={() => setSelected(s)}>Update</button>
                </div>
            ))}
        </div>
    );
}

export default StudentList;