export interface IRestaurant{
    resId:number;
    name:string;
    categories:string[]
    image:string;
    rating:number;
    deliveryTime:number;
    cost:number;
    promoCode?:string
    promoted:boolean
}