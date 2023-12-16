#  Create a class called BankAccount that represents a bank account. The class should have private attributes for the account number (__account_number) and balance (__balance). Implement methods to deposit (deposit()), withdraw (withdraw()), and check balance (get_balance()). The withdrawal should only be allowed if the account balance is sufficient. Write a program to demonstrate the usage of the BankAccount class and its data hiding concept.

class BankAccount:
    def __init__(self,account_number,balance):
        self.__account_number=account_number
        self.__balance=balance
    def deposit(self,amount):
        self.__balance=self.__balance+amount
    def withdraw(self,amount):
        self.__balance=self.__balance-amount
    def get_balance(self):
        return self.__balance

bank=BankAccount(57652,55000)
bank.deposit(10000)
print(bank.get_balance())