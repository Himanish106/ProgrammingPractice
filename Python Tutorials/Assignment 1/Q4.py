number = int(input("Enter the number:"))
sum = 0
while number != 0:
    remainder = number % 10
    sum = sum+remainder
    number = number//10
print("The sum of the digits=", sum)
