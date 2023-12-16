# Print sum of n natural numbers
n = int(input("Enter the range: "))
i = 1
total = 0
while i <= n:
    total = total+i
    i = i+1
print(f"Sum of first {n} natural numbers are {total}")
