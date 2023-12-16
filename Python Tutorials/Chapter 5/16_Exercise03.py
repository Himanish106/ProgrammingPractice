# Define a function that takes a list of words as an argument and return the list with reverse of every element in that list

# Example:-
# ['abc', 'tuv', 'xyz'] ------> ['cba', 'vut', 'zyx']

def reverse_element(words):
    newlist = []
    for i in range(len(words)):
        words[i] = words[i][::-1]
        newlist.append(words[i])
    return newlist


words = ['abc', 'tuv', 'xyz']
print(reverse_element(words))

# Or you can also do like this:-

def reverse_element2(words1):
    newlist1 = []
    for i in words1:

        newlist1.append(i[::-1])
    return newlist1


words1 = ['abc', 'tuv', 'xyz']
print(reverse_element2(words1))
