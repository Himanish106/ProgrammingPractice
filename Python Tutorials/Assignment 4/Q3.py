num = 0


def take_input():
    while True:
        global num
        num = int(input("Enter a number to check prime:"))
        if validate_input(num) == 1:
            break


def validate_input(num):

    try:
        if num > 0:
            return 1
        else:
            print("Please enter the number greater than 0")
    except ValueError:
        print("Please enter the correct value")


def check_prime(num):
    for i in range(2, (num//2)+1):
        if num % i == 0:
            return "Not Prime"
    return "Prime"


def main():
    take_input()
    print(f"The number is {check_prime(num)}")


main()
