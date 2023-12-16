# Case 1:

# def func():
#     x=5 #---> local variable
#     return x

# print(x) ---> This will produce an error as x is not defined

# Case 2:

x = 7  # ---> Global variable


def func():
    x = 5  # ---> local variable
    return x

# print(x)

# Case 3:


# Suppose you want to override the global variable
x1 = 7


def func2():
    global x1 #---> x1 is now a global variable inside a function
    x1 = 5  # ---> This is no more a local variable
    return x1


print(x1)  #---> Before the function was called we get the original global value of x1
func2() #--> Function has been called
print(x1) #---> Overriden value is printed here as global access of the variable has been given inside the function func2()
