import { useLoaderData } from "react-router-dom"
import HomeSingle from "./HomeSingle";
import { useState } from "react";


export default function Home() {

    const newsData  = useLoaderData();

    const  [allDat , setShowAllData] = useState(false);

    const handleShowAllBtn = () =>{
        setShowAllData(!allDat);

    }
    console.log(allDat)


    return (
        <div>
            {/* <marquee className='-z-10 py-4 text-2xl mb-2 text-red-500 bg-red-100' direction="">Dhaka population density likely to soar as building height limits relaxed | CHEC committed to social responsibilities | CCECC contributes to Bangladesh’s connectivity with the world </marquee> */}
            <div  className="w-11/12 my-4 mx-auto ">

                <div className="grid grid-cols-2 gap-5">
                    <img className="h-full" src="https://images.prothomalo.com/prothomalo-english%2F2023-10%2Fa8215815-7339-4234-914a-da54a743f09c%2FRena_bitter_khurshed_Alam.webp?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0" alt="" />
                    <div>
                        <h2 className="text-2xl font-semibold">No discussion on visa policy with Rena Bitter: Acting foreign secretary</h2>
                        <p className="my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure adipisci atque eveniet, nemo expedita enim ea architecto maiores, ratione, dolor veniam nam excepturi. Suscipit id et nulla! Officia eaque laborum a sit numquam quas alias autem quibusdam minima, natus sequi quis aspernatur in doloremque cum? Iusto iste perspiciatis eum suscipit quibusdam fuga, laboriosam illo rem assumenda deleniti praesentium. Quae fuga distinctio repellat est delectus commodi alias quos exercitationem necessitatibus voluptatum odit ipsa veritatis obcaecati labore, quasi ullam autem illum perspiciatis corrupti minima molestiae animi!. alias quos exercitationem necessitatibus voluptatum odit ipsa veritatis obcaecati labore, quasi ullam autem illum perspiciatis corrupti minima molestiae animi!.</p>
                    </div>
                </div>


                <div className="my-10 w-10/12 gap-4 mx-auto grid grid-cols-2">
                    {
                      !allDat? newsData.slice(0,6).map(data => <HomeSingle key={data.id} data={data}> </HomeSingle>) : newsData.map(data => <HomeSingle key={data.id} data={data}> </HomeSingle>) 
                    }
                </div>

                <button onClick={handleShowAllBtn} className="w-36 mx-auto bg-red-500 block my-5 font-semibold rounded text-white py-2">{!allDat ? 'View All': 'Less All'}</button>


            </div>
        </div>
    )
}