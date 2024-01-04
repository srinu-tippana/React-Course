/**
 * <div id ="child">
 *     <div id="parent">
 *      </div>
 * </div>
 */
import React from "react";
import  ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body"

import {createBrowserRouter,Outlet,RouterProvider} from  "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const resObj ={
  type: "restaurant",
  data: {
    type: "F",
    id: "334475",
    name: "KFC",
    uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
    city: "1",
    area: "BTM Layout",
    totalRatingsString: "500+ ratings",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 36,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    slaString: "36 MINS",
    lastMileTravel: 3.5,
    slugs: {
      restaurant: "kfc-btm-layout-btm",
      city: "bangalore",
    },
    cityState: "1",
    address:
      "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
    locality: "2nd Stage",
    parentId: 547,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "3.5 kms",
    hasSurge: false,
    sla: {
      restaurantId: "334475",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      lastMileTravel: 3.5,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "3.8",
    totalRatings: 500,
    new: false,
  },
  subtype: "basic",
};




const AppLayout = ()=>{

  return(
    <div className="app">
       <Header/>
       <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
         path:"/",
         element: <Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }

    ],
    errorElement:<Error/>
  }
  

]); 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)