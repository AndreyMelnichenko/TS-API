export class Merge{
        a = {
            x: "val 1",
            y: "val 2"
        }
        b = {
            z: "val 3"
        }
}

export function PrintMerge(value: Merge):void{
    console.log(value)
    let a = value.a
    let b = value.b
    let c = {...a,...b}
    console.log("MERGED OBJECT:\n",c)
}

export function mergObjects(obj1: object, obj2: object):any{
    return{...obj1,...obj2}
}
