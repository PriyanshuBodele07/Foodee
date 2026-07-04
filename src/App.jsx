import React from 'react'
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return(
    <div>
      <Header/>
      <Body/>
      <div className='flex flex-wrap gap-4'>
      <Restraunt resName = "Meghna Foods" cuisine = "Biryani, North Indian, Asian"/>
      <Restraunt resName = "KFC" cuisine = "Burger, Fast Food"/>
      
      </div>
    

    </div>
  )
}





const Restraunt = (props) =>{
  return(
    <div className='res-card w-48  bg-amber-600 '>
      
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20241007/pngtree-chicken-biryani-with-onions-herbs-image_16340511.jpg" alt="" />
      <h3 className=''>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>


    </div>
  )
}
export default App