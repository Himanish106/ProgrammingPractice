def factorial(num):
    if num == 0:
        return 1
    else:
        return num*factorial(num-1)


number = eval(input("Input a number:"))
print(factorial(number))
