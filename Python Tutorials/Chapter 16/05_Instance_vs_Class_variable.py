class Laptop:
    def __init__(self, brand, price):
        # Instance variables
        self.s1 = brand
        self.s2 = price


p1 = Laptop('intel', 40000)
p2 = Laptop('dell', 50000)
print(p1.s1)
print(p1.s2)
print(p2.s1)
print(p2.s2)

# For every object p1 there is a different brand and a different price and same for object p2. So the brand and price here are instance variables

# Class Variables:- Class variable is such a variable whose value will be same for each and every objects. For example if we create 2 to 3 objects of a Circle class with different radius and want to calculate area and circumference of each then one thing would be constant that is the value of pi. So if we make pi as an instance variable we have to mention pi each and every time that will unnnecessarily consume the space in the memory for each and every object. So it will always be better to make pi as a class variable so that the same value can be accessed by different objects. Now let us understand with the help of an example.


class Circle:
    pi=3.14
    def __init__(self, radius):
        self.radius = radius

    def calc_circumference(self):
        return 2*Circle.pi*self.radius


c1 = Circle(4)
c2 = Circle(5)
print(c1.calc_circumference())
print(c2.calc_circumference())
