# list - A list is an ordered data structure with elements separated by a comma and enclosed within square brackets. It can contain mulltiple elements of different data types.

# Lists in Python are ordered data structures because they maintain the order of elements as they are added or removed. This is achieved through the use of an indexing system that assigns a unique position to each element in the list, allowing for easy access and manipulation of individual elements. Additionally, Python lists are implemented using dynamic arrays, which automatically resize as elements are added or removed, while maintaining the order of elements. This allows for efficient insertions, deletions, and lookups at any position within the list, making them a powerful tool for a wide range of applications. Lists are also versatile, as they can store multiple data types, including other lists, making them a useful data structure for storing and manipulating complex data sets. Additionally, Python provides a variety of built-in functions and methods that allow for easy manipulation of lists, such as append, insert, remove, and slice, making them a user-friendly and convenient data structure.

numbers = [1, 2, 3, 4]
print(numbers)

words = ["Hello", "Himanish", "How", "are", "you"]  # ----> Output- ['Hello', 'Himanish', 'How', 'are', 'you']
print(words)

mixed = [1, 1.5, "Hello", True, None]
print(mixed)

# You can even extract a single value from the list using indexing
print(numbers[2])

# You can also do slicing as you used in strings
print(words[:2]) # Output:- ['Hello', 'Himanish']

# Printing the last element of the list
print(mixed[-1])

# You can change any element of the string like this
numbers[2]="Hello"
print(numbers) #---> [1, 2, 'Hello', 4]

words[1:]='two' # ----> The output is like this: ['Hello', 't', 'w', 'o']. This happens as 1: means from start to the end of the string. So here the string('two') breaks and we get an output like this

print(words)

# If we add a list in a certain position then it will look like this
mixed[1:]=['three','four']
print(mixed) #--> The remaining part of the list is been replaced by [1, 'three', 'four'] as 1: means start to the end of the string.