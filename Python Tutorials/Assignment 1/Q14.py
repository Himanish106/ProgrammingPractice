num = 0


def take_input():
    global num
    num = int(input("Enter a number to check prime:"))
    validate_input(num)


def validate_input(num):
    while True:
        try:
            if num > 0:
                break
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
