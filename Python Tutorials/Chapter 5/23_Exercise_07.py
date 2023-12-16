# Write a Python program to find the second largest number in a list of integers.

# You can assume that the list contains at least two integers. Your program should take the list as input and output the second largest number.

numbers = [22, 10, 37, 15, 6, 11, 25]
numbers.sort()
print(numbers[-2])

# This method will be fine if and only if the list does not contain a duplicate highest value
# To handle the duplicacy we will perform this method
numbers2 = [22, 10, 37, 15, 6, 11, 37]
max_value = max(numbers2)

# So now we have to remove the duplicacy
while max_value in numbers2:
    numbers2.remove(max_value)

second_max_value = max(numbers2)
print(second_max_value)
