let account = {
    name: "Sandra Weberg",
    balance: 500000,

    userName() {
        
        return this.name;
    },

    getBalance() { 
    return this.balance;
},
deposit() {
    if (deposit < this.balance) {
        return(total);
    }
}, 
withDraw() {
    if (withDraw > this.balance) {
        return("Not enough money!")
    } else if (withDraw < total) {
        return(this.balance - withDraw);
    }
},
exit() {
    return alert("Exit")    
}
}

let message = "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit";

let x = (1, 2, 3, 4, 5);

let deposit = 10000000;
let total = account.balance + deposit;
let withDraw = 9200;
let newBal = account.balance - withDraw;
let userName = "Sandra Weberg";

function atm() {
    const message = parseFloat(
        prompt( 
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    ); 

    
    
   
    switch(message) {
       
        case 1:
            console.log(alert(`Your balance is: $${account.balance}`));
            break;
        case 2:
            console.log(alert(`Your total balance is $${total}`));
            break;
        case 3:
            console.log(alert(`Your new balanse is $${newBal}`));
            break;
        case 4:
            console.log(alert(`Your new balance is $${newBal}`));
            break;
        case 5:
           
            console.log(alert(`See you next time!`));
    }
    
} 

console.log(atm(message));
