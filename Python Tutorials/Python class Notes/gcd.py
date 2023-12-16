n1 = int(input("Enter 1st number:"))
n2 = int(input("Enter 2nd number:"))
min_value = min(n1, n2)
for i in range(1, min_value+1):
    if (n1 % i == 0 and n2 % i == 0):
        gcd = i
print(f"The gcd of {n1} and {n2} is: {gcd}")
