import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8080";

function Login() {
    const [user, setUser] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${API}/login`, user);

            localStorage.setItem("user", res.data.username);
            navigate("/home");

        } catch {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })} />
                <input placeholder="Password" type="password" onChange={e => setUser({ ...user, password: e.target.value })} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;