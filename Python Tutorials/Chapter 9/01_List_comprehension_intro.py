# With the help of list comprehension we can create a list in a single line

# Example:1 
# Create a list of squares from 1 to 10. Normal method:-

squares=[]
for i in range(1,11):
    squares.append(i**2)

print(squares)

# Now if we do it using list comprehension
squares2=[i**2 for i in range(1,11)]
print(squares2) #----> So we are getting the same answer but here the line of code becomes so simpllified.

# Example:2
# Create a list of negative numbers from 1 to 10
negative=[]
for i in range(1,11):
    negative.append(-i)

print(negative)

# Now if we do it using list comprehension
negative2=[-i for i in range(1,11)]
print(negative2)

# Example 3:
# Take 3 names within a list and display the 1st character in a new list

names=['Harshit','Rohan','Meena']
new_name_list=[]
for name in names:
    new_name_list.append(name[0])

print(new_name_list)

# Now if we do it using list comprehension
new_list2=[name[0] for name in names]
print(new_list2)