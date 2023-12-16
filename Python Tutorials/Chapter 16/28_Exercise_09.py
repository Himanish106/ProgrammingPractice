# Create a base class called Vehicle with a method called drive(). The drive() method should print a generic message indicating that the vehicle is being driven. Create two derived classes, Car and Motorcycle, that inherit from the Vehicle class. Override the drive() method in both derived classes to provide specific messages indicating how a car and a motorcycle are being driven, respectively. Additionally, in the Motorcycle class, override the drive() method again to include an additional feature of popping a wheelie. Write a program to demonstrate the concept of method overriding by creating instances of the Car and Motorcycle classes and calling their drive() methods.

class Vehicle:
    def drive(self):
        print("Vehicle is being driven")
    
class Car(Vehicle):
    def drive(self):
        print("Car is being driven")

vehicle=Vehicle()
car=Car()
car.drive()
vehicle.drive()