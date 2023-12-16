def multiply_nums(*args):
    multiply=1
    for i in args:
        multiply=multiply*i
    return multiply

nums=[2,3,4]
# print(multiply_nums(nums))----> [2, 3, 4]. So here the whole list is passed as an argument and its elements are not accessed. So to access the elements we can use the *operator but this time as an argument

print(multiply_nums(*nums))
# Same will be the case in tuple