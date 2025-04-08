/* No problem, it´s not easy to keep all the new things and the flow in 
the same thought process. Adding comments that explain shortly what each 
line does can help a lot to take some cognitive load of when you need to 
look at the flow you need to declare a variable for the amount from the 
input prompt (amount in my example) but i would call it something else 
than depo and make it as clear as possible what it is. Or if you like 
deposit for that part change the name of the method to handleDeposit 
or something*/



let account = {
    name: "Sandra Weberg",
    balance: 500000,

    userName() {
        
        return this.name;
    },

    getBalance() { 
    return this.balance;
    },
    handleDeposit() {
        if (deposit < this.balance) {
            return(total);
        }
    }, 
    handleWithDraw() {
        if (withDraw > this.balance) {
            return("Not enough money!")
        } else if (withDraw < total) {
            return(this.balance - withDraw);
        }
    },
    handleExit() {
        return alert("Exit")    
    }
}



 /*
let message = "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit";

let x = (1, 2, 3, 4, 5);

let deposit = 10000000;
let total = account.balance + deposit;
let withDraw = 9200;
let newBal = account.balance - withDraw;
let userName = "Sandra Weberg";*/

while (running) {
    const choice = parseFloat(
        prompt( 
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    ); 

    
    
   
    switch(choice) {
       
        case 1:
            alert(`Your balance is: $${account.balance}`);
            break;
        case 2:
            alert(`Your total balance is $${total}`);
            break;
        case 3:
            alert(`Your new balanse is $${newBal}`);
            break;
        case 4:
            alert(`Your name is $${accountName}`);
            break;
        case 5:
            alert(`See you next time!`);
    }   
} 

/*
console.log(atm(message));*/
