import { NavLink } from "react-router-dom";

 
export default function CetagoryItem() {
  return (
    <div className="flex justify-center border-b border-t bg-white z-50 px-4 ms:px-0 sticky top-0">
        <ul className="flex items-center justify-center flex-wrap  gap-4 py-4">
            <li><NavLink className='font-semibold  px-2 py-1 ' to='/'>All</NavLink></li>
            <li><NavLink className='font-semibold  px-2 py-1 ' to='/local'>Local</NavLink></li>
            <li><NavLink className='font-semibold  px-2 py-1 ' to='/international'>International</NavLink></li>
            <li><NavLink className='font-semibold  px-2 py-1 ' to='/sports'>Sports</NavLink></li>
            <li><NavLink className='font-semibold  px-2 py-1 ' to='/politics'>Politics</NavLink></li>
        </ul>
    </div>
  )
}
