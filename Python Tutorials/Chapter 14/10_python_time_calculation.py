import time
t1 = time.time()
print("This is line 1")
x = 5
if x == 5:
    print("x is equal to 5")
print("This is line 2")
t2 = time.time()
# print(t1)
# print(t2)
print(t2-t1) #----> Total time taken to complete the code
