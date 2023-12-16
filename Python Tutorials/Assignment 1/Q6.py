c1 = 0
c2 = 0
while True:
    flag = False
    number = int(input("Enter no:"))
    if number == -1:
        break
    if number == 1:
        continue
    else:
        for i in range(2, (number//2)+1):
            if number % i == 0:
                flag = True
                break
        if flag:
            c1 = c1+1
        else:
            c2 = c2+1

print("Total composite:", c1)
print("Total prime:", c2)
