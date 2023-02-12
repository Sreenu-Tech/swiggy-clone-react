import { useEffect, useState } from "react";
import { IRestaurant } from "./models/restaurant.model";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantLayout() {
    // store all restaurants
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    // load page load
    useEffect(() => {
        // TODO : call the API
        // http://localhost:3002/restaurant/list
        // fetch
        fetch('http://localhost:3002/restaurant/list').then(res => res.json()).then(results => {
            if (results) {
                setRestaurants(results);
            }
        }).catch(error => {

        })
    }, [])

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {restaurants && restaurants.length > 0 && restaurants.map(item => {
                    return <RestaurantCard key={item.resId} item={item} />
                })}
            </div>

        </div>

    )
}