import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";



const Body = () => {

    const [listofRes, setlistofRes] = useState(resList);
    const [filteredRestautant, setFilteredRestaurant] = useState(resList);
    const [searchText, setSerchText] = useState();

  //  useEffect(() => {
  //   fetchData();
  //  },[]);

  //  const fetchData = async () => {
  //   const data = await fetch();

  //   const json = await data.json();
  //   //optional chaning
  //   setlistofRes(json?.data);
  //  }

  // if (listofRes === 0) {
  //   return <Shimmer/>
  // }

  return(
    <div>
        {/* search bar */}
      <div className="flex justify-center mt-10 mb-10">
            <div className="flex items-center w-[70%] h-16 border border-gray-300 rounded-xl px-6 shadow-sm bg-white">
                <input type="text" placeholder="Search for restarunts and food" className="flex-1 outline-none  text-lg placeholder:text-gray-500"
                value={searchText} onChange={(e) => {
                  setSerchText(e.target.value);
                }}/>

                <button className="text-2xl text-gray-500 hover:text-gray-500" onClick={() => {
                  // filter the restaurant cards and update the Ui
                  // searchText
                    const filteredRes = listofRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRes);
                }}>search🔍</button>
            </div>
      </div>
      <div className="flex justify-end">
        <button className="text-2xl text-gray-500 hover:text-gray-500 bg-black"  onClick={() => {
        const filteredList = listofRes.filter((res) => res.info.avgRating > 4);
        setlistofRes(filteredList);
      }}>highRating</button>

      </div>
      
      {/* restaurant cards */}

      <div className='flex flex-wrap gap-4 justify-center'>
      {
        filteredRestautant.map((Restraunt) => (
          <RestrauntCard key={Restraunt.info.id} resData={Restraunt} />
        ))
      }   
      </div>
      
    </div>
  )
}
export default Body;