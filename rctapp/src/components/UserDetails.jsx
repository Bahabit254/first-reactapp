import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const params = useParams()
    const userId = params.userId
    return (
        <div><h3>Users details {userId}</h3></div>
    )
}