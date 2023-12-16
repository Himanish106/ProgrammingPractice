# Write a Python class called BankAccount that represents a bank account. The class should have the following attributes and methods:

# Attributes:

# account_number (string): representing the account number.
# balance (float): representing the current balance in the account.
# Methods:

# deposit(amount): adds the given amount to the account balance.
# withdraw(amount): subtracts the given amount from the account balance, if the balance is sufficient.
# get_balance(): returns the current balance in the account.
# Your task is to implement the BankAccount class with the specified attributes and methods. Test your class by creating an instance of BankAccount, performing some deposits and withdrawals, and checking the balance.

# Remember to handle any necessary input validation and consider edge cases, such as overdrawing from the account or negative amounts.

# Good luck with the implementation!


class BankAccont:
    def __init__(self, balance, account_number=""):
        self.account_number = account_number
        self.balance = balance

    @property
    def get_account_number(self):
        return self.account_number

    @get_account_number.setter
    def set_account_number(self, accno):
        self.account_number = accno

    def deposit(self, amount):
        self.balance = self.balance+amount

    def withdraw(self, amount):
        self.balance = self.balance-amount

    def get_balance(self):
        return f"The current account balance for account number {self.get_account_number} is {self.balance}"


bank = BankAccont(25000)
bank.set_account_number = '27334576'
bank.deposit(500)
print(bank.get_balance())
