# In our previous program we have seen after creating decorator we were using a variable named var then we were calling our function. But it should not be called a decorator until and unless we use the concept of "SYNTACTIC SUGAR".

# Decorators are Python syntactic sugar that allows us to apply Higher-Order Functions to a function definition in a single line of code, and have that higher order logic be automatically applied anywhere that the function is used.

# The syntax is we have to use the "@" symbol followed by the decorator function name. And we have to write the syntax just before those functions whose functionalities we want to increase

def decorator_function(any_function):
    def wrapper_function():
        print("This is a wrapper function")
        any_function()
    return wrapper_function


@decorator_function
def func1():
    print("This is function 1")


@decorator_function
def func2():
    print("This is function 2")


func1()
func2()
