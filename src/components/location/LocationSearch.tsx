import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ILocationSearchItem } from "./models/location.model";

interface IProps {
    onSearch: (items: ILocationSearchItem[]) => void
}

export function LocationSearch(props: IProps) {

    // define teh state for the pincode
    const [pinCode, setPinCode] = useState('');

    // handle search button event
    const handleSearch = () => {
        // null
        if (pinCode) {
            fetch(`http://localhost:3002/locations/${pinCode}`).then(res => res.json()).then(results => {
                if (results) {
                    props.onSearch(results);
                }
            }).catch(error => {
                console.log(error)
            })
        }
        else {
            alert('Enter pincode')
        }
    }

    const handleReset = () => {
        setPinCode('')
    }

    return (
        <div className="flex flex-col gap-2">
            <TextField label="PinCode" variant="outlined" defaultValue={pinCode} onChange={(e) => setPinCode(e.target.value)} />
            <div className="flex flex-row justify-between">
                <Button variant="contained" onClick={handleSearch}>Search</Button>
                <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </div>
        </div>
    )
}