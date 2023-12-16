# Create a class Circle to find area and perimeter of the circle. Take the radius as user input. Also use getters and setters.

import math


class Circle:
    def __init__(self, radius=0):
        self.radius = radius

    @property
    def getRadius(self):
        return self.radius

    @getRadius.setter
    def setRadius(self, new_radius):
        # self.radius = abs(new_radius)
        self.radius = max(new_radius, 0)

    def getArea(self):
        return math.pi*pow(self.radius, 2)

    def getPerimeter(self):
        return 2*math.pi*self.radius


circle = Circle()
circle.setRadius = 10
print(circle.getArea())
print(circle.getPerimeter())
print(circle.getRadius)