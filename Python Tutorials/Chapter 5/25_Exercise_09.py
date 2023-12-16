# Write a Python program to remove all duplicates from a list.

# Your program should take a list as input and output a new list with all duplicates removed, while preserving the order of the original list. For example, if the input list is [2, 3, 4, 3, 2, 1, 4], the output should be [2, 3, 4, 1].

list1 = [2, 3, 4, 3, 2, 1, 4]
new_list1 = []
for item in list1:
    if item not in new_list1:
        new_list1.append(item)
print(new_list1)
