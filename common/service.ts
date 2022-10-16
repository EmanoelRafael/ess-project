import { Client } from "client";

export class Service {
    clients: Array<Client>;
    
    constructor() {
        this.clients = null;
    }
}