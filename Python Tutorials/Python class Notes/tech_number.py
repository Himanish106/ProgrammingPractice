number = input("Enter a number:")
if len(number) % 2 == 0:
    l1 = [number[i] for i in range(0, len(number)//2)]
    l2 = [number[i] for i in range(len(number)//2, len(number))]
    print(l1)
    print(l2)
    c1 = int("".join(l1))
    c2 = int("".join(l2))
    sum_num = c1+c2
    if pow(sum_num, 2) == int(number):
        print("Tech number")
    else:
        print("Not tech number")
else:
    print("Length not even so not tech number")
