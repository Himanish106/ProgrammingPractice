# Input a name from the user of any length and add 4 stars on left and 4 stars on right
user = input("Enter name\n")
print(user.center(len(user) + 8, "*"))
