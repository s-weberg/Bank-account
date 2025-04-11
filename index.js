

let account = {
    name: "Sandra Weberg",
    balance: 500000,
 
    

    getBalance() { 
    return this.balance;
    },

    deposit() {
        const amount = parseFloat(prompt("Enter amount to deposit:"));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please try again.");
            return;
        } else if (amount > this.balance) {
            alert("Unsufficient funds.");
        } else {
            this.balance -= amount;
            alert(`Withdraw: $${amount}. New balance is: $${this.balance}`);
        }
    },
    

   
    withDraw() {
        const amount = parseFloat(prompt("Enter withdraw:")); 
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please try again.");
            return;
        } else if (amount > this.balance) {
            alert("Unsufficient funds.");
        } else {
            this.balance -= amount;
            alert(`Withdraw: $${amount}. New balance is: $${this.balance}`);
        }
    },
    
    getName() {
        return this.name;
    },

}

let running = true;

function atm() {

while (running) {
    const choice = parseFloat(
        prompt( 
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );



    switch(choice) {
       
        case 1:
            alert(`Your balance is: $${account.getBalance()}`);
            break;
        case 2:
            account.deposit();
            break;
        case 3:
            account.withDraw();
            break;
        case 4:
            alert(`Your name is: ${account.name}`);
            break;
        case 5:
            running = false;
            alert(`Goodbye`);
            break;
            
        }  
    }
}

atm();



