# 1) With the help of functions implement a program that prints the last character of the string

# def last_char(name):
#     return name[-1]


# name = input("Enter a name\n")
# print(last_char(name))

# 2) With the help of functions implement a program that checks whether the number is odd or even


# def chk_odd_even(num):
#     if num % 2 == 0:
#         return 1
#     else:
#         return 0


# number = int(input("Enter a number: "))
# if chk_odd_even(number) == 1:
#     print(f"{number} is even")
# else:
#     print(f"{number} is odd")

# Let us do question 2 in a much smaller way

# def chk_odd_even(num):
#     if num % 2 == 0:
#         return "even"
#     return "odd"


# number = int(input("Enter a number: "))
# print(f"{number} is {chk_odd_even(number)}")

# A much smaller implementation can be done

def is_even(number):
    return number % 2 == 0 # --> This returns a boolean value if this expression is true then it returns "True", "False" otherwise


print(is_even(5))
