# So in the previous program with the help of decorators we were creating a decorator function that takes only integer arguments. Similarly for other data types we have to create seperate decorator functions accordingly. But it is actually a very tedious job. So today we would be learning about decorators using arguments

from functools import wraps


def only_data_type_allow(data_type):
    def decorator(function):
        @wraps(function)
        def wrapper(*args):
            if all([type(arg) == data_type for arg in args]):
                return function(*args)
            return "invalid arguments"
        return wrapper
    return decorator


@only_data_type_allow(str)
def string_join(*args):
    string = ""
    for arg in args:
        string = string+arg
    return string



print(string_join("Himanish", " ", "Das", " ", "Welcome", 8)) # ---> invalid arguments
print(string_join("Himanish", " ", "Das", " ", "Welcome"))
