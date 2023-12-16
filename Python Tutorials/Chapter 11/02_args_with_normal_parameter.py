# def multiply_nums(*args):
#     multiply=1
#     for i in args:
#         multiply=multiply*i
#     return multiply

# print(multiply_nums(2,4,5,6)) #---> 240

# Now if we write the same function in this manner:-
def multiply_nums(num, *args):
    multiply = 1
    print(num)
    print(args)
    for i in args:
        multiply = multiply*i
    return multiply


print(multiply_nums(2, 4, 5, 6)) # ---> 120. So we are getting 120 instead of 240. This is because 2 is been taken by the parameter num and * args takes rest of the arguments 4,5,6 in te form of tuples. 2 is not counted within the tuples.

# Case 1:


def multiply_nums(num, *args):
    multiply = 1
    print(num)  # ---> 2
    print(args) # --> (). We are getting an empty tuple because we have not passed any argument
    for i in args:
        multiply = multiply*i
    return multiply


print(multiply_nums(2))

# Case:2
# def multiply_nums(num,*args):
#     multiply=1
#     print(num)
#     print(args)
#     for i in args:
#         multiply=multiply*i
#     return multiply

# print(multiply_nums()) ----> In this case we will be getting an error because num is a required positional attribute. But tuple can be empty.

# Case 3:
# def multiply_nums(*args,num):
#     multiply=1
#     print(num)
#     print(args)
#     for i in args:
#         multiply=multiply*i
#     return multiply

# print(multiply_nums(2,4,5,6)) ----> We will be getting an error here because tuples can accept any number of arguments. Since *args is the first argument all values go inside the tuple as tuples can acept any number of arguments. So ultimately no arguments gets passed into the parameter num. So we will be getting an error
