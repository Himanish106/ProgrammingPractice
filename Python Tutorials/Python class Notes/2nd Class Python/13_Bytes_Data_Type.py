# Byte datatype just represents a group of byte members just as an array
x = [10, 20, 30, 40]
print(type(x))
b = bytes(x)
print(type(b))
# b[0]=54 TypeError: 'bytes' object does not support item assignment
print(b[0])
print(b[-1])
for i in b:
    print(i)

# NOTE 1: The only allowed values for byte datatype is 0-256. By mistake if we are trying to provide any other values we will get a ValueError
# NOTE 2: Once we create byte data type value we cannot change its value otherwise we will get TypeError.