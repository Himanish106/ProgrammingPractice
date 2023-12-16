# Question: Write a Python program to create a dictionary to store the names and ages of three students. Then, prompt the user to enter a student name and check if that name exists in the dictionary. Display an appropriate message indicating whether the student is present or not.

# Please note that the question is asking for a program to be written. You can write the code to implement the desired functionality.

keys = input("Enter names of 3 students:").split(",")
age = input("Enter the age of three students:").split(",")
dictionary = dict(zip(keys, age))
name = input("Enter a name to search:")
if name in dictionary:
    print("found")
else:
    print("Not found")
