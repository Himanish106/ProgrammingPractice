# 1) 'and' ---> The and operator returns True if both the conditions on either side of it are True, and False otherwise. For example:

name = 'abc'
age = 19
if name == 'abc' and age == 19:
    print("True")
else:
    print("False")
# Answer: True

# Example 2:

name = 'abc'
age = 19
if name == 'abcd' and age == 19:
    print("True")
else:
    print("False")

# 2) 'or' ---> The or operator returns True if at least one of the conditions on either side of it is True, and False otherwise.
name = 'abc'
age = 19
if name == 'abcd' or age == 19:
    print("True")
else:
    print("False")
