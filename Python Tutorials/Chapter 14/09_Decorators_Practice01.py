# @print_function_data
# def add(a,b):
#     '''This function takes two numbers as an arguments and print their sum'''
#     return a+b

# output:-
# You are calling add function
# This function takes two numbers as an arguments and print their sum
# 9

from functools import wraps


def print_function_data(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        print(f"You are calling {function.__name__} function")
        print(f"{function.__doc__}")
        return function(*args, **kwargs)
    return wrapper

@print_function_data
def add(a, b):
    '''This function takes two numbers as an arguments and print their sum'''
    return a+b


print(add(4, 5))
