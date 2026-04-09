import { useState, useEffect } from "react";
import axios from "axios";

function StudentList({ setSelected, refreshFlag }) {
    const [students, setStudents] = useState([]);

    const fetchData = () => {
        axios
            .get("http://localhost:8080/students")
            .then((res) => setStudents(res.data));
    };

    useEffect(() => {
        fetchData();
    }, [refreshFlag]);

    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8080/students/${id}`);
        fetchData();
    };

    return (
        <div>
            <h2>Student List</h2>

            {students.map((s) => (
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