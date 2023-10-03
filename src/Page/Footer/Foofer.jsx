import { Link } from "react-router-dom";

export default function Foofer() {
    return (
        <div className="md:px-20 px-5 py-10 bg-red-50">
            <footer className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 justify-between">
                <div>
                <Link className="flex items-center gap-2" to='/'><img className="md:w-40 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjngjsusVVaqGmmNKRM-XDXyFOY2nga35ettFCExfLX1Tr-d9oUPh1NmvPWylu42Jz7Q&usqp=CAU" alt="" /></Link>
                    <p className="font-semibold">Dhaka , Bangladesh</p>
                    <a className="text-sm">nimurnerob404@gmail.com</a>
                </div>
                <ul>
                    <Link className="py-2 hover:text-red-500 duration-100 " to='/'><li  className="my-2 font-semibold">All</li></Link>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/local'>Local</Link></li>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/international'>International</Link></li>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/sports'>Sports</Link></li>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/politics'>Politic</Link></li>
                </ul>
                <ul>
                    <Link className="py-2 hover:text-red-500 duration-100 " to='/'><li  className="my-2 font-semibold">Bangladesh</li></Link>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/'>Europe</Link></li>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/'>USA</Link></li>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/'>Asia</Link></li>
                    <li className="my-2 font-semibold"><Link className="py-2 hover:text-red-500 duration-100 " to='/'>Africa</Link></li>
                </ul>
                <ul>
                    <h2 className="text-xl font-semibold ">Contact</h2>
                    <label className="my-4 bg-white flex items-center rounded overflow-hidden justify-between" htmlFor="">
                        <input className="py-2 px-4 outline-none w-auto " placeholder="Enter Your Email" type="email" name="email" id="" />
                        <button type="submit" className="text-white bg-red-500 h-full p-2 ">Submit</button>
                    </label>
                </ul>
            </footer>
        </div>
    )
}
