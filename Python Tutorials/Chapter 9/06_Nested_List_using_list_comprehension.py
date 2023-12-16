# example = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

# If we create the list using normal method
new_list = []
for j in range(3):
    new_list.append([1, 2, 3])
print(new_list)

# Using List comprehension
nested_comp = [[i for i in range(1, 4)] for j in range(0, 3)]
print(nested_comp)
