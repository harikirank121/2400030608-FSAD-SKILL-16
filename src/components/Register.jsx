import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8080";

function Register() {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`${API}/register`, user);
        alert("Registered Successfully");
        navigate("/login");
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
                <input placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
                <input placeholder="Password" type="password" onChange={e => setUser({ ...user, password: e.target.value })} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;