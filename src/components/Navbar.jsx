import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div>
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={() => navigate("/profile")}>Profile</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;