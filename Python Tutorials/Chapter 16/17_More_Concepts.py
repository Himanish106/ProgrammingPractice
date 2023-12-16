# special magic methods/dunder methods
# operator overloading
# polymorphism

# Dunder methods (short for "double underscore methods") are special methods in Python that have double underscores (__) at the beginning and end of their names. They are also known as "magic methods" or "special methods".

# Dunder methods define how objects of a class behave with respect to certain operations in Python. For example, the __add__ method defines how two objects of a class can be added together using the + operator.

# Some common dunder methods and their corresponding operations are:

# __init__: initializes a newly created object of a class
# __str__: returns a string representation of an object
# __repr__: returns a string representation of an object that can be used to recreate the object
# __len__: returns the length of an object
# __add__: defines behavior for the + operator
# __sub__: defines behavior for the - operator
# __eq__: defines behavior for the == operator
# __lt__: defines behavior for the < operator
# __gt__: defines behavior for the > operator
# __iter__: returns an iterator for an object
# Dunder methods are called implicitly by Python in certain situations, depending on the operation being performed. For example, when you use the print function to print an object, Python calls the object's __str__ method to get a string representation of the object.

# Dunder methods are an important part of Python's object-oriented programming model, and understanding how they work is essential for creating custom classes that behave like built-in Python types.

class Phone:
    def __init__(self, brand, model_name, price):  # __init__ method is also a dunder method
        self.brand = brand
        self.model_name = model_name
        self._price = max(price, 0)

    def phone_name(self):
        return f"{self.brand} {self.model_name}"

    def __str__(self):  # For definition refer above
        return f"{self.brand} {self.model_name} and price is {self._price}"

    def __repr__(self):
        return f"Phone(\'{self.brand}\',\'{self.model_name}\',\'{self._price}\')"

    def __len__(self):
        return len(self.phone_name())

    def __add__(self, other):  # Refer for operator overloading concept
        return self._price+other._price


# l=[1,2,3,4]
# print(l) ---> We know list is a complete a class. Here by just giving l the list gets printed because in the list class somewhere dunder methods has been used

phone = Phone('Nokia', '1100', 1300)
# print(phone) ---> Before using dunder method it gives us the location of the object created.
print(phone)  # ---> If both __str__ and __repr__ are used then by default the __str__ method gets printed
# If we want to print them both
print(repr(phone))
print(str(phone))
# else
print(phone.__repr__())
print(phone.__str__())
print(len(phone))

phone2 = Phone('Nokia', '1600', 1200)
# print(phone+phone2) TypeError: unsupported operand type(s) for +: 'Phone' and 'Phone'. So here we are trying to add two objects and it is not cleared that which attributes of the objects we are trying to add
# So here comes the concept of Operator Overloading

# Operator overloading is the process of defining new behavior for Python's built-in operators on custom objects. By defining special methods (also known as "dunder methods" or "magic methods") for these operators, we can define how they work with instances of our own classes.
print(phone+phone2)  # -->2500

# Why it is called operator overloading?

# The term "overloading" refers to the ability to define different behaviors for the same operator depending on the type or number of operands involved.

# For example, the + operator can be used to add two integers or two floats together, and it can also be used to concatenate two strings. In each case, the behavior of the operator is different depending on the operands involved.

# Similarly, with operator overloading in Python, we can define different behaviors for the same operator on different types of objects. This allows us to "overload" the operator with new behaviors that are specific to our custom objects.

# In other words, by defining special methods that correspond to Python's built-in operators, we are able to overload those operators with new behaviors that are specific to our own classes. This is why it is called operator overloading.

# Method overriding and operator overolading are examples of polymorphism.

# Polymorphism is the ability of an object to take on many forms. In Python, polymorphism allows objects of different types to be used interchangeably, as long as they have a common interface (i.e., a set of methods or attributes that they share).

# Polymorphism is closely related to inheritance, which is one of the key concepts in object-oriented programming. When a subclass inherits from a superclass, it can override or extend the methods of the superclass, allowing it to behave differently in certain situations. This can lead to polymorphic behavior, where the same method call can produce different results depending on the object that is being called.

# For example, consider the following code:


# class Animal:
#     def make_sound(self):
#         pass

# class Dog(Animal):
#     def make_sound(self):
#         print("Woof!")

# class Cat(Animal):
#     def make_sound(self):
#         print("Meow!")

# def make_animal_sound(animal):
#     animal.make_sound()

# dog = Dog()
# cat = Cat()

# make_animal_sound(dog)  # Output: "Woof!"
# make_animal_sound(cat)  # Output: "Meow!"
# In this example, we have a superclass Animal with a method make_sound(), and two subclasses Dog and Cat that override the make_sound() method with their own implementations. We also have a function make_animal_sound() that takes an Animal object as an argument and calls its make_sound() method.

# When we call make_animal_sound() with a Dog object and a Cat object, the make_sound() method of the appropriate subclass is called, producing different output in each case. This is an example of polymorphism in action, where objects of different types (Dog and Cat) can be used interchangeably because they share a common interface (Animal with the make_sound() method).

# Operator overloading is also an example of polymorphism because it allows us to define a common interface for different objects, which can then be used interchangeably in expressions that involve operators.

# For example, we can overload the + operator to work with different types of objects, such as numbers, strings, and lists. When we use the + operator with objects of different types, the appropriate overloaded method is called, and the result is determined based on the behavior of the objects involved.

# Here is an example:

# class MyClass:
#     def __init__(self, value):
#         self.value = value

#     def __add__(self, other):
#         return MyClass(self.value + other.value)

#     def __str__(self):
#         return f"MyClass({self.value})"

# a = MyClass(5)
# b = MyClass(10)
# c = a + b
# print(c)  # Output: MyClass(15)
# In this example, we have defined a class MyClass with an overloaded __add__ method, which allows objects of this class to be added together using the + operator. When we add two MyClass objects together, the __add__ method is called, and a new MyClass object is returned with the value equal to the sum of the values of the two original objects.

# This shows how operator overloading can provide a common interface for different types of objects, allowing them to be used interchangeably in expressions that involve operators. This is an example of polymorphism, where objects of different types (MyClass objects) can be used interchangeably because they share a common interface (__add__ method).
