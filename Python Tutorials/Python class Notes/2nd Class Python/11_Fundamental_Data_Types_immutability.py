x = 5   # Assign an integer value to x
print(x)  # Output: 5

x = x + 1   # Add 1 to x and re-assign it to x
print(x)   # Output: 6

# In this example, we create a variable x and assign it the integer value of 5. Then, we update the value of x by adding 1 to it and re-assigning it to x. However, notice that we did not actually modify the original integer value of 5; instead, we created a new integer object with the value of 6 and re-assigned x to point to that new object. This demonstrates that integers in Python are immutable: once an integer object is created, its value cannot be changed; any updates to the value of the variable holding the integer simply create a new object. The same is true for other fundamental data types in Python, such as floats, strings, and tuples.
