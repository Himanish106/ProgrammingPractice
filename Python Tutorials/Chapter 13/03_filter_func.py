# Find even numbers from a list and append to a new list

def is_even(a):
    return a % 2 == 0


numbers = [3, 4, 5, 6, 8, 10, 22, 55, 48]
lst = []
for num in numbers:
    if is_even(num):
        lst.append(num)
print(lst)

# Using List Comprehension
even = [i for i in numbers if is_even(i)]
print(even)

# Now we will be using filter function

# Filter() is a built-in function in Python. The filter function can be applied to an iterable such as a list or a dictionary and create a new iterator. This new iterator can filter out certain specific elements based on the condition that you provide very efficiently.

evens = filter(is_even, numbers)
print(evens)  # ---> <filter object at 0x00000165B39E78B0>
print(list(evens))

# We can also use lambda functions here like we did in map
even1 = filter(lambda a: a % 2 == 0, numbers)
# print(list(even1))

# Now note one thing:-
for i in even1:
    print(i) #----> So it is coming as it should come

# Now let us again run this loop
for j in even1:
    print(j)

# This time we are getting no input. This is because map or filter functions can be iterated only once. That is the reason we have commented out the print statement after even1.