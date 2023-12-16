# Let us first implement a function where we will square the numbers in a list and put in a square

def square(l):
    return [i*i for i in l]


numbers = [1, 2, 3, 4, 5]
print(square(numbers))

# Now if we implement the same program using map function
# Map in Python is a function that works as an iterator to return a result after applying a function to every item of an iterable (tuple, lists, etc.).

def square2(a):
    return a*a


numbers2 = [1, 2, 3, 4, 5]
squares = map(square2, numbers2)
print(squares) # ----> <map object at 0x000001E37F257640>---> Now we can convert this to any type using type casting
print(list(squares))

# Now the question comes why we will be using map functions. Though we can use list comprehension that is also shortening the code. This is because if we use lamda expressions the code gets even more shorter

squares3 = list(map(lambda a: a*a, numbers))
print(squares3)

names = ['ab', 'abc', 'abcd', 'abcde', 'abcdef']
name_len = list(map(lambda name: len(name), names))
print(name_len)
