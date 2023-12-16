# Debugging is the process of finding and fixing errors or bugs in the source code of any software

import pdb  # ---> This is the module used for python debugging

# set trace---> Function in the pdb module which is used to debug the code.
# We have to use some commands in the python terminal to debug

# l--> Shows the line in which the control is presently in
# n--> next line
# c--> Use to execute the code at once

pdb.set_trace()
name = input("Enter your name:")
age = int(input("Enter your age:"))
print(f"Hello {name} your age is {age}")
age2 = age+5
print(f"{name} you will be {age2} in the next 5 years")

# You can use the pdb.set_trace() at any point in your program based upon your requirements
