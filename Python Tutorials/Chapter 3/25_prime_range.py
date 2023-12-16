n1, n2 = input("Enter 2 numbers to set the range\n").split(" ")
n1 = int(n1)
n2 = int(n2)
for i in range(n1, n2+1):
    c = 0
    for j in range(1, n2+1):
        if i % j == 0:
            c = c+1
    if c == 2:
        print(i)
