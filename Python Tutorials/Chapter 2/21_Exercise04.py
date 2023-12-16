# Write a program that takes a sentence as input from the user and performs the following tasks:

# Count the total number of characters (including spaces) in the sentence.
# Count the total number of words in the sentence.
# Reverse the order of words in the sentence and print the result.

sentence = input("Enter the sentence:")
# Q1
print(len(sentence))
# Q2
word_count = len(sentence.split(" "))
print(word_count)

# Q3)
words = sentence.split(" ")
reversed_words = " ".join(reversed(words))
print(reversed_words)
