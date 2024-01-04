import RestaurantCard from "./RestaurantCard";
import {resList,resList1} from "../utils/mockData";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { Bengaluru,Bubaneshwar,Kolkata } from "../utils/constants";

import { Link } from "react-router-dom";

const Body =() =>{
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const[searchText,setSearchText]= useState("");

    // whenever state variables update react triggers a re conciliation cycle 

    useEffect(()=>{
      fetchData();  
    },[] );
    /*
    If no dependency array useEffect is called everytime this component renders
    if depedndency array is empty =>[] useEffect is called only on the inital render (just once )
    if dependency array is [listOfRestaurants] then useEffect is called everytime listOfRestaurants is updated 
     useEffect(()=>{

     })
    */

    const fetchData= async ()=>{
     const data = await fetch(
      Bengaluru
      );

      const json = await data.json();
      //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); 
      setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
      setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
      

    };


   
     console.log("Body rendered");
    return setListOfRestaurant.length===0?(
    <Shimmer/>)
    :(
      <div className="body">
        <div className="filter">
          <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              <button onClick={()=>{
                

                const filte=listOfRestaurants.filter(
                  res=>(res.info.name).toLowerCase().includes(searchText.toLowerCase())
                  
                )
                //console.log(filte);
                setFilteredRestaurant(filte);
              
                console.log(listOfRestaurants)
              }}> Search</button>
          </div>
          
            <button className="filter-btn" onClick={()=>{
                console.log(listOfRestaurants);
               // This is the button which filters restaurants based on the rating 
                const filteredList = listOfRestaurants.filter(
                res => res.info.avgRating>4
                 );

                 setFilteredRestaurant(filteredList)
                console.log(listOfRestaurants);
            }}>Top Rated Restaruants
            </button>
        </div>
        <div className="res-container">
         {
          filteredRestaurant.map((restaurant)=> (
          <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard   resData={restaurant}/></Link>))
         }
  
        </div>
  
      </div>
  
    );
  };

  export default Body;