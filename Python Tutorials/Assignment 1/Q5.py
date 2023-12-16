limit = int(input("Enter the value of n:"))
sum = 0
for i in range(1, limit+1):
    sum = sum+((i**i)/i)
print("The sum of the series is ", sum)
