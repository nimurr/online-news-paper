import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"

export default function ViewDetailsnews() {
    const SingleNews = useLoaderData();
    const { id } = useParams();

    const [details, setDetails] = useState({});
    useEffect(() => {
        const getNews = SingleNews.find(dt => dt.id == id);
        setDetails(getNews)
        // console.log(getNews)
    }, [id])
    

    return (
        <div className="w-6/12 mx-auto">
            <img className="w-full mx-auto" src={details.img} alt="" />
            <h3 className="font-semibold text-2xl mt-10">{details.title}</h3>
            <h3 className="font-semibold">Location : {details.location}</h3>
            <p className="font-semibold text-sm">Category: {details.category}</p>
            <p className="text-justify my-5">{details.description}</p>
        </div>
    )
}
