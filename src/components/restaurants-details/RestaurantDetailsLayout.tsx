import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import Category from "./Category";
import { MenuItemLayout } from "./MenuItemLayout";
import RestaurantInfo from "./RestaurantInfo";

export default function RestaurantDetailsLayout(){

    const params=useParams()

    useEffect(()=>{
        // get Restaurant id
        const resId=params.resId
        if(resId){
            // TODO call the API get Restaurant details
            // display in <RestaurantInfo/> component
        }
    },[params])

    return (
        <div>
            <RestaurantInfo/>
            <div className="grid grid-cols-3 gap-4">
                <Category/>
                <MenuItemLayout/>
                <Cart/>
            </div>
        </div>
    )
}