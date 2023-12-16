# Ask the user for a name
# Example:- Harshit Vashisth
# print count of each words
# Output:-

# H: 1
# a: 2
# r: 3
# s: 3
# h: 3
# i: 2
# t: 2
#  : 1
# V: 1

name = input("Enter user name\n")
temp_var = ""
for i in range(0, len(name)):
    if name[i] not in temp_var:
        temp_var = temp_var+name[i]
        print(f"{name[i]} : {name.count(name[i])}")
