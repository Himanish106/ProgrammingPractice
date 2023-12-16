# Write a program that takes a string as input from the user and checks if it is a pangram. A pangram is a sentence that contains every letter of the alphabet at least once. The program should print "Pangram" if the input string is a pangram, and "Not a pangram" otherwise.

import string
sentence = (input("Enter the sentence from the user:")).lower()
l1 = list(string.ascii_lowercase)
l2 = []
for i in sentence:
    if i in l1:
        if i in l2:
            continue
        else:
            l2.append(i)


if l1 == l2:
    print("Pangram")
else:
    print("Not Pangram")
