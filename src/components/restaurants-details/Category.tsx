import { useState } from "react";
import { ICategory } from "./models/restaurants-details.model";

export default function Category() {

    const [categories, setCategories] = useState<ICategory[]>([
        {
            id: 1,
            name: 'Hot Beverages'
        },
        {
            id: 2,
            name: 'Specialty Cookies'
        }
    ]);

    return (
        <div className="flex flex-col
        ">
            {categories && categories.length > 0 && categories.map(item => {
                return <div key={item.id} className="font-bold hover:text-orange-400 cursor-pointer">
                    {item.name}
                </div>
            })}

        </div>
    )
}