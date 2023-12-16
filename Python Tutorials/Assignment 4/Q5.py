num1 = 0
num2 = 0


def take_input():
    global num1, num2
    n1 = int(input("Enter 1st number:"))
    n2 = int(input("Enter 2nd number:"))
    num1 = n1
    num2 = n2


def menu():
    while True:
        print("..........MENU.............")
        print("1.Press 1 for addition ")
        print("2.2.Press 2 for subtraction ")
        print("3.Press 3 for multiplication")
        print("4.Press 4 for division")
        print("...............................")
        choice = int(input("Enter your choice:"))
        if choice > 4 or choice <= 0:
            print("Please enter a correct option.... ")
        else:
            break
    return choice


def operation(num1, num2):
    choice = menu()
    if choice == 1:
        sum=lambda a,b:a+b 
        return f"The sum is {sum(num1, num2)}"
    elif choice == 2:
        subtraction=lambda a, b: a-b
        return f"The subtraction is {subtraction(num1, num2)}"
    elif choice == 3:
         multiply=lambda a, b: a*b
         return f"The multiplication is {multiply(num1, num2)}"
    else:
         divide=lambda a, b: a//b
         return f"The division is {divide(num1, num2)}"


def main():
    take_input()
    print(operation(num1, num2))


main()
