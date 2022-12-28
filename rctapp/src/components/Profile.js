import { useNavigate } from "react-router-dom"
import { useAuth } from "./auths"


export const Profile = () => {
    const auths = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auths.logout()
        navigate('/')
    }
    return (
        <div>
            Welcome {auths.user}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}