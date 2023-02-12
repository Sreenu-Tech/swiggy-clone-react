import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ICartItem } from "../../store/addtocart.slice";
import CartQuantity from "./CartQuantityControl"
import { ICart, IMenuItem } from "./models/restaurants-details.model";
import MenuItemType from "./shared/MenuItemType";

export default function Cart() {

    const storeCartItems = useSelector<any, ICartItem[]>(selector => selector.cart.items)
    // const addToCartItems = useSelector(state=>state?.addToCart?.items)

    const [cartItems, setCartItems] = useState<ICart[]>([]);

    useEffect(() => {
        // NULL & length check
        if (storeCartItems && storeCartItems.length > 0) {
            // copy entire cart items
            // shalow copy
           // const items=[...cartItems];
            // deep copy
             const items = JSON.parse(JSON.stringify(cartItems)) as ICart[];
            // loop throug the store cart items
            storeCartItems.forEach(storeItem => {
                const index = items.findIndex(m => m.item.itemId === storeItem.item.itemId);
                if (index > -1) {
                    //
                    if (storeItem.qty > 0) {
                        items[index].item.cartQty= storeItem.qty;
                    }
                    else {
                        // delete
                        items.splice(index, 1);
                    }
                }
                else {
                    // new item
                    items.push({ item: storeItem.item })
                }
            })

            setCartItems(items);

            console.log(items)

        }
    }, [storeCartItems])

    // on remove
    const handleRemove = (item: IMenuItem) => {
        // 1=='1' : true , 1==='1' : false
        // get the cart items
        const items = [...cartItems];
        // let find the item
        const itemIndex = items.findIndex(m => m.item.itemId === item.itemId);
        if (itemIndex > -1) {
            // remove  items
            items.splice(itemIndex, 1);
            // update the state
            setCartItems(items)
        }
        else {
            // invalid items
        }
    }

    return (
        <div>
            <h2>Cart</h2>

            <div>
                {
                    cartItems && cartItems.map(cartItem => {
                        return <CartItem key={cartItem.item.itemId} item={cartItem.item} onRemove={() => handleRemove(cartItem.item)} />
                    })
                }
            </div>

            <div>
                Total
            </div>

        </div>
    )
}

interface ICartItemProps {
    item: IMenuItem
    onRemove: () => void;
}

function CartItem({ item, onRemove }: ICartItemProps) {

    // store indiviual item total
    const [total, setTotal] = useState(item.amount);

    const handleCartQty = (qty: number) => {
        setTotal(item.amount * qty)
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-row">
                <MenuItemType type={item.type} />
                <div>{item.name}</div>
            </div>
            <CartQuantity defaultQty={item.cartQty} item={item} onRemove={onRemove} onPlus={handleCartQty} onMinus={handleCartQty} />
            <div>₹{total}</div>
        </div>
    )
}