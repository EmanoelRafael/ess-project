import { Client } from "../common/client";

export class Service {
    
    client: Client

    constructor() {
        this.client = new Client("Emanoel Rafael", "111.111.111-11", "(81) 98888-8888", "emanoelrafel2020@gmail.com","08/01/1999");
    }

    public getClient (): Client{
        return this.client;
    }
}