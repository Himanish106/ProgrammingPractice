num1, num2, num3 = input("Enter 3 numbers to find the average ").split(",")
average = (int(num1)+int(num2)+int(num3))/3
print(f"The average is {average}")
# Note split works only with strings.
