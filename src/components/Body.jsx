const Body = () => {
  return(
    <div>
        {/* search bar */}
      <div className="flex justify-center mt-10">
            <div className="flex items-center w-[70%] h-16 border border-gray-300 rounded-xl px-6 shadow-sm bg-white">
                <input type="text" placeholder="Search for restarunts and food" className="flex-1 outline-none  text-lg placeholder:text-gray-500"/>

                <button className="text-2xl text-gray-500 hover:text-gray-500">🔍</button>
            </div>
      </div>
      <div className='restraunt-card'>
        
      </div>
    </div>
  )
}
export default Body;