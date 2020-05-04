import React, {useState} from 'react'

const Login = () => {
  const [login, setLogin] = useState({username: "", password: ""})


  const handleChange = (e) => {
    const {name, value} = e.target
    setLogin({...login, [name]: value})
  }

return(
  <div>
    <form>
      <label>Username:</label>
      <input type="text" value={login.username} name="username" onChange={handleChange}></input>
      <input type="password" value={login.password} name="password" onChange={handleChange}></input>
      <button type="submit">Login</button>
    </form>
  </div>
)

}

export default Login;