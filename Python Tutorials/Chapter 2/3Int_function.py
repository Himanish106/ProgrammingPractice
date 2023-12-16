# number1 = input("Enter first number: ")
# number2 = input("Enter second number: ") ---> By default input deals the variables as a String. If we take number 1 as 4 and number 2 as 5 then we will get the answer as 45 as in strings "+" is used to concatenate two strings. So we require int() function
number1 = int(input("Enter first number: "))
number2 = int(input("Enter second number: "))
total = number1 + number2
print(total)  # --> This gives us the answer but we have another case
# print("The total sum is "+total) --> This will give an error as the first part of the print function is a string. As we know we cannot concatenate string with an integer. So we need to now convert integer variable total into string
print("The total sum is "+str(total))

# Similarly if we want to take float as an input then we can use float (float(input("Enter first number: ")))
num1 = str(4)
num2 = int("44")
num3 = float("33")
# Integer and float additions are possible but the result will be in float
print(num2+num3)
