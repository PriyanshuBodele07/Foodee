import { CDN_URl } from "../utils/constants";

const RestrauntCard = (props) =>{
  const {resData} = props;

  const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.info; // optional chaning ?
  return(
    <div className='res-card w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer  '>
      
      <img src={ CDN_URl+
        cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>


    </div>
  )
}
export default RestrauntCard;