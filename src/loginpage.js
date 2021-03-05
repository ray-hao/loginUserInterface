import React, {useState} from "react"

function LoginPage({Login, error}) {

    const [info, setInfo] = useState({name:"", email:"", password:""})

    const handleSubmit = (e) => {
        e.preventDefault()

        Login(info)

    }

    return (
        <form onSubmit={handleSubmit}> 
            <div className="inside">
                <h2>Login Information</h2>
                {(error != "") ? <div className="error">{error}</div> : ""}
                <div className="inputHere">
                    <label>Name:</label>
                    <input type="text" name="name" id="name" value={info.name} onChange={(e) => {setInfo({...info, name:e.target.value})}} />
                </div>
                <div className="inputHere">
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={info.email} onChange={(e) => {setInfo({...info, email:e.target.value})}} />
                </div>
                <div className="inputHere">
                    <label>Password:</label>
                    <input type="pswd" name="pswd" id="pswd" value={info.password} onChange={(e) => {setInfo({...info, password:e.target.value})}}/>
                </div>
                <input type="submit" value="Login!" />
            </div>
        </form>
    )
}

export default LoginPage