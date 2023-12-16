# Write a Python program that takes a list of strings as input and outputs the length of the longest string in the list. If there are multiple strings with the same maximum length, the program should output the first one encountered in the list. If the input list is empty, the program should output a message saying so.

list1 = ['mango', 'banana', 'papaya', 'apple']
max_len = len(list1[0])
max_ind = 0
if list1:
    for i in range(1, len(list1)):
        if max_len < len(list1[i]):
            max_len = len(list1[i])
            max_ind = i
    print(
        f"The longest string is {list1[max_ind]} and its length is {max_len}")
else:
    print("The list is empty")
