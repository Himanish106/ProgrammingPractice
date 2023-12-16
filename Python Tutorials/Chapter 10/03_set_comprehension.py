s = {k**2 for k in range(1, 11)}
print(s)  # ----> set has no order

# Print first character of each name
names = ['Rajesh', 'Harshit', 'Abhishek']
s_name = {name[0] for name in names}
print(s_name)
