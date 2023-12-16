#  Write a program to take a tuple from the user and show the reverse of that tuple.

t1 = tuple(input("Enter elements in the tuple:").split(","))
print(t1[::-1])
