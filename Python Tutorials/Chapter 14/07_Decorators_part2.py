# def decorator_function(any_function):
#     def wrapper_function():
#         print("This is a wrapper function")
#         any_function()
#     return wrapper_function


# @decorator_function
# def func1():
#     print("This is function 1") ----> This function is okay if it does not accepts arguments. But there will be a problem if it accepts arguments

# def decorator_function(any_function):
#     def wrapper_function():
#         print("This is a wrapper function")
#         any_function()
#     return wrapper_function


# # @decorator_function
# def func1(a):
#     print("This is function 1 with argument ",a)

# func1(7)
# It is obvious we will be getting an error because inside the wrapper class in decorator_function we can see that wrapper_function does not accepts any arguments. 

# var=decorator_function(func1)
# var() ----> This is actually how a decorator function works. So if we see here at first in var as soon as we call the decorator_function the wrapper function is stored. As soon as we call var() then we actually call the wrapper function. But see inside the wrapper function func1 is called that is accepting 1 argument but the wrapper class is accepting 0 arguments so it is obvious we will be getting an error.

# So to solve the problem we will be using concept of *args and *kwargs

def decorator_function(any_function):
    def wrapper_function(*args,**kwargs):
        print("This is a wrapper function")
        any_function(*args,**kwargs)
    return wrapper_function


@decorator_function
def func1(a):
    print("This is function 1 with argument ",a)

func1(7)

# *args passes variable number of non-keyworded arguments list and on which operation of the list can be performed.
# **kwargs passes variable number of keyword arguments dictionary to function on which operation of a dictionary can be performed. you can run above program without **kwargs as well

# Still there is another problem in this program

# @decorator_function
# def add(a,b):
#     return a+b

# print(add(2,3)) ---> So at first we may think that since add function is returning some value so we print it. But if we do so We will only be getting a line i.e. "This is a wrapper function" and another value i.e. None. We are getting None as addition is not being able to print. Now if we look the any_function it is just called but actually it returns a value. So until and unless we return the any_function it is never possible to obtain the value.So to solve this problem

def decorator_function2(any_function):
    def wrapper_function(*args,**kwargs):
        print("This is a wrapper function")
        return any_function(*args,**kwargs)
    return wrapper_function

@decorator_function2
def add(a,b):
    return a+b

print(add(2,3))