#! /usr/bin/env node

import inquirer from "inquirer";
let toDos : string[]=[];
let condition = true;
// use loop for repeatively 
while(condition){
    let answers = await inquirer.prompt([
{ type:"input",
        name :"todo",
        message:"What you want to add your todos"
 },
 {type:"confirm",
 name:"addmore",
 message:"Do you want to add more",
 default:"false"
 }
]);
let {todo,addmore}=answers;
console.log(answers);
condition= addmore;

if (todo){
    toDos.push(todo)
}else{
    console.log("Kindly add input");
}
if(toDos.length>0){
    console.log("Your todo list:");
    toDos.forEach(todo=> console.log(todo))
}else{
    console.log("No to found");
    
}
}