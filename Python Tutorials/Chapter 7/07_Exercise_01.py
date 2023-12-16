# Define a function that takes a number n. Return a dictionary containing cube of numbers from 1 to n.

# cube_finder(3)
# {1: 1, 2: 8, 3: 27}


def cube_finder(n):
    dictionary = {}
    for i in range(1, n+1):
        dictionary[i] = i**3
    return dictionary


n = int(input("Enter the range:"))
print(cube_finder(n))
