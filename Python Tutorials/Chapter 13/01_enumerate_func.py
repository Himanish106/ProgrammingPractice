# We use enumerate function with for loop to track position of our item in iterable

# How can we do this without enumerate function

names = ['abc', 'abcdef', 'himanish']
# 0----> abc
# 1----> abcdef
# 2----> himanish
pos = 0
for name in names:
    print(f"{pos} -----> {name}")
    pos += 1

# With enumerate function
for pos,name in enumerate(names):
    print(f"{pos} -----> {name}")

# Define a function that takes two arguments
# 1) list containing string
# 2) string that you want to find in your list
# and this function will return the index of string in your list and if string is not present then return -1

def list_func(l,string):
    for pos,i in enumerate(l):
        if i==string:
            return pos
    return "not present"


print(list_func(["Himanish","Das","India"],"Indiaa"))