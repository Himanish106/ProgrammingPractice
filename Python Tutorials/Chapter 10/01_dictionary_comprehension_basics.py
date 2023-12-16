# square = {1: 1, 2: 4, 3: 9}
square = {num: num**2 for num in range(1, 11)}
print(square)

# Now if we want to print the output like this:
# square of 1 is: 1,square of 2 is 4 and so on then..
square = {f"Square of {num} is": num**2 for num in range(1, 11)}
print(square)

# To print the output in different lines:
for key, value in square.items():
    print(f"{key} : {value}")

# Word Count
string = "Himanish"
count = {char: string.count(char) for char in string}
print(count)
