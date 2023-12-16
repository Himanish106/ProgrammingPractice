# Slicing / Select Subsequences
lang = "Python"
# In String indexing we are getting only one character at a paticular index. We use string slicing to get a particular part of the string
# Syntax - [start argument : stop argument + 1]
# In case of stop argument it takes the position of the string before the stop argument. So we have to give the stop argument one position ahead of our required last character of the string

# Suppose we need to print only pyt in python

print(lang[0:3])
# --> So we are giving one index greater than the last required index
# p = 0
# y = 1
# t = 2
# h = 3
# o = 4
# n = 5
# You can also do negative indexing but it remains same as positive indexing
print(lang[:]) #---> This will print the full string
print(lang[2:]) #---> This will print the string from the second index to the end of the string
print(lang[:3]) #--> This will print the string from 1st index to stopindex-1 
