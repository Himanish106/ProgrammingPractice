s = {10, 20, 10.50, "Hello", "Hi", True}
print(s)
# The output can come in any order i.e. True maybe printed first then 10.5 maybe printed so in this way. The reason is in set order does not matter
# s[1]=45 -----> TypeError: 'set' object does not support item assignment
#----> Set is growable in nature,based on our requirement we can increase or decrease our size
s.add(85) 
print(s)
s.remove("Hello")
print(s)
# s.remove[5] ----> TypeError: 'builtin_function_or_method' object is not subscriptable
