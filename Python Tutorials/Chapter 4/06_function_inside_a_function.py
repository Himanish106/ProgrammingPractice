def chk_greater(num1, num2):
    if (num1 > num2):
        return num1
    return num2


def greatest(num1, num2, num3):
    return chk_greater(chk_greater(num1, num2), num3)


num1, num2, num3 = input("Enter 3 numbers: ").split(",")
print(greatest(int(num1), int(num2), int(num3)))
