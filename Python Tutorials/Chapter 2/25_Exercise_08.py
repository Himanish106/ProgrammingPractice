# Write a program that takes two strings as input from the user and checks if they are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

# The program should print "Anagrams" if the two input strings are anagrams of each other, and "Not Anagrams" otherwise. Ignore spaces and consider case-insensitive comparison.

string1 = input("Enter the first string:").casefold()
string2 = input("Enter the second string:").casefold()
if sorted(string1) == sorted(string2):
    print("Anagrams")
else:
    print("Not Anagrams")
