# Add 2 numbers
def add(a, b):
    return a+b


# print(add(2, 4)) ----> So this adds 2 numbers easily
# print(add('Hi','India')) HiIndia

# So to handle this case such that it takes only integer values we can write our code like this
def add1(a,b):
    if type(a) is int and type(b) is int:
        return a+b
    else:
        return 'Oops you have entered wrong value!'
    
# print(add1('Hi','Hello')) Oops you have entered wrong value! ---> So this is fine but it is always better to raise an error here because if we are dealing with databases whatever value we return in the else part will get updated to database that may lead to data inconsistency. So it is always better to raise an error. So we can implement the program like this

def add2(a,b):
    if type(a) is int and type(b) is int:
        return a+b
    else:
        raise TypeError('Oops you have entered wrong value!')

print(add2('Hi','Himanish'))
# raise TypeError('Oops you have entered wrong value!')
# TypeError: Oops you have entered wrong value!