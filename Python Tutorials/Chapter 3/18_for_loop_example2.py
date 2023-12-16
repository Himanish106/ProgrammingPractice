# Ask user to enter a number more than one digit
# Example-1256
# calculate 1+2+5+6 and print

# NOTE: You cannot change the string to integer and also not use digit extraction
number = input("Enter a number to find the sum of the digits: ")
total = 0
for i in range(0, len(number)):
    total = total+int(number[i])
print(total)
