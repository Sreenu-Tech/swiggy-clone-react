import { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { IMenuItem } from "./models/restaurants-details.model";

export function MenuItemLayout() {
    // store all menu items
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([{
        amount: 209,
        itemId: 1,
        name: 'Broccoli Veg Soup',
        type:'noveg'
    }]);

    return (
        <div>
            <h2>Category Name</h2>
            {
                menuItems && menuItems.map(item => {
                    return <MenuItemCard key={item.itemId} item={item} />
                })
            }
        </div>
    )
}