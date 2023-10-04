import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviter/AuthProviter";


export default function Login() {
  const { loading , user} = useContext(AuthContext)


    const location = useLocation();
    const navigate = useNavigate();

    if(user){
        // return navigate(location.state);
    }
  

    const handlegohome = () =>{
        navigate(location.state)
    }

    if(loading){
        return <span className="loading loading-dots mx-auto w-12 block"></span>;
    }
    return (
        <div className="text-center my-20">
            <h2 className="text-3xl font-semibold">You can not Access <span className="text-blue-400">Dashboard</span> With Out Login .</h2>
            <h3 className="text-xl my-4">Click Login Button <i className='bx bxs-hand-up'></i></h3>
            <Link onClick={handlegohome} to='/'>
                <button className="btn bg-red-500 hover:bg-red-600 text-white">
                <i className='bx bx-home-alt-2'></i> Home & Login
                </button>
            </Link>
        </div >
    )
}
