import {printArray} from "../utils/ArraysTypes";
import { sumNums } from "../utils/FunctionDef";
import { getUser } from '../utils/CustomTypes';

describe("TypeScritp Studing", async function(){
    it("Array types define", function(){
        printArray();
    })

    it("Func DEFINE like lyambda", function(){
        let mySum:(a:number,b:number)=>number;
        mySum = sumNums;
        console.log(mySum(14,56));
    })

    it("Not mandatory FUNC parameter", function(){
        let mySum:(a:number,b?:number)=>void=function(a:number,b:number=4){ console.log(a+b);}
        mySum(44,77);
        let newFunc:(a?:string,b?:string) => string = function(a:string='Jhon ',b?:string){return a + b}
        console.log(newFunc('test '));
        console.log(newFunc());
        console.log(newFunc('Andrii', ' Melnychenko'));
    })

    it("Join String Array parameters",function(){
        let buildNameFun: (fname: string, ...rest: string[]) => string = function(firstName: string, ...restOfName: string[]) {
            return firstName + " " + restOfName.join(" ");
        };
        console.log(buildNameFun('Andrii','Ella','Evheniia',"1","2","3"))
    })

    it("Customs types", function(){
        let user = getUser();
        console.log("\nPRINT USER: \n",user);
        console.log("job list: ",user.jobList())
        let skils = user.skils;
        console.log("Skils: ", skils);
    })
})