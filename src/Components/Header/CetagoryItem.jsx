import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviter/AuthProviter";
import { GoogleAuthProvider } from "firebase/auth";
import { Toaster } from "react-hot-toast";


export default function CetagoryItem() {
  const { signInWithGoogle, user, logOut } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithGoogle(provider)
      .then(result => {
        // toast.success('Successfully toasted!')
        console.log(result.user)
        navigate(location.state)
      })
      .catch(error => {
        // toast.error("This didn't work.")
        console.log(error)

      })
  }

  const handlelogout = () => {
    logOut();
  }

  // console.log(user.displayName)
  return (
    <div className="flex justify-center border-b border-t bg-white z-50 px-4 ms:px-0 sticky top-0">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ul className="flex items-center justify-center flex-wrap  gap-4 py-4">
        <li><NavLink className='font-semibold  px-2 py-1 ' to='/'>All</NavLink></li>
        <li><NavLink className='font-semibold  px-2 py-1 ' to='/local'>Local</NavLink></li>
        <li><NavLink className='font-semibold  px-2 py-1 ' to='/international'>International</NavLink></li>
        <li><NavLink className='font-semibold  px-2 py-1 ' to='/sports'>Sports</NavLink></li>
        <li><NavLink className='font-semibold  px-2 py-1 ' to='/politics'>Politics</NavLink></li>
        <li><NavLink className='font-semibold  px-2 py-1 ' to='/dashboard'>Dashboard</NavLink></li>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {
          user && <img onClick={() => document.getElementById('my_modal_4').showModal()} className="w-10 rounded-full cursor-pointer border-2 border-red-500" src={user.photoURL} alt="" />
        }
        {
          user &&
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <div className="text-center my-5">
                <img className="w-10 mx-auto rounded-full" src={user.photoURL} alt="" />
                <h3 className="font-bold text-lg">{user.displayName}</h3>
                <p className="py-2">{user.email}</p>
              </div>
            </div>
          </dialog>
        }


        {
          !user ?
            <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}><i className='bx bxs-user'></i> Login</button>
            : <button onClick={handlelogout} className="btn bg-red-500 hover:bg-red-600 text-white">logOut <i className='bx text-xl bx-right-arrow-alt'></i></button>
        }

        {
          !user &&
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h2 className="text-center my-4 text-xl font-semibold">Login with Google</h2>
                <button onClick={handleLogin} className="btn  mx-auto w-full flex bg-slate-200"><img className="w-10" src="https://img.icons8.com/?size=256&id=V5cGWnc9R4xj&format=png" alt="" />Google</button>
              </form>
            </div>
          </dialog>
        }


      </ul>
    </div>
  )
}
