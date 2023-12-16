# Write a Python function called count_elements that takes a list of elements and returns a dictionary that counts the number of occurrences of each element in the list.
# The count_elements function should work as follows:

# It should take a list of elements as an argument.
# It should create a dictionary where the keys are the elements in the list and the values are the number of times that element appears in the list.
# It should return the resulting dictionary.
# For example, if we call the count_elements function with the following list:


# elements = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"]
# The function should return the following dictionary:

# {
#     "apple": 3,
#     "banana": 2,
#     "orange": 1,
#     "pear": 1
# }
# Good luck!

def count_elements(l):
    # dictionary2 = {}
    # for i in l:
    #     if i in dictionary2:
    #         dictionary2[i] = dictionary2[i]+1
    #     else:
    #         dictionary2[i] = 1

    dictionary2={i:l.count(i) for i in l}

    return dictionary2


elements = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"]
print(count_elements(elements))
