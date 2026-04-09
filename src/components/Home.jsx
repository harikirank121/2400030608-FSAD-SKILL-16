import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            <h2>Welcome Home</h2>
        </div>
    );
}

export default Home;