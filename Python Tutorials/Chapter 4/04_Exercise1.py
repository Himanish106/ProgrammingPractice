# Define a function which takes two numbers as a input from the user and return greater of two number

def chk_greater(num1, num2):
    if (num1 > num2):
        return f"{num1} is greater"
    return f"{num2} is greater"


num1, num2 = input("Enter 2 numbers: ").split(",")
print(chk_greater(int(num1), int(num2)))
