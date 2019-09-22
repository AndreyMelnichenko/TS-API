import * as person from "faker";

type User = { 
    name: string, 
    age: number, 
    address: string, 
    isMale: boolean, 
    jobList: () => string[],
    skils?: () =>void
}

export function getUser(): User {
    let newPerson: User = {
        name: person.name.findName(),
        age: person.random.number({min:20, max:40}),
        address: person.address.streetAddress(),
        isMale: Boolean(Math.round(Math.random())),
        jobList(): string[] {
            return ['Terrasoft','Mobox','Lenal'];
        },
        skils(): void {
            console.log("Java, JS, TS, QA Automation");
        }
    }
    return newPerson;
}