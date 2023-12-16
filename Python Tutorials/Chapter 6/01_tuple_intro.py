# Tuple Data Structure
# Tuple can store any Data Type
# The most important Thing about Tuple is that tuples are immutable, once tuple is created you can't update the data inside the tuple
example = ('one', 'two', 'three', 'four', 'one', 'two')
# no append, no insert, no pop, no remove
# So now question comes why we should use tuple over lists?----> The reason is tuples are much faster than lists. So when we do not require to update any data we can use tuples

# Methods which you can use in tuples
# count
print(example.count("one"))  # ----> 2
# index
print(example[2])  # ----> three
# len function
print(len(example))  # ----> 6
# slicing
print(example[::2])  # ----> ('one', 'three', 'one')
