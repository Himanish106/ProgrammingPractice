# set data type
# It is an unique and unordered collection of items

s1 = {1, 2, 3, 2}
print(s1)  # ----> {1, 2, 3}
# So if we see here even though 2 is present twice in the set s1 still in the output we are getting 2 once. This proves that set is unique

# print(s1[2]) ----> Since set is unordered so indexing is not possible.

# Consider you have a list:-
l = [1, 1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 9]
# Now if the question is given to remove all the duplicates from the lists
new_list = list(set(l))
print(new_list)  # ----> [1, 2, 3, 4, 5, 6, 7, 8, 9]

# i) Adding element in the set
s1.add(4)
print(s1)  # {1, 2, 3, 4}
s1.add(5)
print(s1)  # {1, 2, 3, 4, 5}
s1.add(4)
print(s1) # {1, 2, 3, 4, 5} ---> 4 did not appeared again as set is unique and cannot contain duplicate elements

# ii) Deleting elements from set
s1.remove(3)
print(s1) #----> {1, 2, 4, 5}

# s1.remove(10)
# print(s1) KeyError: 10 Since 10 is not present in the list so you'll get an error

s1.discard(2)
print(s1) #----> {1, 4, 5}

s1.discard(10)
print(s1) #----> {1, 4, 5}. So in remove we were getting an error if element was not present but in case of discard we will not get any error.

# iii) Clear the complete set
s1.clear()
print(s1) #----> set()

# iv) copy method
s2={1,4,5}
s3=s2.copy()
print(s3) #---> {1, 4, 5}
print(s3 is s2) #---> False

# You can store any data type in set but not list and dictionary