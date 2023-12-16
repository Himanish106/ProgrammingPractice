# function_returning_function
def outer_func():
    def inner_func():
        print("Inside inner func")
    return inner_func
    # return inner_func()----> So if we give parenthesis here after the function name this means it executes the function and returns the output. So when we call the outer_function() then we no longer need to do var() because already when we call the outer function the inner function gets executed

var=outer_func() #----> So when we call here the outer func then in var inner_func function comes in. Now we can treat var as an function and as we gave parenthesis using var the inner function gets called
var()
#  Invoking the name of a function without the parentheses refers to the object for the function rather than executing it.

def outer_func2(msg):
    def inner_func2():
        print(f"The message is {msg}")
    return inner_func2

var2=outer_func2("Hello there!")
print(var2) #---> <function outer_func2.<locals>.inner_func2 at 0x000001DD9C868EA0>
var2()

# function inside a function is also known as closures