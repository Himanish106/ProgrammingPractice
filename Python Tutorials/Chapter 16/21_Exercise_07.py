# Write a Python class hierarchy for representing different types of vehicles. Your class hierarchy should have the following classes:

# Vehicle (parent class):

# Attributes:
# make (string): representing the make of the vehicle.
# model (string): representing the model of the vehicle.
# year (integer): representing the manufacturing year of the vehicle.
# Methods:
# start_engine(): prints a message indicating that the engine has started.
# Car (child class of Vehicle):

# Additional attributes:
# num_wheels (integer): representing the number of wheels the car has.
# Additional methods:
# drive(): prints a message indicating that the car is being driven.
# Motorcycle (child class of Vehicle):

# Additional attributes:
# has_sidecar (boolean): indicating whether the motorcycle has a sidecar attached or not.
# Additional methods:
# wheelie(): prints a message indicating that the motorcycle is performing a wheelie.
# Your task is to implement the Vehicle, Car, and Motorcycle classes with the specified attributes and methods. Test your classes by creating instances of each class, setting their attributes, and calling the appropriate methods on them.

# Remember to utilize the concept of inheritance correctly, override methods when necessary, and provide appropriate messages in the methods

class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        print("Engine has started")


class Car(Vehicle):
    def __init__(self, make, model, year, num_wheels):
        super().__init__(make, model, year)
        self.num_wheels = num_wheels

    def drive(self):
        print("The car is being driven")


class Motorcycle(Vehicle):
    def __init__(self, make, model, year, has_side_car):
        super().__init__(make, model, year)
        self.has_side_car = has_side_car

    def wheelie(self):
        print("The side car is performing wheelie")


vehicle = Vehicle('Toyota', '8gen', 2016)
vehicle.start_engine()
car = Car(vehicle.make, vehicle.model, vehicle.year, 2)
car.drive()
motorcycle=Motorcycle(vehicle.make, vehicle.model, vehicle.year, True)
motorcycle.wheelie()