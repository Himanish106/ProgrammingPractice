# i = 1
# while i <= 10:
#     print(f"Hello World {i}")
#     i = i+1

# So we are going to implement this same code using for loop
for i in range(10):
    print(f"Hello World {i}")
# Here this code will print Hello world 10 times. Default value of i is 0. range() function tells us the limit upto which we have to print our output. Keep in mind we are printing upto upper limit-1 i.e in this example we are printing from 0 to 9 and excluding 10

for i in range(1, 10):
    print(f"Hello World {i}")
# So now in this code we are also mentioning the lower limit of i i.e now we will print from 1 to 9
