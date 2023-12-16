# Let us create a function that counts total of numbers
def total(num1, num2):
    return num1+num2


print(total(4, 3))
# Now if we pass more than 2 arguments

# print(total(4, 5, 6, 7))----> So it is obvious we will be getting an error. So to solve this we come with *operator or args method so that we can add as many arguments as we want if initially we don't know how many parameters we require or how many arguments we need to pass. Basically this is used to make flexible functions.

# * operator
# Syntax:- def function_name(*args)
def all_total(*args):
    print(args) #---> (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
    print(type(args))
all_total(1,2,3,4,5,6,7,8,9,10,11,12)

# So basically * operator accepts the argument as a tuple. Keep in mind args is not any keyword or something else. It is just a normal variable of the function that is accepting the arguments as an tuple. You can give any name you want. But according to python naming convention 99% of the cases we name the variable as args.

# So now let us find the total of some numbers:-
def total_num(*args):
    # NOTE: A tuple is passed
    # (1,2,3,4,5,6,7):- Example
    total=0
    for i in args:
        total=total+i
    return total

print(total_num(1,2,3,4,5,6,7))