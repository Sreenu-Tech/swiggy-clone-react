import { useState } from "react";
import { useStore } from "react-redux";
import { addToCartAction } from "../../store/addtocart.slice";
import CartQuantity from "./CartQuantityControl"
import { IMenuItem } from "./models/restaurants-details.model"
import MenuItemType from "./shared/MenuItemType";

interface IProps {
    item: IMenuItem
}
export default function MenuItemCard({ item }: IProps) {
    const store = useStore();
    // const typeImage = item.type == 'veg' ? 'assets/images/veg.png' : 'assets/images/non_veg.png';
    // const typeImage = item.type == 'veg' ? 'veg.png' : 'non_veg.png';
    const [cartQty, setCartQty] = useState(item.cartQty);

    const handleAdd = () => {
        store.dispatch(addToCartAction({item, qty: 1 }));
        setCartQty(1);
    }
    return (
        <div>
            <div>
                <MenuItemType type={item.type} />
                <h2>{item.name}</h2>
                <span>₹{item.amount}</span>
                <p>{item.description}</p>
            </div>
            <div>
                {item.image && <img src={item.image} />}
                {cartQty && <CartQuantity item={item} onRemove={() => { setCartQty(undefined) }} />}
                {!cartQty && <button type="button" className="border border-gray-300 p-3" onClick={handleAdd}>Add</button>}

            </div>
        </div>
    )
}