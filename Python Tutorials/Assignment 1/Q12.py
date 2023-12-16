def check_ugly(n):
    if n <= 0:
        return 0
    for factors in [2, 3, 5]:
        while n % factors == 0:
            n = n//factors
    if n == 1:
        return 1
    else:
        return 0


num = int(input("Enter a number:"))
if check_ugly(num) == 1:
    print("Ugly Number")
else:
    print("Not Ugly Number")
