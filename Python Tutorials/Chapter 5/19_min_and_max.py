# min and max
list1 = [60, 6, 8, 3]
print(max(list1))
print(min(list1))

# Now if we have a question that to find the difference between the greatest number of a list and a smallest number of a list. Take the list as an user input


def difference(list2):
    return max(list2)-min(list2)


list2 = []
n = int(input("Enter the range of the list:"))
for i in range(0, n):
    elements = int(input(f"Element {i+1}:"))
    list2.append(elements)
print(list2)
print(difference(list2))
