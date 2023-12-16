# What are doc strings
# How to write doc strings
# How to see doc strings
# What is help function

# Docstring:- We use triple single quotes or triple double quotes for docstring

def add(a, b):
    '''This function takes 2 numbers as input and returns the sum'''
    return a+b


print(add(2, 3))
# Now to view this docstring
# ---> This function takes 2 numbers as input and returns the sum
print(add.__doc__)

# len,sum,max,min,sorted etc---> This built in functions has docstring defined in it. We can view them
print(len.__doc__)
print(map.__doc__)
print(sorted.__doc__)

print(help(sum)) #----> Help function is used to find what the built in function works