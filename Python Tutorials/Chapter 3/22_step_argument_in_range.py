# "step" argument refers to the increment value used when creating a sequence of numbers in a range or slice.

for i in range(1, 11, 2): # ---> Here 2 is the step argument. Here we are jumping 1 number and printing the next. It is similar to i=i+2 like we used in loops of java and C.
    print(i)
print("\n...........................\n")
# Suppose if we have to print like this--> 10,9,8
for j in range(10, -1, -1):
    print(j)
