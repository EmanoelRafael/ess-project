import { Address } from "../common/address";
import { Product } from "../common/product";

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