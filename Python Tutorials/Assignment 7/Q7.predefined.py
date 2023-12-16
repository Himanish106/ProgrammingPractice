l1 = input("Enter the elements in the list1:").split(",")
l2 = input("Enter the elements in the list2:").split(",")
# print("Dictionary with predefined function:", dict(zip(l1, l2)))
dictionary = {}
for i in range(len(l1)):
    dictionary[l1[i]] = l2[i]

print("Dictionary with predefined function:", dictionary)
