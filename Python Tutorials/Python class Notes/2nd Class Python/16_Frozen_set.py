# It is exactly same as set except that it is immutable. Hence we cannot use add or remove functions
s = {10, 20, 30, 40}
fs = frozenset(s)
print(type(fs)) #----> <class 'frozenset'>
print(fs) #----> frozenset({40, 10, 20, 30}). The order may vary
for i in fs:
    print(i)