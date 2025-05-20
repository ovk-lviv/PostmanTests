//@ts-check
import {readFileSync} from 'fs';

var body  = readFileSync("TestFiles/test.json", "utf8");
const data = JSON.parse(body);

let arrayOfLists = data.lists;

arrayOfLists.forEach(element => {
    console.log("List id: " + element.id);
    console.log("List name: " + element.name)
})



