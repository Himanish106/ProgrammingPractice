fruits1 = ['mango', 'banana']
fruits1.insert(1, "grapes")
print(fruits1)  # ---> So grapes comes in the 1st index that is after mango

# Insert method adds element at the specified index. In case if that particular index is not present in the list then automatically that element gets added at the last. While append method inserts the element only at the last

fruits1.insert(5, "orange")
print(fruits1)  # ---> So if the particular index is not present in the list then automatically that particular element gets added at the last

num1 = [5, 6, 7, 8]
num2 = [9, 10, 11, 12, 13]
print(num1+num2)  # ----> This is the process to concatenate two lists

studentNames1 = ["Anil", "Rajdeep", "Abhishek", "Naveen"]
studentNames2 = ["Abhiroop", "Danish", "Raj"]
# print(studentNames1+studentNames2)
# print(studentNames1)

# Suppose we want to extend the original list by concatenating it with other list. We can do it by using extends method.
studentNames1.extend(studentNames2)
print(studentNames1)

vegetable1 = ["Onion", "Cabbage", "Cucumber", "Spinach"]
vegetable2 = ["Tomato", "Capsicum", "Bitter Gourd"]
vegetable1.append(vegetable2)
print(vegetable1) # ---> ['Onion', 'Cabbage', 'Cucumber', 'Spinach', ['Tomato', 'Capsicum', 'Bitter Gourd']]

# So here is the major difference between append and extend. When we append the second list to first list it becomes a list inside a list as the whole list gets attached to the first list. But when we use extend the elements of the second list get attached to the first list
