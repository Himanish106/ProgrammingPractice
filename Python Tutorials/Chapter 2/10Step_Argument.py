# We learnt string slicing in the last program. Step Argument is used to jump the characters.
print("Himanish"[1:6])
# H = 0
# i = 1
# m = 2
# a = 3
# n = 4
# i = 5
# s = 6
# h = 7
# Now we will learn about step argument
# Syntax:- [start argument : stop argument + 1 : step argument]
print("Himanish"[1:8:2]) # --> :2 here is the step argument. It jumps one character and prints the next
print("Himanish"[1:6:3]) # --> :3 here is the step argument. It jumps two character and prints the next
print("Himanish"[:8:3]) # --> No start argument means String will start from the first
print("Himanish"[::3]) # --> No start argument and stop argument means String will start from the first and will go till the last
print("Himanish"[::-1]) # Trick to reverse a string

