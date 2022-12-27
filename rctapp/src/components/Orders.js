import { useNavigate } from "react-router-dom";

export const Orders = () => {
    const navigate = useNavigate()
    return (
        <>
          <div><h2>Order is on the way</h2></div>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}