# Something more about tuples, list, str

# If we have to create a tuple within a certain range
nums = tuple(range(1, 11))
print(nums)  # ---> (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

# Convert a tuple into a list
num1 = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
num1_list = list(num1)
print(num1_list)  # --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Convert a tuple into a string
num2 = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
num2_list = str(num2)
print(num2_list)  # ----> (1, 2, 3, 4, 5, 6, 7, 8, 9, 10). You may think that tuple has not been type casted into str but it has actually been typecasted and it is like "(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)". We can also check its type using type function
print(type(num2_list))  # ----> <class 'str'>
