import { useEffect, useState } from "react";
import { LocationSearch } from "./LocationSearch";
import { LocationSearchItem } from "./LocationSearchItem";
import { ILocationSearchItem } from "./models/location.model";

export default function LocationLayout() {
    // store all location search items
    const [locationItems, setLocationItems] = useState<ILocationSearchItem[]>([]);
    // store the selected location
    const [selectedLocation, setSelectedLocation] = useState<ILocationSearchItem | null>(null);

    useEffect(() => {
        setDefaultLocation();
    }, [])

    const setDefaultLocation = () => {
        // get the selected location
        const location = window.localStorage.getItem('selected_location')
        if (location) {
            // set the location
            setSelectedLocation(JSON.parse(location))
        }
    }

    const handleSelect = (item: ILocationSearchItem) => {
        // store the selected item into local storage
        window.localStorage.setItem('selected_location', JSON.stringify(item))
        // show default location
        setDefaultLocation();
    }

    return (
        <div className="conatiner">

            {/**  */}
            {selectedLocation && <LocationSearchItem item={selectedLocation} />}

            <div className="flex flex-col gap-4">
                <LocationSearch onSearch={(items) => setLocationItems(items)} />
                {
                    locationItems.map(item => {
                        return <LocationSearchItem key={item.id} item={item} onSelect={handleSelect} />
                    })
                }
            </div>

        </div>
    )
}