# Define a function that takes the list of strings
# List containing reverse of every strings
# USE LIST COMPREHENSION

# example
# l=['abc','tuv','xyz']
# reverse_string(l)------> ['cba','vut','zyx']


def reversed_string(l):
    return [i[::-1] for i in l]


print(reversed_string(['abc', 'tuv', 'xyz']))
