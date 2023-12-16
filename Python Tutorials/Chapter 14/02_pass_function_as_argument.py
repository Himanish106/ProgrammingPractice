# Let us just recap map function
def square(a):
    return a**2


l = [1, 2, 3, 4]
print(list(map(square, l)))

# Now we will create our own functions that will take another function as an argument

# Example 1


def my_map(function, l):
    lst = []
    for item in l:
        lst.append(function(item))
    return lst


print(my_map(square, l))  # ---> [1, 4, 9, 16]

# Now before this example we had performed map function but we generally use lambda functions while we use map functions:
print(list(map(lambda a: a**2, l)))
# Similarly we can use Example 1 as a map function
print(my_map(lambda a: a**2, l)) # ----> [1, 4, 9, 16]. NOTE: This is not a map function. It is just an attempt to do the program as we do in a map function.

# So now we will be doing my map function using list comprehension
def my_map2(function,l):
    return [function(item) for item in l]

print(my_map2(lambda a: a**2, l))

s=lambda a:a**2
print(list(map(lambda item:s(item),l)))
# So here we have passed function as an argument but this time using completely lambda functions