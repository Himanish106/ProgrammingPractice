def divisible(m, n):
    if m > n:
        print("Sorry!!!Condition m<=n is violate")
    else:
        for i in range(1, n+1):
            if i % m == 0:
                print(i, end=" ")


while True:
    n = int(input("Enter a number:"))
    m = int(input("Enter a number:"))
    if m <= 0 or n <= 0:
        print("Please Enter a Correct Input.... ")
    else:
        divisible(m, n)
        break
