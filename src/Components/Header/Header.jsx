import { Link } from "react-router-dom";

export default function Header() {

    // const now = new Date();
    // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");


    return (
        <div className=" md:px-20 px-5 py-5 items-center flex justify-between">
            <div>
                <Link className="flex items-center gap-2" to='/'><img className="md:w-16 w-10" src="https://img.icons8.com/?size=256&id=00Au6tWiN6uX&format=png" alt="" /><span className="md:text-4xl font-semibold"> ToDay</span></Link>
            </div>
            <div className="flex items-center gap-4">
                <Link target="_blank" to='https://www.facebook.com/'> <img className="md:w-10 w-7" src="https://img.icons8.com/?size=256&id=118497&format=png" alt="" /></Link>
                <Link target="_blank" to='https://www.instagram.com/'> <img className="md:w-10 w-7" src="https://img.icons8.com/?size=50&id=Xy10Jcu1L2Su&format=png" alt="" /></Link>
                <Link target="_blank" to='https://www.youtube.com/'> <img className="md:w-10 w-7" src="https://img.icons8.com/?size=50&id=19318&format=png" alt="" /></Link>
            </div>
        </div>
    )
}
