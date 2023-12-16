# We raise custom exceptions to increase the readability of out program

# example

# def validate(name):
#     if len(name) < 8:
#         raise ValueError("Name is too short")


# username = input("Enter name of the user:")
# validate(username)
# print(f"hello {username}")

# But if we want to write instead of ValueError we write NameToShortError. But in python there is no such exceptions. But we can create it in this way.

class NameTooShortError(ValueError):
    pass


def validate(name):
    if len(name) < 8:
        raise NameTooShortError("Name is too short")


username = input("Enter name of the user:")
validate(username)
print(f"hello {username}")
