import inquirer from "inquirer";
let totalBalance = 10000;
const pinNumber = 1999;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
// console.log(pinEntered.pin);
if (pinEntered.pin == pinNumber) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            message: 'Select your account type',
            type: "list",
            choices: [
                "Current Account",
                "Savings Account"
            ]
        },
        {
            name: "transMethod",
            message: "Select your transaction method",
            type: "list",
            choices: [
                "Cash Withdrawl",
                "Fast Cash"
            ]
        }
    ]);
    if (atmQuestions.transMethod == "Cash Withdrawl") {
        let cashwithdrawlamount = await inquirer.prompt([
            {
                name: "withdrawl",
                message: 'Enter the amount you want to withdraw',
                type: "number"
            }
        ]);
        //Greater than or equals to operator
        if (totalBalance >= cashwithdrawlamount.withdrawl) {
            totalBalance -= cashwithdrawlamount.withdrawl; //totalBalance = totalBalance - cashwithdrawlamount
            console.log(`Your Total Balance is:${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "3000",
                    "5000"
                ]
            }
        ]);
        if (totalBalance >= fastCashAmount.fastCash) {
            totalBalance -= fastCashAmount.fastCash; //totalBalance = totalBalance -cashwithdrawlamount
            console.log(`Your Total Balance is: ${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
else {
    console.log("You entered wrong pin number");
}
