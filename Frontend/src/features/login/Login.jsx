import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "./userSlice"
import "./login.css"
import { todosApi } from "../../services/todoApi"

function Login() {
  const [users, setUsers] = useState({
    name: "",
    password: ""
  })

  const dispatch = useDispatch()

  function loginUser() {
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(users),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          dispatch(login({ token: data.token, name: data.name }))
          window.localStorage.setItem("token", data.token)
          window.localStorage.setItem("name", data.name)

          dispatch(todosApi.util.resetApiState())
          
        } else {
          alert(data.message || "Login failed")
        }
      })
      .catch((err) => console.log("Login error:", err))
  }

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>

      <label>Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={users.name}
        onChange={(e) =>
          setUsers({ ...users, name: e.target.value })
        }
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={users.password}
        onChange={(e) =>
          setUsers({ ...users, password: e.target.value })
        }
      />

      <button onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login