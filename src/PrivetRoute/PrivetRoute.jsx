import { useContext } from "react"
import { AuthContext } from "../AuthProviter/AuthProviter"
import { Navigate } from "react-router-dom";

export default function PrivetRoute({ children }) {
    const { user, loading } = useContext(AuthContext)

    if (user) {
        return children;
    }
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}
