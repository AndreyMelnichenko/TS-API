import * as request from "request-promise-native";
import * as chai from "chai";
import * as fs from "fs";
import { JsonPretty } from "../utils/jsonPretty";
import prepareQueryString from 'querystring';
import { Merge, PrintMerge, mergObjects } from "../utils/ObjectsMerge";
import url from 'url';
import User from '../utils/User';

const expect = chai.expect;
const baseUrl:string = "http://httpbin.org";
let Person: User = new User();
let coockie = request.jar();
let printObject = new JsonPretty();

describe("GET request", async function(){
    it("Sould have HEADERS", async function(){
        PrintMerge(new Merge())
        let expectedHeaders = {
            "First": "parameter 1",
            "second": "parameter 2"
        }
        printObject.printJson(coockie);
        let body = await request.get(baseUrl+"/headers",{
            json:true,
            headers: expectedHeaders
        })
        console.log(body.headers)
        expect(body).not.null
        expect(body.headers).to.contain.keys('First')
        expect(body.headers).to.be.an('object').to.include.all.keys("First", "Second");
    })

    it("Should merged objects", function(){
        let userName = {
            name: "Andrii"
        }
        let age = {
            userAge: 30
        }
        let finalObject = mergObjects(userName,age);
        console.log(finalObject)
        expect(finalObject).to.include.all.keys('name','userAge')
        expect(finalObject).to.include(userName)
        expect(finalObject).to.include(age)
    })

    it("Should have QUERY PARAMS", async function(){
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
        let parseUrl = url.parse(response.url,true);
        console.log("REQUEST URL\n",parseUrl);
        expect(parseUrl.query).to.eql(queryString)
    })

    xit("Shold received query string", async function(){
        let actualQueryString = {                
            name: "Andrey",
            age: ">30",
            city: "Kyiv",
            street: "pr. Heroiv Krut', 45"}

        console.log(baseUrl+"/anything/?"+prepareQueryString.stringify(actualQueryString))
        let response = await request.get(baseUrl+"/get/?"+prepareQueryString.stringify(actualQueryString),{json:true})
        console.log("RESPONSE: ",response.uri.query)
    })

    it.only("Upload and Download file", async function(){
        const formData = {
            my_file: fs.createReadStream(__dirname + "/img/iron.jpg")
        };
        let resp = await request.post("https://httpbin.org/anything", {
            formData: formData,
            json: false
        });
        console.log(resp);
        fs.createWriteStream(__dirname + `/img/iron_new.txt`).write(resp);
        let parsed = JSON.parse(resp);
        let base64Data = parsed.files.my_file.replace(
            /^data:image\/jpeg;base64,/,
            ""
        );
        fs.writeFile(__dirname + "/img/iron_out.jpg", base64Data, "base64", () => {});
    })
})