import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function HomeSingle({ data }) {
    // console.log(data)
    const { id, img, title, description, location, upload_time } = data;

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(data);
    }, [datas])

    const handleViewDetails = () => {
        // const find = datas;
        // console.log(find)
    }

    return (
        <div className="gap-4 shadow-red-400/50 shadow-[0px_0px_10px]  rounded-md overflow-hidden justify-between">
             <img className="h-[35vh] w-full" src={img} alt="" />
            <div className=" flex flex-col justify-between p-4">
                <h2 className="font-semibold text-xl">{title}</h2>
                <h3 className="font-semibold">Location: {location}</h3>
                <h3 className="text-sm ">Upload Date : {upload_time.slice(0, 10)}</h3>
                <div className="my-4 ">
                    <p>{description.slice(0, 200)}..</p>
                </div>
                <Link to={`/${id}`}>
                    <button onClick={handleViewDetails} className="w-36 bg-red-500 font-semibold rounded text-white py-2">View Details</button>
                </Link>
            </div>
        </div>
    )
}


HomeSingle.propTypes = {
    data: PropTypes.object
}