export class JsonPretty {
    constructor(){
    }
    printJson (object : object): void {
        console.log(JSON.stringify(object)
            .replace("{\"","{\n\t\"")
            .replace("\":{\"","\":{\n\t\"")
            .replace(",",",\n\t")
            .replace("\",\"","\",\n\t\"")
            .replace("true,\"","true,\n\t\"")
            .replace("]}}","]\n\t}\n}"))
    } 
}