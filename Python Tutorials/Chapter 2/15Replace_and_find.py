string = "She is beautiful and is a good dancer"
# replace() method
print(string.replace(" ", "_")) # --> Thus replace method replaces space with "_"

# replace() method is a string method that can be used to replace a specified substring with another substring. The replace() method takes two arguments: the first is the substring you want to replace, and the second is the substring you want to replace it with.

print(string.replace("is", "was"))
print(string.replace("is", "was", 1)) # 1 means the first occurence of "is" is changed to was. If 2 had been given then both "is" has been converted to was

# Lets see some more examples of replace
# Example 1
string1 = "This is a string."
print(string1.replace("is", "was")) # Output: Thwas was a string. Every substring has has been converted to was

# Example 2
print(string1.replace("is","was").replace("a","A")) # Output: ThwAs wAs A string. First "is" was replaced with "was" then "a" has been replaced with "A"

# find() method

# The find() method is a string method that can be used to search for a specified substring within a string, and return the first index position where it is found. If the substring is not found, the method returns -1.

print(string.find("is")) #--> Output: 4. So it prints the first occurence of "is"

# But it may happen we do not want the first occurence of "is" and we want the next occurence of "is"

is_pos1=string.find("is")
print(string.find("is",is_pos1 + 1)) # --> Thus it prints the output 21.

# In this above code we have mentioned only the start position of the string. We can also mention both start and end of string
print(string.find("is",6,23)) # So same output 21

print(string1.find("is")) # Do not get confused it takes the first "is" of "This"ss as the output