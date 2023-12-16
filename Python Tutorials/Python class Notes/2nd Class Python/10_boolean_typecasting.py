print(bool(0))  # ----> False
print(bool(1))  # ----> True
print(bool(10))  # -----> True
print(bool(10.35))  # ----> True
print(bool(10.72))  # ----> True
print(bool(0.178))  # ----> True
print(bool(0.0))  # -----> False
# We will get true or false for only 0,0.0. Else True for all conditions
print(bool(0+1.5j)) #----> True
print(bool(0+0j)) #-----> False
print(bool("True")) #----> True
print(bool("False")) #----> True
print(bool("")) #----> False
print(bool(" ")) #----> True
a=10
a=20
print(a)