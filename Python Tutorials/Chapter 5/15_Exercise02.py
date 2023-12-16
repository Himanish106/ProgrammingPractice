# Define  a function which will take a list as an argument.Take the list as an input from the user.This function will return a reversed list.Note:Do not use reverse function or string slicing i.e. [::-1]
# Try to do with append and pop method
def reverse_list(l):
    reversed_list = []
    for i in range(len(l)):
        reversed_list.append(l.pop())
        i = i-2
    return reversed_list


lst = []
n = int(input("Enter the number of elements you require in the lists:"))
for i in range(0, n):
    elements = int(input(f"Element {i+1}="))
    lst.append(elements)
print(lst)
print(reverse_list(lst))

# 1) Reversal of a list using reverse function


def reverse_list2(l1):
    # return l1.reverse() ---> If we write this we will get None as the returned value. This is because l1.reverse() reverse the lists but does'nt return anything hence we will get a NULL value
    l1.reverse()
    return l1


numbers = list(range(1, 11))
print(reverse_list2(numbers))
print(numbers)  # ---> Original list gets reversed

# 2) Using list slicing
def reverse_list3(l2):
    return l2[::-1]


numbers1 = list(range(1, 11))
print(reverse_list3(numbers1))
print(numbers1)  # ---> Original list does not get reversed
