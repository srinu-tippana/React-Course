import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL,MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

import ItemCard from "./ItemCard";


const  RestaurantMenu =()=>{

    const[itemCards,setItemCards] = useState([]);
    const [resInfo,setResInfo] = useState([]);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
 
         const data = await fetch(
            MENU_API+resId
         );

         const json = await data.json();
         console.log(json)
         //console.log(json.data.cards[0].card.card.info);
         setResInfo(json.data.cards[0].card.card.info)
         //setResInfo(json.data)

         setItemCards(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
         
         
         
        };

        if(resInfo.length===0){
            return <Shimmer/>
        }
    
   const {name,cuisines,costForTwoMessage} = resInfo;
   console.log(" the new value");
   console.log(itemCards);
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            
          { /*<div>
            {
            itemCards.map((item)=>(
                <ItemCard key={item.card.info.id} itemData={item} />
            ))
            }
        </div>*/}
           
        </div>

      
        
    )

}

export default RestaurantMenu;
