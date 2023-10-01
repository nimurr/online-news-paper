import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom"

export default function LocalNews() {


    const newsAll = useLoaderData();
    const [datas, setData] = useState([]);

    useEffect(() => {
        const dataFind = newsAll.filter(data => data.category == 'Local')
        setData(dataFind)
    }, [])
    
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-5">Local News</h2>
            <div className="grid grid-cols-2 gap-4 w-8/12 mx-auto">
                {
                    datas.map(data => <div className=" border-2" key={data.id}>
                        <div className="mx-auto">
                            <img className="w-full mx-auto h-[35vh] " src={data.img} alt="" />
                            <div className="p-4">
                                <h3 className="font-semibold text-xl">{data.title}</h3>
                                <h3 className="font-semibold">Location : {data.location}</h3>
                                <p className="font-semibold text-sm">Category: {data.category}</p>
                                <p className="text-justify my-5">{data.description.slice(0, 100)}</p>
                                <Link to={`/${data.id}`}><button className="px-4 py-2 text-white rounded font-semibold text-sm bg-red-500">View Details</button></Link>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    )
}

