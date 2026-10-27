import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./nav.css"
import { logout } from "../login/userSlice"

const Navbar = function () {
    const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <h1>TaskFlow</h1>

            <div className="navbar-links">
                {token ? (
                    <button onClick={() => dispatch(logout())}>
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar