# String methods part 1

name1 = "Himanish Das"
name2 = "HImaNisH DAs"

# 1. len() function --> Use to calculate the length of the string
print(len("Himanish"))  # --> Calculation of length starts from 1.
print(len(name1))  # --> Space is also calculated

# 2. lower() function --> Use to convert the string into complete lowercase
print(name2.lower())

# 3. upper() function --> Use to convert the string into complete uppercase
print(name2.upper())

# 4. title() function --> It returns a string where the first character in every word is upper case while the rest are in lower case
print(name2.title())

# 5. count() function --> It returns the number of times a specified value appears in the string
print(name2.count("H"))
