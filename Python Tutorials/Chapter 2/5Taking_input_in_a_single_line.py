# name, age = input("Enter name and age ").split()
# For the timing just consider split function is a function that helps to take more than one user input
name, age = input("Enter name and age ").split(",")
#  So here we use , as a seperator between the 2 variables name and age. So during runtime if we seperate them using a space we are going to get an error
print(name)
print(age)
