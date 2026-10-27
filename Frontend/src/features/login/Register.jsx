import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './register.css'

function Register() {
    const [newuser, setNewuser] = useState({
        name: "",
        age: "",
        gender: "",
        password: ""
    })

    const navigate = useNavigate()

    function addUser() {
        fetch("http://localhost:4000/users/adduser", {
            method: "POST",
            body: JSON.stringify(newuser),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(()=>alert("Register Successful"))

        navigate("/")
    }

    return (
        <div className="register-container">
            <h2>Create Account</h2>

            <label>Username</label>
            <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) =>
                    setNewuser({ ...newuser, name: e.target.value })
                }
            />

            <label>Age</label>
            <input
                type="number"
                placeholder="Enter your age"
                onChange={(e) =>
                    setNewuser({ ...newuser, age: e.target.value })
                }
            />

            <label>Gender</label>
            <select
                value={newuser.gender}
                onChange={(e) =>
                    setNewuser({ ...newuser, gender: e.target.value })
                }
            >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>

            <label>Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                    setNewuser({ ...newuser, password: e.target.value })
                }
            />

            <button onClick={addUser}>Register</button>
        </div>
    )
}

export default Register