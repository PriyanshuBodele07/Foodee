import React from 'react'

const App = () => {
  return(
    <div>
      <Header/>
      <Body/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>
      <Restraunt/>

    </div>
  )
}

const Header = () => {
  return(
    <div className='border-b border-amber-400 bg-pink-400 flex justify-between px-8 py-4'>
      <div className='logo-container'>
        <img className='w-23' src="https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
      <div className=''>
        <ul className='flex gap-6 px-8 py-4'>
          <li className='text-lg font-medium'>Home</li>
          <li className='text-lg font-medium'>About Us</li>
          <li className='text-lg font-medium'>Contact Us</li>
          <li className='text-lg font-medium'>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const Body = () => {
  return(
    <div>
      <div>search</div>
      <div className='restraunt-card'>
        
      </div>
    </div>
  )
}

const Restraunt = () =>{
  return(
    <div className='res-card w-48 h-48 bg-amber-600'>
      
      <img src="" alt="" />
      <h3 className=''>Meghna Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>


    </div>
  )
}
export default App