# List comprehension with if statement

# Suppose you have to find even numbers between 1 to 10
# Normal method

nums = []
for i in range(1, 11):
    if i % 2 == 0:
        nums.append(i)
print(nums)

# Now doing it with List comprehension
even_nums = [i for i in range(1, 11) if i % 2 == 0]
print(even_nums)  # ----> [2, 4, 6, 8, 10]

# for odd
odd_nums = [i for i in range(1, 11) if i % 2 != 0]
print(odd_nums)
