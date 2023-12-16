range_even = int(input("Enter the range:"))
sum = 0
for i in range(range_even+1):
    if i % 2 == 0:
        sum = sum+(i**2)
print("The sum of squares of even numbers are:", sum)
