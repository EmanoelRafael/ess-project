import { Address } from "../common/address";
import { Card } from "../common/card";
import { Cart } from "../common/cart";
import { Order } from "../common/order";

export class Client {
    name: string;
    cpf: string;
    tel: string;
    email: string;
    nasc: string;
    address: Address;
    card: Card;
    cart: Cart;
    orders: Array<Order>;

    constructor(name: string, cpf: string, tel: string, email:string, nasc:string ) {
        this.name = name;
        this.cpf = cpf;
        this.tel = tel;
        this.email = email;
        this.nasc = nasc;
        this.address = null;
        this.card = null;
        this.cart = null;
        this.orders = null;
    }

    public getemail() : string {
        return this.email;
    }
    
}