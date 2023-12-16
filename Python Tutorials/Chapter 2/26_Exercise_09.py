# Write a program that takes a sentence as input from the user and prints the most frequent character(s) in the sentence. If multiple characters have the same highest frequency, print all of them. Ignore spaces and consider case-insensitive comparison. By "most frequent" I mean characters that appear more than once in the sentence.

# For example, if the input sentence is: "Hello World!", the program should output:

# Most Frequent Character(s): l o

sentence = input("Enter a sentence:")
dictionary = {}
for i in sentence:
    if i in dictionary:
        dictionary[i] += 1
    else:
        dictionary[i] = 1

print("Most frequent characters:", end="")
frequent_char = []
for key, value in dictionary.items():
    if value > 1:
        frequent_char.append(key)
print(",".join(frequent_char))
