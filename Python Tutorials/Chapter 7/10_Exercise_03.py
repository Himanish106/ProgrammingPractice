# Write a Python program that asks the user to enter a list of words separated by commas, then creates a dictionary where each key is a unique word from the list, and the value is the number of times that word appears in the list. Finally, print out the dictionary in alphabetical order by key.

# For example, if the user enters the following list of words:

# apple, banana, cherry, apple, cherry, cherry
# the program should output the following dictionary:

# python
# {'apple': 2, 'banana': 1, 'cherry': 3}

user_input = input("Enter a list of words separated by commas: ")
words_list = user_input.split(",")
words_dict = {}

for word in words_list:
    if word.strip() in words_dict:
        words_dict[word.strip()] += 1
    else:
        words_dict[word.strip()] = 1

print(dict(sorted(words_dict.items())))

