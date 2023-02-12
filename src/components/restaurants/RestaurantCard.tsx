import { Star } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { IRestaurant } from "./models/restaurant.model"

interface IProps {
    item: IRestaurant
}
export default function RestaurantCard({ item }: IProps) {
    const navigate = useNavigate();

    const gotoDetails = () => {
        navigate(`/restaurant/details/${item.resId}`)
    }

    return (
        <Card onClick={gotoDetails}>
            <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="Restaurant"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.categories.join(',')}
                </Typography>

                <div className="flex flex-row justify-between mt-4 mb-4">
                    <div className="flex flex-row">
                        <Star />
                        <span>{item.rating}</span>
                    </div>
                    <div>{item.deliveryTime} MINS</div>
                    <div>₹{item.cost} FOR TWO</div>
                </div>

                {item.promoCode && <div className="text-center text-amber-700 font-bold">{item.promoCode}</div>}
            </CardContent>
        </Card>

    )
}