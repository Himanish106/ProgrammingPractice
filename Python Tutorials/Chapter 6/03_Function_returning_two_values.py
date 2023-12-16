def func(int1, int2):
    add = int1+int2
    multiply = int1*int2
    return add, multiply


print(func(2, 3))  # -----> (5, 6). A tuple is returned whenever we return two values. But you can print those elements seperately by using the concept of ungrouping
add, multiply = func(2, 3)
print(add) #---> 5
print(multiply) #---> 6