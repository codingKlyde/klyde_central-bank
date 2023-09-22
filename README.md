# :dollar: **Klyde Central Bank** :dollar:
This web application simulates a basic bank account management system. It allows users to log in with their name, choose between a savings or checking account, and perform various banking operations such as depositing, withdrawing, and checking their balance.

## :hammer: HTML Struture 
The structure of this web application is quite straightforward. It consists of an HTML5 document structure with the necessary meta tags, title, and external CSS and JavaScript file references.


## :paintbrush: CSS Styling
Key CSS rules include setting margins, padding, fonts, background colors, and button styles. 


## :brain: JavaScript Logic
The website utilizes object-oriented programming principles with classes to represent bank accounts, error handling for input validation and selection control.


### BankAccount Class:
The `BankAccount` class serves as the parent class for both savings and checking accounts. It has the following attributes:
- `accountHolderName`: Stores the name of the account holder.
- `balance`: Tracks the account's balance.

*Methods:*
1. `deposit(amount)`: This allows users to deposit funds into their account. It uses a try-catch block to handle errors such as invalid input or negative deposits. The `finally` block logs the deposit attempt. If successful, it returns a deposit confirmation message.
2. `withdraw(amount)`:This handles withdrawals, including fees for checking accounts. It also uses try-catch to manage errors like insufficient balance or invalid withdrawal amounts. The `finally` block logs the withdrawal attempt. It returns a withdrawal confirmation message or an error message.
3. `checkBalance()`: Returns the current balance.

### Subclasses
- `SavingsAccount`: A subclass of `BankAccount` and inherits its methods. It is created for savings accounts.
- `CheckingAccount`: Another subclass of `BankAccount` designed for checking accounts.

### User Interaction with Switch Statements
Once the login button is clicked, it prompts the user to enter a name. The code then converts the name to lowercase for case-insensitive matching.

After successful login (e.g., "john"), the user is prompted to select an account type (savings or checking). The switch statement efficiently manages the user's choice:

- **Deposit** - It prompts for the deposit amount and calls the `deposit` method.
- **Withdraw** - Similarly, it prompts for withdrawal amount and calls the `withdraw` method.
- **Check Balance**: Calls the `checkBalance` method and displays the current balance.
- **Exit**: Allows users to exit the menu.

### Error Handling with Try-Catch-Finally
To ensure a robust and safe user experience, try-catch blocks are used. They address potential issues like:

- Invalid input (e.g., non-numeric or negative amounts).
- Insufficient balance for withdrawals.

The try-catch blocks gracefully handle these situations, returning informative error messages. Meanwhile, the `finally` block logs each deposit and withdrawal attempt, enhancing transparency and security.


