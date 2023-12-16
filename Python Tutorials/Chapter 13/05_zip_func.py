user_id = ['user1', 'user2', 'user3']
names = ['Rahul', 'Ravi', 'Amrit']
# print(zip(user_id, names)) <zip object at 0x000001E2FBCBE240> ---> zip is also an iterator


print(list(zip(user_id, names))) # ---> [('user1', 'Rahul'), ('user2', 'Ravi'), ('user3', 'Amrit')]. zip() function creates an iterator that will aggregate elements from two or more iterables. You can use the resulting iterator to quickly and consistently solve common programming problems, like creating dictionaries.

example = [('a', 1), ('b', 2), ('c', 3)]
print(dict(example))  # ---> {'a': 1, 'b': 2, 'c': 3}
# After running the zip function converting it into a list it is also coming as multiple tuples inside a list. So we can typecast it into a dictionary
print(dict(zip(user_id,names))) #----> {'user1': 'Rahul', 'user2': 'Ravi', 'user3': 'Amrit'}
user_id1 = ['user1', 'user2']
names1 = ['Rahul', 'Ravi', 'Amrit']
print(dict(zip(user_id1,names1))) #----> {'user1': 'Rahul', 'user2': 'Ravi'}. Amrit has been ignored as there has been no value to hold Amrit.

# You can also zip more than 2 list or tuple together
last_names=['Kumar','Sharma','Dey']
print(list(zip(user_id,names,last_names)))
# print(dict(zip(user_id,names,last_names))) ---> Error