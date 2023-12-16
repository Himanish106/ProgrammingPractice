def decorator_function2(any_function):
    def wrapper_function(*args, **kwargs):
        '''This is my wrapper function'''
        print("This is a wrapper function")
        return any_function(*args, **kwargs)
    return wrapper_function


@decorator_function2
def add(a, b):
    '''This is my add function'''
    return a+b


# print(add(2, 3))
# print(add.__doc__) ----> Here we are getting the doctring of wrapper function instead of add function because we are returning the wrapper function finally but the add function is returned within the wrapper function. So as soon as the add function is called the decorator function gets invoked and we get the docstring of wrapper function.

# Solving the above problem

from functools import wraps
def decorator_function3(any_function):
    @wraps(any_function)
    def wrapper_function(*args, **kwargs):
        '''This is my wrapper function'''
        print("This is a wrapper function")
        return any_function(*args, **kwargs)
    return wrapper_function


@decorator_function3
def add2(a, b):
    '''This is my add function'''
    return a+b

print(add2.__doc__)