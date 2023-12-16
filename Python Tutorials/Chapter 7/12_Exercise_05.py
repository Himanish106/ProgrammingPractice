# Write a Python program that asks the user to enter a sentence, then creates a dictionary where each key is a unique word from the sentence, and the value is the number of times that word appears in the sentence. Finally, print out the dictionary in alphabetical order by key.

# For example, if the user enters the following sentence:

# "The quick brown fox jumps over the lazy dog."
# the program should output the following dictionary:

# {'The': 1, 'brown': 1, 'dog.': 1, 'fox': 1, 'jumps': 1, 'lazy': 1, 'over': 1, 'quick': 1, 'the': 1}

sentence = "The quick brown fox jumps over the lazy dog."
word = sentence.split()
dictionary = {}
for i in word:
    if i not in dictionary:
        dictionary[i] = 1
    else:
        dictionary[i] += 1

print(dict(sorted(dictionary.items())))