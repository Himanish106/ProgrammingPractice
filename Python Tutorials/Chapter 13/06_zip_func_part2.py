l = [(1, 2), (2, 3), (3, 4), (4, 5)]
# You will have to create two seperate list or tuple from this i.e:
# l1=[1,2,3,4]
# l2=[2,3,4,5]

# For this we can use * operator i.e. using the concept of unpacking

print(list(zip(*l))) # ---> [(1, 2, 3, 4), (2, 3, 4, 5)]---> Now we have to store it in seperate list
l1, l2 = list(zip(*l))
print(l1)  # ---> By default it will come into a tuple as zip deals with tuples
print(l2)
print(list(l1))
print(list(l2))

l3 = [4, 3, 2, 6, 9, 15]
l4 = [2, 7, 3, 55, 6, 3]
# Now create a new list and append the max numbers by comparing each numbers at the same index of the 2 lists. Use zip function
new_list = []
for pair in zip(l3, l4):
    new_list.append(max(pair))

print(new_list)
