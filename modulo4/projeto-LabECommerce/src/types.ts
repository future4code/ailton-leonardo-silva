export type NewUser = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type UpdateUser = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type NewProduct = {
    id: string;
    name: string;
    price: number;
    image_url: string;
}

export type NewPurchase = {
    id: string;
    user_id: string;
    product_id: string;
    quantity: number;
    total_price: number;
}