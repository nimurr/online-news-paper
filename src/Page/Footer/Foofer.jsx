import { Link } from "react-router-dom";

export default function Foofer() {
    return (
        <div className="md:px-20 px-5 py-10 bg-red-100">
            <footer className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 justify-between">
                <div>
                    <Link className="flex items-center gap-2" to='/'><img className="md:w-16 w-10" src="https://img.icons8.com/?size=256&id=00Au6tWiN6uX&format=png" alt="" /><span className="md:text-4xl font-semibold"> ToDay</span></Link>
                    <p className="font-semibold">Dhaka , Bangladesh</p>
                    <a className="text-sm">nimurnerob404@gmail.com</a>
                </div>
                <ul>
                    <Link to='/'><li>All</li></Link>
                    <li>Local</li>
                    <li>International</li>
                    <li>Sports</li>
                    <li>Politic</li>
                </ul>
                <ul>
                    <Link><li>Bangladesh</li></Link>
                    <li>Europe</li>
                    <li>USA</li>
                    <li>Asia</li>
                    <li>Africa</li>
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
