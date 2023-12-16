class Rectangle:
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

    @property
    def getWidth(self):
        return self.width

    @property
    def getHeight(self):
        return self.height

    @getWidth.setter
    def setWidth(self, set_width):
        self.width = max(set_width, 0)

    @getHeight.setter
    def setHeight(self, set_height):
        self.height = max(set_height, 0)

    def area(self):
        return self.width*self.height

    def perimeter(self):
        return 2*(self.width*self.height)
    
rect=Rectangle()
rect.setWidth=10
rect.setHeight=20
print(f"Area of rectangle is {rect.area()}")
print(f"Perimeter of rectangle is {rect.perimeter()}")
