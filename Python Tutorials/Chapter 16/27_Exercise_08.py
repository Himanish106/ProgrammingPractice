# Create three classes: Shape, Color, and Square. The Shape class should have a method called get_area() that returns the area of the shape. The Color class should have an attribute called color that represents the color of the shape. The Square class should inherit from both Shape and Color and have an additional attribute called side_length. Implement the necessary methods and attributes in each class to demonstrate the concept of multiple inheritance.

class Shape:
    def get_area(self):
        print("Area")


class Color:
    def __init__(self, colour):
        self.colour = colour

    def get_colour(self):
        print(self.colour)


class Square(Shape, Color):
    def __init__(self, colour, side_length):
        super().__init__(colour)
        self.side_length = side_length

    def get_length(self):
        print(self.side_length)


square = Square('Blue', 40)
square.get_area()
square.get_colour()
square.get_length()
