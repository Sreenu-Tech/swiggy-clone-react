export interface ICategory {
    id: number;
    name: string;
}

export type TMenuItemType = 'veg' | 'noveg'

export interface IMenuItem {
    itemId: number;
    name: string;
    description?: string;
    amount: number;
    type: TMenuItemType,
    image?: string;
    cartQty?: number
}

export interface ICart {
    item: IMenuItem
}