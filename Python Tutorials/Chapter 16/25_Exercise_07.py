# Write a Python class called Shape that represents a geometric shape. The Shape class should have the following methods:

# Methods:

# calculate_area(): This method should raise a NotImplementedError with a message stating that the method needs to be implemented in the child classes.
# Next, create two child classes called Rectangle and Circle that inherit from the Shape class. Override the calculate_area() method in both child classes to calculate and return the area of a rectangle and a circle, respectively.

# The formula to calculate the area of a rectangle is length * width, and the formula to calculate the area of a circle is pi * radius^2. You can assume the value of pi to be 3.14 for simplicity.

# Test your classes by creating instances of Rectangle and Circle and calling the calculate_area() method on each of them to calculate and display the areas of the respective shapes.

# Remember, method overriding allows child classes to provide a different implementation for a method inherited from the parent class.

import math

class Shape:
    def calculate_area(self):
        raise NotImplementedError("calculate_area() method needs to be implemented in the child classes")


class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def calculate_area(self):
        return self.length * self.width


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return math.pi * (self.radius ** 2)


# Testing the classes
rectangle = Rectangle(5, 7)
rectangle_area = rectangle.calculate_area()
print(f"The area of the rectangle is: {rectangle_area}")

circle = Circle(3)
circle_area = circle.calculate_area()
print(f"The area of the circle is: {circle_area}")
