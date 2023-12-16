# Define a function which will take a list containing numbers as input and return list containing square of every elements
def square_list(l):
    newlist = []
    for i in l:
        newlist.append(i**2)
    return newlist


lst = []
n = int(input("Enter the number of elements you require in the lists:"))
for i in range(0, n):
    elements = int(input(f"Element {i+1}="))
    lst.append(elements)
print(lst)
print(square_list(lst))
