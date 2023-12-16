# bytearray is exactly same as bytedata type except that its elements can be modified
x = [10, 20, 30, 40, 50]
b=bytearray(x)
print(type(b)) # class 'bytearray'
for i in b:
    print(i)
b[1]=250
for i in b:
    print(i) #---> So here 1st index is replaced by 250