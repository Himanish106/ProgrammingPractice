# create your first generator using generator function
# 1) You can use generator function to create generators
# OR
# 2) Generator comprehension

# So if you have to define a function that prints the numbers from 1 to 10
# def func(n):
#     for i in range(1, n+1):
#         print(i)


# func(10)

# So now if we use generators

def func(n):
    for i in range(1, n+1):
        yield (i)  # ---> yield is actually a keyword. So you don't have to write i in parenthesis because it is not a function. We can write as 'yield i' instead of yield(i)


print(func(10))  # ---> <generator object func at 0x000002453EFAD0E0>

numbers=func(10)
for i in numbers:
    print(i)

for a in numbers:
    print(a) #----> So see here when you run this loop on the same generator you are not getting anything as an output as previously you have run this loop already once. Whenever we are running a loop the current element gets printed and the previous element gets deleted. And ultimately when all the element gets printed the memory becomes free. And there is no existence of the generator function