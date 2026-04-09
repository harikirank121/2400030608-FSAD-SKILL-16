import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080";

function Profile() {
    const [data, setData] = useState({});
    const username = localStorage.getItem("user");

    useEffect(() => {
        axios.get(`${API}/user/${username}`)
            .then(res => setData(res.data));
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
        </div>
    );
}

export default Profile;