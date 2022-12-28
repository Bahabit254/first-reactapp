import { useState } from "react"
import { useAuth } from "./auths"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [user, setUser] = useState('')
    const auths = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auths.login(user)
        navigate('/')
    }
    return (
        <div>
            <label>
              Username: {' '}
              <input type='text' onChange={(e) => setUser(e.target.value())}></input>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}