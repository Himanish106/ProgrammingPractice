# You must have to have a complete understanding of functions,
# first class function/closures
# then finally we will learn about decorators

def square(a):
    '''This function performs square of two numbers'''
    return a**2


# print(square(7))
s = square  # ---> We can use s as we treat a function
print(s(7))
print(s.__name__)
print(square.__name__) #---> So from the above two we are getting the same name square
print(s) #--> <function square at 0x000001E325418D60>
print(square) #--> <function square at 0x000001E325418D60>
print(s is square) #--> True
print(square.__doc__)
print(s.__doc__) 