import { Navigation } from "@mui/icons-material"
import { useNavigate, useNavigation } from "react-router-dom";
import { ILocationSearchItem } from "./models/location.model"

interface IProps {
    item: ILocationSearchItem;
    //? makes the property as optional
    onSelect?: (item: ILocationSearchItem) => void
}
export function LocationSearchItem({ item, ...props }: IProps) {
    const navigate = useNavigate()
    const handleSelect = () => {
        // NULL check
        if (props.onSelect) {
            props.onSelect(item);
        }
        // navigate to restaurant page
        navigate('/restaurants')
    }
    return (

        <div onClick={handleSelect} className="flex flex-row cursor-pointer gap-4 py-2">
            <div>
                <Navigation />
            </div>
            <div className="flex flex-col">
                <div className="font-bold hover:text-orange-500">{item.location}</div>
                <div className="text-gray-600">{item.address}</div>
            </div>
        </div>

    )
}