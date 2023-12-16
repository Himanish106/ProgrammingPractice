# Write a Python program that takes two lists of integers as input, and outputs a new list containing the elements that are common to both input lists. The output list should not contain any duplicates. If there are no common elements between the input lists, the program should output a message saying so.
#  Here are two sample lists you can use to test your program:

# list1 = [1, 2, 3, 4, 5]
# list2 = [3, 4, 5, 6, 7]
# With these input lists, the program should output the following list of common elements:

# [3, 4, 5]

list1 = [1, 2, 3, 4, 5]
list2 = [3, 4, 5, 6, 7]
new_list = []
flag = False
for i in range(0, len(list1)):
    for j in range(0, len(list2)):
        if list1[i] == list2[j] and list1[i] not in new_list:
            new_list.append(list1[i])
            flag = True

if flag == False:
    print("There are no common elements in the lists")
else:
    print(f"The resultant list is:{new_list}")
