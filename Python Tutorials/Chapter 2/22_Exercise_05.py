# Write a program that asks the user to enter a string and checks if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward. The program should print "Palindrome" if the input string is a palindrome, and "Not a palindrome" otherwise.

word = input("Enter the word:")
if word[:] == word[::-1]:
    print("Palindrome")
else:
    print("Not a Palindrome")
