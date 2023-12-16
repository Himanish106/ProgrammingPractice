# 1) count() method ---> Counts the occurences of number of elements in the lists
fruits = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear", "Mango"]
print(fruits.count("Mango"))  # ----> 2 (As "Mango" is present two times)

# 2) sort() method ----> Sorts the lists
fruits.sort()
print(fruits)  # ---> Sorts the list in its alphabetical order

num = [5, 7, 3, 0, 10, 1]
num.sort()
print(num)

# list1=["Hello",1,2,3,"How","are",6,8,None,"you"]
# list1.sort()
# print(list1) -----> This will give an error as we cannot sort elements of different data types

# 3) sorted function ---> This only prints the sorted list but does not sort the original list. This is the major difference between sort method and sorted function
num1 = [5, 7, 3, 0, 10, 1]
print("Sorted List: ", sorted(num1))
print("Original list: ", num1)

# 4) clear() method ----> Empties the list
num1.clear()
print(num1)

# 5) copy() method ----> Creates a copy of the list
num2 = [5, 7, 3, 0, 10, 1]
num2_copy=num2.copy()

print(num2_copy)
print(num2 is num2_copy) #----> False as num2_copy and num2 are 2 different lists only their values are same
print(num2==num2_copy) #----> True as values are same