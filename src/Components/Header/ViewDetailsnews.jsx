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


    const handleComments = (e) =>{

        e.preventDefault();
        const inputValue = e.target.text.value ; 
        const comments = document.getElementById('comments');
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', 'https://img.icons8.com/?size=256&id=13042&format=png')
        div.classList.add('commentsAll');

        if(inputValue){
            div.innerHTML = img;
            div.innerText = inputValue;
            // p.innerText = inputValue;
            comments.appendChild(div);         
        }
       

        e.target.text.value = '';
    }


    return (
        <div className="md:w-6/12 md:px-0 px-4 mx-auto mb-4">
            <div className="">
                <img className="w-full mx-auto" src={details.img} alt="" />
                <h3 className="font-semibold text-2xl mt-10">{details.title}</h3>
                <h3 className="font-semibold">Location : {details.location}</h3>
                <p className="font-semibold text-sm">Category: {details.category}</p>
                <p className="text-justify my-5">{details.description}</p>
            </div>
            <div className="border p-4">
                <h1 className="text-xl font-semibold">Comments</h1>
                <div id="comments" className="my-4">

                </div>
                <form onSubmit={handleComments}>
                    <label className="flex items-center bg-gray-200 justify-between p-2 my-4 rounded">
                        <input id="commentInput" className="md:p-2 outline-none bg-gray-200 w-8/12" name='text' type="text" placeholder="Comment .." />
                        <button type="submit"><img id="commentSend" className="md:w-10 w-7 cursor-pointer" src="https://img.icons8.com/?size=50&id=tcefkj4jmLp3&format=png" alt="" /></button>
                    </label>
                </form>
            </div>
        </div>
    )
}

