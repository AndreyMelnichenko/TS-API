import * as request from "request-promise-native";
import * as chai from "chai";
import { JsonPretty } from "../utils/jsonPretty";
import prepareQueryString from 'querystring';
import url from 'url';

const expect = chai.expect;
const baseUrl:string = "http://httpbin.org";
let coockie = request.jar();
let printObject = new JsonPretty();

describe("GET request", async function(){

    it("Sould have HEADERS", async function(){
        let headers = {
            "first": "parameter 1",
            "second": "parameter 2"
        }
        printObject.printJson(coockie);
        let body = await request.get(baseUrl+"/headers",{json:true,headers})
        console.log(body.headers)
        console.log(body.uri)
        expect(body.headers).not.null
        expect(body.headers).to.contain.keys('first','second')
    })

    it("Should have BODY not null", async function(){
        let response = await request.get(baseUrl+"/get",{json:true})
        console.log("RESPONSE: ",response.body)
    })

    it.only("Should have QUERY PARAMS", async function(){
        let queryString = {                
            name: "Andrey",
            age: ">30",
            city: "Kyiv"}
        let response = await request.get(baseUrl+"/anything",
        {
            json: true,
            qs: queryString
        })
        console.log("RESPONSE: ",response)
        let eR = prepareQueryString.stringify(queryString)
        console.log("PRINT ER: \n",(eR))
        console.log(JSON.stringify(queryString))
        console.log("PRINT AR: \n",JSON.stringify(queryString))
        // expect(eR).to.eql(queryString)
    })

    it("Shold received query string", async function(){
        let actualQueryString = {                
            name: "Andrey",
            age: ">30",
            city: "Kyiv",
            street: "pr. Heroiv Krut', 45"}

        console.log(baseUrl+"/anything/?"+prepareQueryString.stringify(actualQueryString))
        let response = await request.get(baseUrl+"/get/?"+prepareQueryString.stringify(actualQueryString),{json:true})
        console.log("RESPONSE: ",response.uri.query)
    })
})