
let inputCommand = process.argv[2];

let inputOne = process.argv[3];

let inputTwo = process.argv[4];

let inputThree = process.argv[5];

let inputFour = process.argv[6];

const parse = require("nodemon/lib/cli/parse");
let fs = require("fs");

switch(inputCommand){
    case "read":
        break;
    case "create":
        break;
    case "update":
        break;
    case "destroy":
        break;
    default:
        console.error("Usage: node pets.js [read | create | update | destroy]")
}

let readPets = function (inputOne){

    fs.readFile("pets.json","utf8",function(error,data){

    if(inputOne == undefined){
        console.log(JSON.parse(data));
    }
    else if(inputOne < 0 || inputOne >= JSON.parse(data).length){
        console.error("Usage: node pets.js read INDEX");
    }
    else {
        console.log(JSON.parse(data)[inputOne]);
    }
})
}

let createPets = function(inputOne,inputTwo,inputThree){
    //inputOne = age; inputTwo = kind; inputThree = name;

    if(inputOne == undefined || inputTwo == undefined || inputThree == undefined){
        console.error("Usage: node pets.js create AGE KIND NAME");
    }
    else{
        fs.readFile("pets.json","utf8",function(error,data){

            let petArray = JSON.parse(data);

            let newPet = {
                age: parseInt(inputOne),
                kind: inputTwo,
                name: inputThree,
            }

            petArray.push(newPet);

            let json = JSON.stringify(petArray);

            fs.writeFileSync('pets.json', json, "utf8", function(error) {

            })

        })

    }

}

let updatePets = function(inputOne,inputTwo,inputThree, inputFour){
    //inputOne = index, inputTwo = age, inputThree = type, inputFour = name;
    if(inputOne == undefined || inputTwo == undefined || inputThree == undefined || inputFour == undefined){
        console.error("Usage: node pets.js create INDEX AGE KIND NAME");
    }
    else{
        fs.readFile("pets.json","utf8",function(error,data){

            let petArray = JSON.parse(data);

            if(inputOne >= petArray.length || inputOne < 0){
                console.error("Usage: node pets.js create INDEX AGE KIND NAME");
            }
            else{
                petArray[inputOne].age = parseInt(inputTwo);
                petArray[inputOne].kind = inputThree;
                petArray[inputOne].name = inputFour;

                let json = JSON.stringify(petArray);

                fs.writeFileSync('pets.json', json, "utf8", function(error) {

                })
            }
        })
    }
}

let deletePets = function(inputOne){
    if(inputOne == undefined || inputOne < 0){
        console.log("Usage: node pets.js destroy INDEX");
    }
    fs.readFile("pets.json","utf8",function(error,data){

        let petArray = JSON.parse(data);
        if(inputOne >= petArray.length){
            console.log("Usage: node pets.js destroy INDEX");
        }
        else{
            petArray.splice(inputOne);

            let json = JSON.stringify(petArray);

                fs.writeFileSync('pets.json', json, "utf8", function(error) {

                })
        }
    })
}

//---------------------------------------------------------------

if(inputCommand == "read"){
    readPets(inputOne);
}
if(inputCommand == "create"){
    createPets(inputOne,inputTwo,inputThree);
}
if(inputCommand == "update"){
    updatePets(inputOne,inputTwo,inputThree,inputFour);
}
if(inputCommand == "destroy"){
    deletePets(inputOne);
}

