
import  {CDN_URL} from "../utils/constants"

const RestaurantCard =(props) =>{
 
    const{resData}=props;
  /* While destructuirng the key values in the const{key} this should match with actual name */
  //console.log(resData.info);
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData.info;
  
    
    
      return(
          <div className="res-card" style={{
            backgroundColor:"#f0f0f0",
          }}>
               <img className="res-logo" alt="Image Loading"   src={CDN_URL+cloudinaryImageId}></img>
              <h3>{name}</h3>
              <h4>{cuisines[0]}</h4>
              <h4>{avgRating}</h4>
              <h4>{costForTwo}</h4>
              <h4>34</h4>
             
          </div>
  
      );
  
  };

  export default RestaurantCard;