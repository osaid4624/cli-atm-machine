import inquirer from "inquirer";

let myPin = 5555;
let myBalamce = 50000;

console.log("----------------------WELCOM TO USA BANK----------------------------")

//pin code

let enterPin = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Pin",
    type: "number",
  },
]);
if(enterPin.pin === myPin){
    console.log("correct pin code!!");
    

let operater = await inquirer.prompt([
    {
      name: "operaters",
      message: "select opition",
      type: "list",
      choices: ["withdrawl", "fastcash", "Deposit", "CheckBalance"],
    },
  ]);
  if (operater.operaters === "withdrawl") {
    let withdrawl = await inquirer.prompt([
      {
        name: "withdrawl",
        message: "Select withdrawl",
        type: "number",
      },
    ]);
  
    if (withdrawl.withdrawl > myBalamce) {
      console.log("Your balance is insufficent");
    } else {
      //   console.log(myBalamce)
      console.log((myBalamce -= withdrawl.withdrawl));
      console.log(`Your current balance is ${myBalamce}`);
    }
  }
  if (operater.operaters === "fastcash") {
    let fastCash = await inquirer.prompt([
      {
        name: "fastcash",
        message: "select payment",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    myBalamce -= fastCash.fastcash;
    console.log(`your reaming balance is ${myBalamce}`);
  }
  if (operater.operaters === "Deposit") {
    let Deposit = await inquirer.prompt([
      {
        name: "Deposit",
        message: "Enter your Amount",
        type: "number",
      },
    ]);
    myBalamce += Deposit.Deposit;
    console.log(`Your current balance is ${myBalamce}`);
   } else {
     console.log(`Your balance ${myBalamce}`);
   }
  }

else{  
    console.log("Inccoret pin")
}





