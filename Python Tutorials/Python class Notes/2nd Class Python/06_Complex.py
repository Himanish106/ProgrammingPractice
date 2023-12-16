# x = a+bj ----> Complex form
# a---> Real Part b---> imaginary Part j--->  √-1 j^2=-1
x = 10+20j
print(x)  # ----> (10+20j)
print(type(x))  # ----> <class 'complex'>

a = 10.5+2.3j
print(a)  # ---> (10.5+2.3j)
# b=10.5+2.7i ---> Syntax error as symbol for complex number in python is i
# c=10.5+j20 ----> Syntax error

# d=15+0B1111j ----> Invalid syntax as imaginary part we have to take only Decimal or float
b = 25.75+32.37j
c = 16+20j
print(b+c)  # ---> (41.75+52.37j)
print(b.real)  # ----> 25.75
print(b.imag)  # ----> 32.37

# Complex number cannot be typecasted to any other data type

# print(int(b)) ---> We will get this error- TypeError: int() argument must be a string, a bytes-like object or a real number, not 'complex' 