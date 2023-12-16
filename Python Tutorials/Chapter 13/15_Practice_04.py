# Q. Write a Python program that takes a list of names as input and returns a dictionary with the first letter of each name as a key and a list of names starting with that letter as the value.

# For example, if the input list is ['Alice', 'Bob', 'Charlie', 'Eve'], the program should return a dictionary like this:

# {'A': ['Alice'], 'B': ['Bob'], 'C': ['Charlie'], 'E': ['Eve']}
# You can use a dictionary comprehension to create the dictionary, and the startswith() method to check whether a string starts with a particular letter. You may also need to convert the names to uppercase or lowercase to ensure consistent grouping.

list_names = input("Enter the list of names:").split(",")
dict_names = {name[0].upper(): [n for n in list_names if n.startswith(
    name[0].upper())] for name in list_names}
print(dict_names)
