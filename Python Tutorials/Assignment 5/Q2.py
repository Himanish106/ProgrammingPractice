l = input("Enter the numbers in the list:").split(",")
l1 = [int(i) for i in l]
max = l1[0]
for i in l1:
    if i > max:
        max = i

print(max)
