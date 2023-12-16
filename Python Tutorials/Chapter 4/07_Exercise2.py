# Define is_palindrome function that takes one word in string as input and return True if it is palindrome else return False

def is_Palindrome(name):
    if name == name[::-1]:
        return True
    return False


name = input("Enter a name to check whether the string is palindrome or not: ")
print(is_Palindrome(name.upper()))
