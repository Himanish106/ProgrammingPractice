# Write a program that takes a sentence as input from the user and prints the count of each unique word in the sentence. Ignore case sensitivity while counting the words.

# For example, if the input sentence is: "The cat and the dog chased the cat", the program should output:

# Word Count:
# the: 3
# cat: 2
# and: 1
# dog: 1
# chased: 1


sentence = input("Please enter a sentence:").lower()
words = sentence.split(" ")
unique_word = []
for word in words:
    if word in unique_word:
        continue
    else:
        unique_word.append(word)
        print(f"{word}:{words.count(word)}")
