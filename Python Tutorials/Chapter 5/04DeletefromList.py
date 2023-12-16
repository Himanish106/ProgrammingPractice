# Common methods to delete the data from the list
fruits = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear"]
fruits1 = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear"]
# 1) pop method
fruits.pop()  # ----> pop method if no argument is passed deletes the element from the last
print(fruits)
fruits1.pop(1)
print(fruits1)  # ----> So banana present in index 1 is deleted

# 2) del method
fruits2 = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear"]
del fruits2[1]
print(fruits2)

# 3) remove method
fruits3 = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear"]

# Suppose you don't know where the element is actually present that is the index of that element then you can use remove
fruits3.remove("Banana")
print(fruits3)

# If that element is not present in the list we get an error
fruits4 = ["Mango", "Banana", "Papaya", "Banana", "Sugarcane", "Pear"]
fruits4.remove("Banana")
print(fruits4) #--> so when 2 same elements are present the first occurence of the element gets deleted
