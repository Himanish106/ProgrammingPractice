# 1) split method()----> Converts the string to the list
user_info = "Harshit 24".split()
print(user_info)

name, age = "Harshit,24".split(",")  # -----> The string splits at ","
print(name)
print(age)

# So this was how we were taking input
# name1, age1 = input("Enter the name and age of the user: ").split(",")
# print(name1)
# print(age1)

# 2) join method()-----> Convert the lists to string
user_info1 = ["Himanish", "106"]
print(",".join(user_info1)) # -----> This means we are joining the string at the ","

# user_info2 = ["Himanish", 106]
# print(",".join(user_info2)) -----> This will give an error as we can use join method only for two strings
