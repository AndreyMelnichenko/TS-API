import * as person from "faker";

export default class User{
    Name: string;
    Age: number;
    Adress: string;

    constructor(){
        this.Name = person.name.findName();
        this.Age = person.random.number({min:20, max:40});
        this.Adress = person.address.streetAddress();
    }
}