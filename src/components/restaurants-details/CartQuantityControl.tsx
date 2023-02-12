import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { addToCartAction } from "../../store/addtocart.slice";
import { IMenuItem } from "./models/restaurants-details.model";

interface IProps {
    item: IMenuItem;
    defaultQty?: number
    onPlus?: (qty: number) => void
    onMinus?: (qty: number) => void
    onRemove: () => void
}

export default function CartQuantity(props: IProps) {

    console.log(props.defaultQty);
    // use store hooks
    const store = useStore()

    const [qty, setQty] = useState<number>(props.defaultQty ? props.defaultQty : 1);

    useEffect(() => {
        if (props.defaultQty) {
            setQty(props.defaultQty)
        }
    }, [props.defaultQty])

    const handlePlus = () => {
        const newQty = qty + 1
        setQty(newQty)
        // emiit on plus
        if (props.onPlus) {
            props.onPlus(newQty)
        }
        // update cart
        updateCart(newQty);
    }

    const handleMinus = () => {
        let currentQty = qty;
        if (currentQty > 1) {
            currentQty--;
            setQty(currentQty);
            // emiit on minus
            if (props.onMinus) {
                props.onMinus(currentQty)
            }
            updateCart(currentQty);
        }
        else {
            // lets parent decide what to do
            props.onRemove()
            updateCart(0);
        }
    }

    const updateCart = (qty: number) => {
        // dispatch event fire/trigger the action to the reducer
        store.dispatch(addToCartAction({ item: props.item, qty }))
    }

    return (
        <div className="flex flex-row justify-between font-bold border-gray-300 border p-3">
            <button type="button" className="text-red-600" onClick={handleMinus}>
                -
            </button>
            <div>{qty}</div>
            <button type="button" className="text-green-700" onClick={handlePlus}>+</button>
        </div>
    )
}