# Strings are collection of characters within single quotes or double quotes

first_name = "Himanish"
last_name = "Das"
full_name = first_name + " " + last_name
print(full_name)
# print(full_name + 3) ---> Error as you cannot add an integer with a string
print(full_name+"3")
print(full_name+str(3))  # --->str is used to convert the number into a string
print((full_name + "\n") * 3) # ---> We can multiply strings using * sign. full_name is printed three times in this example
