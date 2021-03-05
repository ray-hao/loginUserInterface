import React, {useState } from "react"
import LoginPage from "./loginpage"
import AddUser from "./adduser"

function Login({newUser}) {
  
  const [valid, setValid] = useState([{email:"r25hao@uwaterloo.ca", password:"pandasrule"}])
  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")
  const [selected, setSelected] = useState(true)

  useState(() => {
    setValid([...valid, {email: newUser.email, password: newUser.password}])
    
  }, [])

  const Login = (information) => {
    
    valid.map((current) => {
      console.log(user);
      if ((information.email == current.email) && (information.password == current.password)) {
        console.log("Logged In");
        setUser({
          name: information.name,
          email: information.email
        })
      } else {
        setError("Invalid Login!")
      }
    })

  }

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    })

    setError("")
  }

  return (
    <div className="Login">

      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome home, {user.name}</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
          (selected) ? (
            <div className="options">

              <LoginPage Login={Login} error={error} /> 
              <button onClick={() => setSelected(!selected)}>Add User</button>

            </div> )
            : (
            <AddUser />
            )

      )}

    </div>
  );
}

export default Login
