# Write a program that takes a sentence as input from the user and counts the frequency of each word in the sentence. The program should then print a dictionary where the keys are the words in the sentence and the values are their corresponding frequencies.
# For example, if the input sentence is: "I love to code. Coding is fun!", the program should output:

# {
#   'I': 1,
#   'love': 1,
#   'to': 1,
#   'code.': 1,
#   'Coding': 1,
#   'is': 1,
#   'fun!': 1
# }

sentence = input("Enter a sentence:").split(" ")
dictionary = {}
count = 0
for i in sentence:
    if i in dictionary.keys():
        dictionary[i] = dictionary[i]+1
    else:
        dictionary[i] = 1

print(dictionary)
