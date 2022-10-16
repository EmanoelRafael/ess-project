export class Address {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    refPoint: string;

    constructor(cep: string, state: string, city: string, street: string, number: string) {
        this.cep = cep;
        this.state = state;
        this.city = city;
        this.street = street;
        this.number = number;
        this.complement = "";
        this.refPoint = "";
    }
}