# define a function
# input

# num,iterable(tuple or list anything you wish) containing number as args

# example
# nums=[1,2,3]
# to_power(3,*nums)

# output:-
# list-----> [1,8,27]

# If user did'nt pass any args then give the user a message 'hey you did'nt pass args'
# else
# return list

# NOTE: Use list comprehension

def to_power(num,*args):
    if args==():
        return  "Hey you didn't pass args"
    else:
        return [i**num for i in args]

list_num=[1,2,3]
print(to_power(3,*list_num))
