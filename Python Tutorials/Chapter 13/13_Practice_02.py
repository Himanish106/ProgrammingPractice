# Write a Python program that takes a list of strings as input and returns a dictionary with the strings as keys and their corresponding positions in the list as values, using the enumerate function.

# For example, if the input list is ['apple', 'banana', 'mango', 'orange'], the program should return a dictionary like this:

# {'apple': 0, 'banana': 1, 'mango': 2, 'orange': 3}
# You can use the input() function to prompt the user to enter a list of strings and then split it using the split() method.

l1 = input("Enter strings:").split(",")
dict1 = {i: pos for pos, i in enumerate(l1)}
print(dict1)
