# Form 1: complex(x)--> With this Function we can typecast any value x into a complex number with real part x and imaginary part 0

print(complex(10))
# So here integer value 10 has been typecasted to complex i.e. 10+0j
print(complex(10.5))  # ----> (10.5+0j)
print(complex(True))  # ----> 1+0j --> So what happens here is value True is converted to its real part i.e. typecasted to its decimal value 1 and 0j makes the whole expression complex as imaginary part gets added
print(complex(False)) # ---> 0j. We are getting 0j as our output as 0+0j is equivalent to 0j. 0 has no role to make the relation complex.But 0j is compulsory
print(complex("10"))  # ----> (10+0j)
# print(complex("ten")) -----> ValueError: complex() arg is a malformed string

# Form 2: complex(x,y)---> We can use this method to convert x and y into complex number such that x will be the real part and y will be the imaginary part.

print(complex(10, -2))  # -----> 10-2j
print(complex(True, False)) # -----> 1+0j
