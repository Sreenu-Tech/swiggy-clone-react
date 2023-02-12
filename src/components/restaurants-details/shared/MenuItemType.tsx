import { TMenuItemType } from "../models/restaurants-details.model";

interface IProps {
    type: TMenuItemType
}

export default function MenuItemType({ type }: IProps) {
    return <img src={`assets/images/${type == 'veg' ? 'veg.png' : 'non_veg.png'}`} alt="Type" />
}