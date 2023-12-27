import inquirer from "inquirer";
let calculatorinputs = await inquirer.prompt([{
        type: "number",
        name: "firstnumber",
        message: "enter firstnumber:"
    },
    {
        type: "number",
        name: "secondnumber",
        message: "enter secondnumber:"
    },
    {
        type: "list",
        name: "operation",
        message: "which operation do you want to perform?",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
console.log(calculatorinputs.operation);
if (calculatorinputs.operation === "addition") {
    console.log(calculatorinputs.firstnumber + calculatorinputs.secondnumber);
}
else if (calculatorinputs.operation === "subtraction") {
    console.log(calculatorinputs.firstnumber - calculatorinputs.secondnumber);
}
else if (calculatorinputs.operation === "multiplication") {
    console.log(calculatorinputs.firstnumber * calculatorinputs.secondnumber);
}
else if (calculatorinputs.operation === "division") {
    console.log(calculatorinputs.firstnumber / calculatorinputs.secondnumber);
}
// let a:string | number | boolean= "abubakar";
// a = 10n
// a ="abubakar"
// a = true
// let age  :number = 22;
// console.log(age.toFixed(10))
