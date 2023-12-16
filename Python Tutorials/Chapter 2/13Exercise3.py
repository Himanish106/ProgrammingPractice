# Take two comma seperated inputs from users
# 1.) user name
# 2.) single character

# Output
# 1.) user's name length
# 2.) count the character that user inputted (bonus: case insensitive)
name, character = input(
    "Enter the user name and the single character\n").split(",")
print(len(name))
print(f"character count: {name.count(character)}")  # case sensitive
# Suppose during runtime we print it like this:
# Enter the user name and the single character
# Himanish, h
# The output will be character count: 0 --->as the extra space and h is dealt as a single string and there is not a single case in the name string where h and space are together hence the output will come as 0.
print(f"character count: {name.lower().count(character.lower())}") # case insensitive

# Part 2--> Learn this after watching the 14th program
# So we were facing the problem with spaces. In this part we will solve the problem i.e.
# " Himanish " ----> "Himanish" ---->"himanish" (Previously we were converting those in lower cases so we will do it here also)
# " H " ----> "H" ----> "h" (Character)
print((len(name.strip()))) #----> This will trim all the spaces from both left and right side of the string and return the length
print(f"character count: {name.strip().lower().count(character.strip().lower())}")