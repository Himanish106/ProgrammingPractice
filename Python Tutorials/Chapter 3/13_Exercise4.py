# Ask user to enter a number more than one digit
# Example-1256
# calculate 1+2+5+6 and print

# NOTE: You cannot change the string to integer and also not use digit extraction
number = input("Enter a number\n")
i = 0
total = 0
while i < len(number):
    total = total+int(number[i])
    i = i+1

print(f"The total sum is = {total}")
