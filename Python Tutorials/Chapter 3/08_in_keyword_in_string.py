name = "Himanish"
# "in" keyword can be used to check if a specific substring or character exists within a larger string.
if 'a' in name:
    print("a is present in the name")
else:
    print("a is not present in the name")

# Example 2:
string = "Hello World!"
substring = "World"
if substring in string:
    print(f"{substring} is present in {string}")
else:
    print(f"{substring} is not present in {string}")

# You can also use "not in" keyword to check if a substring or character does not exist in a string.

string1 = "Hello World!"
substring1 = "Universe"
if substring1 not in string1:
    print(f"{substring1} is not present in {string1}")
else:
    print(f"{substring1} is present in {string1}")
