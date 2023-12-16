a = 10
b = 10
print(a is b) # ----> True. Since and b are immutable both refers to the same memory location
# is is a keyword in Python that is used to test for object identity. It returns True if two objects refer to the same underlying object in memory, and False otherwise.
print(id(a))
print(id(b))
# So here we get the same memory locations
c = 10 + 5j
d = 10 + 5j
print(c is d)  # ----> True
print(id(c))
print(id(d))
e = True
f = True
print(e is f)  # ----> True
print(id(e))
print(id(f))