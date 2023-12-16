# print a dictionary like this {1:odd, 2:even, 3:odd, 4:even}
odd_even = {i: ("even" if i % 2 == 0 else "odd") for i in range(1, 11)}
print(odd_even)
