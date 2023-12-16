my_list = input("Enter elements in the list:").split(",")
last_elem = my_list.pop()
my_list.insert(0, last_elem)
print(my_list)
# Output: [5, 1, 2, 3, 4]
