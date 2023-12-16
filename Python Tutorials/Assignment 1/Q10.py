zero_count = 0
positive_count = 0
negative_count = 0
while True:
    number = input("Enter the numbers:")
    if number == 'stop':
        break
    number = int(number)
    if number == 0:
        zero_count += 1
    elif number > 0:
        positive_count += 1
    else:
        negative_count += 1
print("Number of positive numbers entered is:", positive_count)
print("Number of negative numbers entered is:", negative_count)
print("Number of zeroes entered is:", zero_count)
