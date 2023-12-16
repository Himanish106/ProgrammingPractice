i = 0
j = 0
sum1 = 0
sum2 = 0
print("Enter -1 to exit....")
while True:
    number = int(input("Enter a number:"))
    if number == -1:
        break
    elif number >= 0:
        sum1 = sum1+number
        i = i+1
    else:
        sum2 = sum2+number
        j = j+1
print("The average of negative number is:", sum2/j)
print("The average of positive number is:", sum1/i)
