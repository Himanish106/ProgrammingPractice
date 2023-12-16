# FUNCTIONS
# We have used functions before for example:

# name = "Himanish"
# print(len(name))

# But this kind of functions are inbuilt functions in python

# But we can also create functions on our own that is user defined function: With the help of def keyword we can create our functions

def add_two(a, b):
    return a+b


# Now the question comes how to print it
# Process 1:

total = add_two(5, 6)
print(total)

# Process 2

print(add_two(7, 2))

# Now the question comes how to use this functions

a = int(input("Enter 1st number: "))
b = int(input("Enter 2nd number: "))
total1 = add_two(a, b)
print(total1)

# Now with the help of this function we can also concatenate two strings

first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
print(add_two(first_name, last_name))
