def add(a, b):
    '''Function to add 2 numbers'''
    return a+b


def twice(a):
    '''Function to find twice of a number'''
    return a*2


print(twice(add(2, 3)))
print(add.__doc__)