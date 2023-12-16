#  Write a Python program that takes a list of numbers as input and returns a dictionary with the numbers as keys and their counts in the list as values. You can use the count() method to find the number of occurrences of a given element in the list.

# For example, if the input list is [1, 2, 3, 2, 1, 4, 2], the program should return a dictionary like this:

# {1: 2, 2: 3, 3: 1, 4: 1}
# You can use the input() function to prompt the user to enter a list of numbers, and then split it using the split() method. Once you have a list of strings, you can convert it to a list of integers using a list comprehension or the map() function.

l1 = input("Enter a list of numbers:").split(",")
# l2=[int(i) for i in l1]
l2 = list(map(lambda list1: int(list1), l1))
dict_count = {i: l2.count(i) for i in l2}
print(dict_count)
