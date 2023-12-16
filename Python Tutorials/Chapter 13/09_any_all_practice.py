# Let us first define a function

def my_sum(*args):
    total = 0
    for num in args:
        total = total+num
    return total


print(my_sum(1, 2, 3, 4, 5, 7.8, 8.25))

# This is fine. But if we pass a string or list in this we will be getting an error
# print(my_sum(1,2,3,[1,2,3],'Himanish')) ----> So we will be getting an error. But we can handle the error using all function


def my_sum1(*args):
    total = 0
    if all([(type(arg) == int or type(arg) == float) for arg in args]):
        for num in args:
            total = total+num
        return total
    else:
        return "Wrong Input"


print(my_sum1(1, 2, 3, [1, 2, 3], 'Himanish'))  # ----> Wrong Input
print(my_sum(1, 2, 3, 4, 5, 7.8, 8.25))  # -----> 31.05
