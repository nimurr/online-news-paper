import { Link, useLoaderData } from "react-router-dom"
import HomeSingle from "./HomeSingle";
import { useEffect, useState } from "react";
import  { Toaster } from "react-hot-toast";


export default function Home() {
    const newsData = useLoaderData();
    const [currentPage,setCurrentPage]=useState(1)
    const [newsPerPage,setNewsPerPage]=useState(5);

    
    const dataLength = newsData.length;
    // console.log(dataLength)
    // const newsPerPage=5;
    const totalPages =Math.ceil(dataLength/newsPerPage)
    const startIndex =((currentPage-1)*newsPerPage);
    const endIndex = startIndex + newsPerPage;
    
    const sliceddata = newsData.slice(startIndex,endIndex);

// console.log(sliceddata)
    // let numbers =[]
    // for(let i=0;i<totalPages;i++){
        
    //     numbers.push(i)
    // }
    const numbers =[...Array(totalPages).keys()]



    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        fetch('Allnews.json')
            .then(res => res.json())
            .then(data => setSearchData(data))
    }, [])

    const [ser, setSer] = useState([]);
    const [tru, setTru] = useState(true);

    const handleSearchBtn = (e) => {
        e.preventDefault();
        const inputValue = e.target.text.value;
        const findss = searchData.filter(data => data.title.toLowerCase().includes(inputValue.toLowerCase()));
        setTru(false)
        setSer(findss)

        // const finds = searchData.filter(data => data.category.toLowerCase() == inputValue.toLowerCase());
    }


    // const [allDat, setShowAllData] = useState(false);
    // const handleShowAllBtn = () => {
    //     setShowAllData(!allDat);
    // }
    const options=[3,5,7,10]
    function setoption(event){
        setNewsPerPage(parseInt(event.target.value))
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <p className="flex items-center border-red-500 border-t border-b">
                <span className="bg-red-500 text-[10px] sm:text-xl md:w-2/12 md:p-4 p-1 text-center font-semibold text-white">Breaking News</span>
                <marquee className='text-[10px] sm:text-[18px]' >
                    Dhaka population density <Link className="text-blue-500" to='/local'>likely</Link> to soar as building height limits relaxed | CHEC committed to social responsibilities | CCECC contributes to Bangladesh’s connectivity with the world dolor veniam nam excepturi. Suscipit id et nulla! Officia eaque laborum a sit numquam quas alias autem quibusdam minima, natus sequi quis aspernatur in doloremque cum? Iusto iste perspiciatis eum suscipit quibusdam fuga, laboriosam illo rem assumenda deleniti praesentium. Quae fuga distinctio repellat est delectus commodi alias quos exercitationem necessitatibus voluptatum odit ipsa veritatis obcaecati labore, quasi ullam autem illum perspiciatis corrupti minima molestiae animi!. alias quos exercitationem necessitatibus voluptatum odit ipsa veritatis obcaecati labore, quasi ullam autem illum perspiciatis corrupti minima molestiae animi!.
                </marquee>
            </p>


            <div className=" sm:w-4/12 mx-auto my-5 sm:px-0 px-4">
                <form onSubmit={handleSearchBtn}>
                    <label className="rounded-md overflow-hidden w-full p-1 flex items-center">
                        <input className="p-2 bg-gray-200 outline-none w-10/12" name='text' type="text" placeholder="Search Category ..." />
                        <button className="bg-red-500 p-2 text-white font-semibold ">Search</button>
                    </label>
                </form>
            </div>


            {
                tru ?
                    <div className="w-11/12 my-4 mx-auto ">
                        <h2 className="text-xl text-center my-4 py-1 w-36 mx-auto border-b-2 border-red-600">Top News</h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            <img className="h-full " src="https://images.prothomalo.com/prothomalo-english%2F2023-10%2Fa8215815-7339-4234-914a-da54a743f09c%2FRena_bitter_khurshed_Alam.webp?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0" alt="" />
                            <div>
                                <h2 className="text-2xl font-semibold">No discussion on visa policy with Rena Bitter: Acting foreign secretary</h2>
                                <p className="my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure adipisci atque eveniet, nemo expedita enim ea architecto maiores, ratione, dolor veniam nam excepturi. Suscipit id et nulla! Officia eaque laborum a sit numquam quas alias autem quibusdam minima, natus sequi quis aspernatur in doloremque cum? Iusto iste perspiciatis eum suscipit quibusdam fuga, laboriosam illo rem assumenda deleniti praesentium. Quae fuga distinctio repellat est delectus commodi alias quos exercitationem necessitatibus voluptatum odit ipsa veritatis obcaecati labore, quasi ullam autem illum perspiciatis corrupti minima molestiae animi!. alias quos exercitationem necessitatibus voluptatum odit ipsa veritatis obcaecati labore, quasi ullam autem illum perspiciatis corrupti minima molestiae animi!.</p>
                            </div>
                        </div>

                    <h2 className="text-xl text-center mt-10 py-1 w-36 mx-auto border-b-2 border-red-600">ALL News</h2>
                     
                     <div className="my-10 md:w-full gap-4 mx-auto grid md:grid-cols-3">
                            <div className="col-span-3 md:col-span-2  grid md:grid-cols-2 gap-4">
                                {
                                    sliceddata.map(data => <HomeSingle key={data.id} data={data}> </HomeSingle>)
                                }
                            </div>
                            <div className="col-span-1 hidden md:block bg-blue-50 "> 
                                <h2 className="text-xl flex justify-center items-center gap-2 font-semibold text-center mb-4 text-white bg-red-500 p-2 rounded"><img className="w-10" src="https://img.icons8.com/?size=256&id=ui4CTPMMDCFh&format=png" alt="" />Google Ads </h2>
                                <img className="rounded-md sticky top-20 w-8/12 mx-auto" src="https://marketplace.canva.com/EAFrLlabCoM/1/0/900w/canva-blue-and-white-clean-and-simple-tumbler-sale-promotion-instagram-story-t5ZOPAyoXjE.jpg" alt="" />
                                {/* <img className="rounded-md w-8/12 mx-auto mt-6" src="https://marketplace.canva.com/EAFmo428tiU/1/0/225w/canva-Ja-rbC13jYw.jpg" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    : <h2 className="text-4xl text-center my-10 font-bold text-red-500"> {ser ? '' : 'Search Result Data Not Found... !'} </h2>
            }

            <div className="mt-10 md:w-10/12 w-11/12 gap-4 mx-auto grid md:grid-cols-2" >
                {
                    
                    ser.map(data => <HomeSingle key={data.id} data={data}></HomeSingle>)
                }
            </div>
            <div className="pagination text-center ">
                {
                    numbers.map(number=><button className={`${currentPage===number+1 ? "bg-red-700 text-white":'bg-gray-300' } px-2 mx-1 rounded`} key={number} onClick={()=>setCurrentPage(number+1)}>{number+1}</button>)
                }
              <select value={newsPerPage} onChange={setoption} className="bg-blue-500 rounded p-1 text-white">
                {
                     
                        options.map(option=><option key={option} value={option} >{option}</option>)
                       
                }
              </select>
            </div>


        </div>
    )
}
