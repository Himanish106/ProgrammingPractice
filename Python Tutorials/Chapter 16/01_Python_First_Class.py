# OBJECTIVES
# What is a class
# How to create a class
# What is init method---> Same as Constructor
# What are attributes,instance variables
# How to create our object

# CLASS- Class is actually a blueprint. That means with the help of the class we can decide what will be the objects to be created and what kind of functionality it can perform and what will be the attributes of our object. Blueprint actually means a design or a plan

class Person:
    def __init__(self, first_name, last_name, age):  # ---> Self is same as the this keyword in java. It refers to to the current object location. In place of self you can write anything you want but according to conventions self is preferred
        print("init method or constructor gets called")
        # Instance Variables
        self.first_name = first_name #---> self.any_name_you_want=first_name....But better to keep the same on both sides
        self.last_name = last_name
        self.age = age


p1 = Person('Himanish', 'Das', 20)
print(p1)  # ---> <__main__.Person object at 0x0000025CCBD4EBD0> So here we can understand that p1 is an object that contains the address of Person class
print(p1.first_name, " ", p1.last_name, " ", p1.age)
