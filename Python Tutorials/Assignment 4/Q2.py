# Global Variables
num1 = 0
num2 = 0
num3 = 0


def check_input():
    global num1, num2, num3
    while True:
        try:
            num1 = int(input("Enter 1st number:"))
            num2 = int(input("Enter 2nd number:"))
            num3 = int(input("Enter 3rd number:"))
            if num1 > 0 and num2 > 0 and num3 > 0:
                break
            else:
                print("Please enter valid positive numbers greater than 0")
        except ValueError:
            print("Invalid Input. Please enter valid integers")


def greatest_check(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        return num1
    elif num2 > num1 and num2 > num3:
        return num2
    else:
        return num3


def main():
    check_input()
    print(f"The greatest among 3 numbers are:{greatest_check(num1,num2,num3)}")


main()
