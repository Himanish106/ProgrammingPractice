name = "Himanish"
for i in range(len(name)):
    print(name[i])
# This syntax works for every programming language. But we can do it in another way that works only in python.
print("\n........................................\n")

# We should keep in mind that strings in python are iterable

for j in name:
    print(j)

# So now as we know this logic we can modify program number 17

num = input("Enter a number\n")
total = 0
for i in num:
    total += int(i)
print(total)

# NOTE:- Please keep in mind that this syntax don't work with integer as int object is not iterable