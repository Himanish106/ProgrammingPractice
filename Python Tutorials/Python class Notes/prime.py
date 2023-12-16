def prime(number):
    if number == 1:
        print("Universal Number")
    elif number > 1:
        for i in range(2, (number//2)+1):
            if number % i == 0:
                print(number, " is not prime")
                break
        else:
            print(number, " is prime")


number = int(input("Enter a number:"))
prime(number)
