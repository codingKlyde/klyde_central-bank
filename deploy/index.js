class BankAccount {
    constructor(accountHolderName) {
        this.accountHolderName = accountHolderName;
        this.balance = 0; // Initial balance is 0
    }

    // Method to deposit money
    deposit(amount) {
        try {
            if (isNaN(amount) || amount <= 0) {
                throw new Error("Invalid deposit amount.");
            }
            this.balance += amount;
            return `Deposited $${amount}.`;
        } catch (error) {
            return error.message;
        } finally {
            console.log(`Deposit attempt: $${amount}`);
        }
    }
    // Method to withdraw money
    withdraw(amount) {
        try {
            if (isNaN(amount) || amount <= 0) {
                throw new Error("Invalid withdrawal amount.");
            }
            if (amount > this.balance) {
                throw new Error("Insufficient balance for withdrawal.");
            }
            // Only deduct a fee if the withdrawal is valid
            const fee = this instanceof SavingsAccount ? 5 : 10; // Fee based on account type
            const totalAmount = amount + fee;
            this.balance -= totalAmount;
            return `Withdrawn $${amount}.\n Fee: $${fee}.`;
        } catch (error) {
            return error.message;
        } finally {
            console.log(`Withdrawal attempt: $${amount}`);
        }
    }
    // Method to check the balance
    checkBalance() {
        return `Current balance: $${this.balance}`;
    }
}

// Subclass for a savings account
class SavingsAccount extends BankAccount {
    constructor(accountHolderName) {
        super(accountHolderName);
    }
}

// Subclass for a checking account
class CheckingAccount extends BankAccount {
    constructor(accountHolderName) {
        super(accountHolderName);
    }
}

document.getElementById("button").addEventListener("click", function () {
    // Prompt for the user's name (case-insensitive)
    let accountHolderName = prompt("Enter your name to login:");
    accountHolderName = accountHolderName ? accountHolderName.toLowerCase() : "";

    if (accountHolderName === "john") {
        let accountType;

        while (true) {
            accountType = prompt("Choose an account type:\n1. Savings Account\n2. Checking Account");
            
            if (accountType === "1" || accountType === "2") {
                break;
            } else {
                alert("Invalid account type. Please select a valid option.");
            }
        }

        let account;

        if (accountType === "1") {
            account = new SavingsAccount(accountHolderName);
        } else if (accountType === "2") {
            account = new CheckingAccount(accountHolderName);
        }

        let exit = false; // Control the menu loop

        while (!exit) {
            const choice = prompt(
                "Choose an option:\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit"
            );

            switch (choice) {
                case "1":
                    const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
                    const result1 = account.deposit(depositAmount);
                    alert(result1);
                    break;
                case "2":
                    const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
                    const result2 = account.withdraw(withdrawAmount);
                    if (result2.includes("Withdrawn"))
                        alert(result2);
                    else
                        alert(result2);
                    break;
                case "3":
                    const result3 = account.checkBalance();
                    alert(result3);
                    break;
                case "4":
                    exit = true; // Exit the menu loop
                    alert("Come again.");
                    break;
                default:
                    alert("Invalid choice. Please select a valid option.");
                    break;
            }
        }
    } else 
        alert("Account doesn't exist.");
});
