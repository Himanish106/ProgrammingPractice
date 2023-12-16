# Decorators- enhance the functionality of other functions
# So let us first create two functions

def func1():
    print("This is function 1")


def func2():
    print("This is function 2")

# Suppose if we want a line "This is a awesome function" in both the functions but we don't want to change our initial code. So for this we can use decorators


def decorator_function(any_function):
    def wrapper_function():
        print("This is a awesome function")
        any_function()
    return wrapper_function


var1 = decorator_function(func1)
var1()
var2=decorator_function(func2)
var2()