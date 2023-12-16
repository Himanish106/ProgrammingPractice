# @calculate_time
# def square_finder(n):
#    This function returns a list after caluculating the squares upto a certain range

# square_finder()
# This function took 3 secs to run

from functools import wraps
import time


def calculate_time(any_function):
    @wraps(any_function)
    def wrapper_time(*args):
        print(f"Executing {any_function.__name__}")
        t1 = time.time()
        returned_value = any_function(*args)
        t2 = time.time()
        print(f"This function took {t2-t1} secs to run")
        return returned_value
    return wrapper_time


@calculate_time
def square_finder(n):
    return [i**2 for i in range(1, n+1)]


square_finder(1000)
