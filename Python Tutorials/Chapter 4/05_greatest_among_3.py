def chk_greatest_among_3(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        return f"{num1} is the greatest"
    elif num2 > num1 and num2 > num3:
        return f"{num2} is the greatest"
    else:
        return f"{num3} is the greatest"


num1, num2, num3 = input("Enter 3 numbers to find the greatest: ").split(",")
print(chk_greatest_among_3(int(num1), int(num2), int(num3)))
