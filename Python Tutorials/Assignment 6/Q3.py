# Write a program to access any value from a tuple, which contain a list or another tuple inside that tuple.
user_list = list(
    input("Enter a list of values separated by commas: ").split(","))
user_tuple = tuple(
    input("Enter a tuple of values separated by commas: ").split(','))

new_tuple = ()

for value in [user_list, user_tuple]:
    new_tuple = new_tuple + (tuple(value),)

print("New tuple containing user's list and tuple: ", new_tuple)
