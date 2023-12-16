# EXERCISE - WATCH COCO
# Ask user's name and age
# If user's name start with ('a' or 'A') and age is above 10 then:
# Print "You can watch coco movie"
# Else print "Sorry! you cannot watch coco"
name, age = input("Enter user's name and age\n").split(",")
age = int(age)
# if (name.startswith("A") or name.startswith("a")) and age > 10:
if (name[0] == 'A' or name[0] == 'a') and age > 10:
    print("You can watch coco movie")
else:
    print("You cannot watch movie")
