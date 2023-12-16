name = "Himanish "
age = 20
print("Hello "+name+"your age is "+str(age))  # Complicated syntax
# We are going to use easier methods using string formatting
# This method was first introduced in python 3. {}--> This is known as placeholder. Also typecasting was not required
print("Hello {}your age is {} ".format(name, age))
# This method was first introduced in python 3.6 and it is the latest
print(f"Hello {name}your age is {age}")
