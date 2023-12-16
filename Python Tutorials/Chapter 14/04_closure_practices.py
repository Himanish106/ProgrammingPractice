# Define a function in such a way that using that single function we can use square and cube

def to_the_power(x):
    def calc_power_of(n):
        return n**x
    return calc_power_of


cube = to_the_power(3)
print(cube(4))

square = to_the_power(2)
print(square(4))
