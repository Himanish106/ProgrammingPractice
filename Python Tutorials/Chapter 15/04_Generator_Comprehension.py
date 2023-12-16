square = (i**2 for i in range(1, 11))
print(square)
# So this is the way we create a generator comprehension. NOTE: This is not a tuple comprehension. There is no tuple comprehension in python.
for i in square:
    print(i)
