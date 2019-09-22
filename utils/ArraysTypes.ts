let NumberArray: number[] = [1,2,3];
let NumberArray2: Array<number> = [33,55,77];
let MixedArray: [number,boolean,string] = [1, true, 'string']

export function printArray():void{
    for(let a of NumberArray){console.log("DEFAULT FOREACH ELEMENT: ", typeof(a)," => ",a);}
    NumberArray2.forEach(function(value){console.log("FOREACH ELEMENT: ",value)});
    for(let a of MixedArray){console.log("DEFAULT FOREACH ELEMENT: ", typeof(a)," => ",a);}
}