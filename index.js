#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the opreaters to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiblication", "Division"],
    },
]);
//conditionl statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiblication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please selet valid operator");
}
