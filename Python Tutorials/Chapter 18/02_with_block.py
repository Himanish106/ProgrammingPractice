# f = open('file1.txt')
# print(f.read())
# f.close()

# You can do this using the with block

with open('file1.txt') as f:
    data = f.read()
    print(data)

# Advantage of using it is that we do not need to close the file as it automatically gets closed and to understand its advantage it is necessary to learn the concept of context manager

print(f.closed) #----> True --> As the file gets closed