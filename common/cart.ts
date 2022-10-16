import { Address } from "address";
import { Product } from "product";

export class Cart {
    products: Map<Product,Number>;
    value: Number;
    empty: boolean;
    shipping: Number;
    deliveryAddress: Address;


    constructor() {
        this.products = null;
        this.value = 0;
        this.empty = true;
        this.shipping = 0;
        this.deliveryAddress = null;
    }
}