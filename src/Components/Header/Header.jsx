// import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {


    return (
        <div className=" md:px-20 px-5 py-5 items-center flex justify-between">
            <div>
                <Link className="flex items-center gap-2" to='/'><img className="md:w-40 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjngjsusVVaqGmmNKRM-XDXyFOY2nga35ettFCExfLX1Tr-d9oUPh1NmvPWylu42Jz7Q&usqp=CAU" alt="" /></Link>
            </div>
            <div className="flex items-center gap-4">
                <Link target="_blank" to='https://www.facebook.com/'> <img className="md:w-10 w-7" src="https://img.icons8.com/?size=256&id=118497&format=png" alt="" /></Link>
                <Link target="_blank" to='https://www.instagram.com/'> <img className="md:w-10 w-7" src="https://img.icons8.com/?size=50&id=Xy10Jcu1L2Su&format=png" alt="" /></Link>
                <Link target="_blank" to='https://www.youtube.com/'> <img className="md:w-10 w-7" src="https://img.icons8.com/?size=50&id=19318&format=png" alt="" /></Link>
            </div>
        </div>
    )
}
