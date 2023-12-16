# fibonacci series
# 0 1 1 2 3 5 8 13 21 34

def fibonacci_seq(n):
    a = 0  # --> First number
    b = 1  # --> Second number
    if n == 1:
        print(a)
    elif n == 2:
        print(a, b)

    else:
        print(a, b, end=" ")
        for i in range(n-2):
            c = a+b
            a = b
            b = c
            print(b, end=" ")


n = int(input("Enter range\n"))
fibonacci_seq(n)
