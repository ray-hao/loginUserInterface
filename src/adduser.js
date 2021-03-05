import React, {useState} from "react"
import LoginPage from "./loginpage"
import Login from "./login"

function AddUser() {
    
    const [newUser, setNewUser] = useState({email:"", password:""})
    const [finished, setFinished] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        setFinished(!finished)

    }

    return (
        <div className = "newPerson">
            {(finished) ? (
                <Login newUser={newUser} />
            ) : (
                <div className="newInput">
                    <form onSubmit={handleSubmit}>
                        <h2>Add a new User</h2>
                        <div className="newEmail">
                            <label>Email:</label>
                            <input type="email" id="email" name="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                        </div>
                        <div className="newEmail">
                            <label>Password:</label>
                            <input type="password" id="password" name="password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                        </div>
                        <input type="submit" value="Add User" />
                    </form>
                </div>
            )}
        </div>
    )
}

export default AddUser