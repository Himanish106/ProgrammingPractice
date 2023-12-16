# Write a Python function called merge_dicts that takes two dictionaries as arguments and returns a new dictionary that contains all the key-value pairs from both dictionaries.
# The merge_dicts function should work as follows:

# It should take two dictionaries as arguments.
# It should create a new dictionary that contains all the key-value pairs from both dictionaries.
# If a key exists in both dictionaries, the value from the second dictionary should be used in the new dictionary.
# It should return the resulting dictionary.
# For example, if we call the merge_dicts function with the following dictionaries:


# dict1 = {"apple": 1, "banana": 2, "orange": 3}
# dict2 = {"banana": 4, "pear": 5, "kiwi": 6}
# The function should return the following dictionary:


# {
#     "apple": 1,
#     "banana": 4,
#     "orange": 3,
#     "pear": 5,
#     "kiwi": 6
# }

def merge_dict(d1, d2):
    d1.update(d2)
    return d1


dict1 = {"apple": 1, "banana": 2, "orange": 3}
dict2 = {"banana": 4, "pear": 5, "kiwi": 6}
print(merge_dict(dict1, dict2))
