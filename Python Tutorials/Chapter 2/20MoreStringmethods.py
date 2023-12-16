# 1) capitalize()- In Python, you can use the .capitalize() method to capitalize the first character of a string.
name = 'hello, world!'
print(name.capitalize())  # --> Hello, world!

# Let us understand the difference between title method and capitalize method
print(name.title())  # --> Hello, World!

# It's important to note that the .capitalize() method only capitalizes the first character of the string and leaves the rest of the string unchanged. If you want to capitalize the first character of each word in a string, you can use the .title() method instead.

name1 = 'hELLO WORLD'
print(name1.capitalize()) # --> Hello world It capitalizes the first character of the string and converts the remaining characters to lowercase, resulting in "Hello, world!".
print(name1.title())  # --> Hello World

# 2) join()- The .join() method in Python is used to concatenate elements of an iterable (such as a list, tuple, or string) into a single string. It joins the elements using a specified separator.

fruits = ['apple', 'banana', 'orange']
result = ' '.join(fruits)
print(result) # --> apple banana orange

word = 'Hello'
print('-'.join(word)) # --> H-e-l-l-o

numbers = (1, 2, 3, 4, 5)
result = ' '.join(map(str, numbers))
print(result) # --> 1 2 3 4 5

# 3) isalnum()- The .isalnum() method in Python is a string method that checks whether all the characters in a string are alphanumeric. Alphanumeric characters include alphabetic characters (a-z, A-Z) and numeric characters (0-9).The .isalnum() method returns True if all characters in the string are alphanumeric, and False otherwise.

text = 'Hello123'
print(text.isalnum()) #--> True

text1 = 'Hello, World'
print(text1.isalnum()) #--> False --> In this example, the text string contains a space and a punctuation mark, which are non-alphanumeric characters. The .isalnum() method returns False because not all characters in the string are alphanumeric.

text2 = 'Hello'
print(text2.isalnum()) #--> True

text3 = 'Hello '
print(text3.isalnum()) #--> False --> Since space is not an alphanumeric character

# 4) isalpha()- The .isalpha() method in Python is a string method that checks whether all the characters in a string are alphabetic. Alphabetic characters include both lowercase and uppercase letters (a-z, A-Z). The .isalpha() method returns True if all characters in the string are alphabetic, and False otherwise.

string1 = 'Hello'
print(string1.isalpha()) #--> True

string2 = 'Hello123'
print(string2.isalpha()) #--> False --> In this example, the text string contains both alphabetic and numeric characters. The .isalpha() method returns False because not all characters in the string are alphabetic.

# 5) isdigit()- The .isdigit() method in Python is a string method that checks whether all the characters in a string are digits (0-9). It returns True if all characters are numeric digits, and False otherwise. The .isdigit() method returns True if all characters in the string are digits, and False otherwise.

string3="12345"
print(string3.isdigit()) #--> True

string4="12345Hello"
print(string4.isdigit()) #--> False

# 6) isnumeric()- The .isnumeric() method in Python is a string method that checks whether all the characters in a string are numeric. It returns True if all characters are numeric (including digits from various scripts), and False otherwise.

string5="12345"
print(string5.isnumeric()) #--> True

string6="12345abc"
print(string6.isnumeric()) #--> False

string7 = "๑๒๓๔๕"
print(string7.isnumeric()) #--> True --> In this example, the text string contains numeric characters from the Thai script. The .isnumeric() method returns True because all characters in the string are numeric.

# Difference between isdigit() and isnumeric()

# The main difference between the .isdigit() and .isnumeric() methods in Python lies in the type of characters they consider as numeric.

# The .isdigit() method checks whether all characters in a string are decimal digits (0-9) and returns True or False accordingly. It does not consider other types of numeric characters, such as numeric characters from different scripts or numeric fractions.

# On the other hand, the .isnumeric() method checks whether all characters in a string are numeric. It includes not only the decimal digits (0-9) but also other numeric characters from various scripts, numeric fractions, and other numeric representations.

# Here's a comparison between the two methods:

# Example 1:


text = "12345"
print(text.isdigit())     # True
print(text.isnumeric())   # True
# In this example, both methods return True because the text string consists only of decimal digits.

# Example 2:


text = "๑๒๓๔๕"
print(text.isdigit())     # True
print(text.isnumeric())   # True
# In this example, The characters in the text string belong to the Thai script, and they are considered numeric characters by both methods.

# Example 3:

text = "½"
print(text.isdigit())     # False
print(text.isnumeric())   # True
# In this example, the .isdigit() method returns False because the text string contains a fraction character (½), which is not a decimal digit. However, the .isnumeric() method returns True because it recognizes the fraction character as a numeric value.

# Overall, if you need to check specifically for decimal digits (0-9), you can use the .isdigit() method. If you want to check for a broader range of numeric characters, including numeric characters from different scripts and numeric representations, you can use the .isnumeric() method.

# max()- The max() function in Python is used to find the largest item in an iterable or the maximum of two or more given arguments. It returns the maximum value based on the comparison of the items.

text = "hello"
max_value = max(text)
print(max_value) #--> o

# 7) isspace()- The .isspace() method in Python is a string method that checks whether all the characters in a string are whitespace characters. Whitespace characters include spaces, tabs, and newline characters.The .isspace() method returns True if all characters in the string are whitespace characters, and False otherwise.

text = "   "
result = text.isspace()
print(result) # --> True

text = "Hello World"
result = text.isspace()
print(result) # --> False -->  In this example, the text string contains non-whitespace characters (letters and spaces). The .isspace() method returns False because not all characters in the string are whitespace.

text = "\t\n"
result = text.isspace()
print(result) #--> True