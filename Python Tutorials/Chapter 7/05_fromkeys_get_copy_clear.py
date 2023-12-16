# 1) fromkeys method
# d={'name':'unknown','age':'unknown','height':'unknown'} ----> So if we note here we are passing same values to each and every key. Instead of writing like this we can use fromkeys method

# i)
d1 = dict.fromkeys(['name', 'age', 'height'], 'unknown')
print(d1)  # ---> {'name': 'unknown', 'age': 'unknown', 'height': 'unknown'}
print(type(d1))  # ---> <class 'dict'>

# ii) We can also use tuples here like we have used lists in the previous example

d2 = dict.fromkeys(('name', 'age', 'height'), 'unknown')
print(d2)

# iii) When we pass a single string in place of the keys each and every single alphabet of the word becomes an individual key

d3 = dict.fromkeys('abc', 'unknown')
print(d3)  # ---> {'a': 'unknown', 'b': 'unknown', 'c': 'unknown'}

# iv) Using range function in place of keys

d4 = dict.fromkeys(range(1, 11), 'unknown')
print(d4)  # ----> {1: 'unknown', 2: 'unknown', 3: 'unknown', 4: 'unknown', 5: 'unknown', 6: 'unknown', 7: 'unknown', 8: 'unknown', 9: 'unknown', 10: 'unknown'}

# v) If we do not pass any value
d5 = dict.fromkeys(range(1, 11))
# ---->{1: None, 2: None, 3: None, 4: None, 5: None, 6: None, 7: None, 8: None, 9: None, 10: None}
print(d5)

# 2) get method
di = {'name': 'Himanish', 'age': 24}
# So to access any element in the dictionary we were using indexing
# print(di['name'])
# i)  But if we give the name of the key wrong like:-
# print(di['names']) ----> So here we are getting an error called KeyError: 'names'. So in order to handle this error we are using get method

print(di.get('name'))  # ---> Himanish

# ii) Now if we give the name of the keys wrong:-
print(di.get('names'))  # --> None
# So if we were using indexing we were getting an error called as keyerror but if we are using get method we are getting None as there is no such key present. So this method is a better one

# iii) Check whether the particular key is present or not

if 'names' in di:
    print("Present")
else:
    print("Absent")  # ---> so this is a valid method

# iv) If we implement the above program using get method
if di.get('names'):
    print('Present')
else:
    print('Absent')
# di.get('names') evaluates into None as 'names' is not present as a key in the dictionary. if None means False

# 3) clear method ---> It just clears the dictionary
di.clear()
print(di) #---> {}

# 4) copy method --> Passes the copy of a dictionary to another dictionary. NOTE: Both the dictionaries are different only the values are same.

di2 = {'name': 'Himanish', 'age': 24}
di3=di2.copy()
print(di3)

# Many people think that they can create a copy of that dictionary like this:-
di4=di2
print(di4)
# But there is a problem in this. Because they are not seperate dictionaries. di4 is just assigned to di2. Any changes made in di2 will affect di4. For example:
popped_item=di2.popitem()
print(di4) #---> {'name': 'Himanish'}. So see if we are popping from di2 it is affecting di4.

# But the case is not so with di3 as we have used copy method that creates a seperate dictionary
print(di3) #----> {'name': 'Himanish', 'age': 24}. So there is no change in di3

# We can also check whether the 2 dictionaries are same or not like this:-
print(di2 is di3) #---> False as di2 and di3 are seperate dictionaries
print(di2 is di4) #---> True as di4 and di2 refers to same memory location