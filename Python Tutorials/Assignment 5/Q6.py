l = input("Enter the elements in the list:").split(",")
while "" in l:
    l.remove("")
print(l)