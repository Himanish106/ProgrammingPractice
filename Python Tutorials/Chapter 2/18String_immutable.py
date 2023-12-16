# In Python, strings are immutable, which means that they cannot be modified once they are created.
# Example
string="hello"
# string[1]='a' This will raise a TypeError, because strings are immutable and we cannot change the character at index 2
# string=string.replace("h","a") --> This is going to change the output which is stored in the same named variable string. But we are just overriding the previous string variable and there is ultimately no change in the string
print(string) 
