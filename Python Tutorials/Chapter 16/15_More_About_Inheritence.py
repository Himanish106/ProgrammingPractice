# Can we derive more than one class from base class -> Yes
# Multilevel Inheritence
# Method resolution Order
# Method Overriding
# isinstance(), issubclass()

class Phone:
    def __init__(self, brand, model_name, price):
        self.brand = brand
        self.model_name = model_name
        self._price = max(price, 0)

    def full_name(self):
        return f"{self.brand} {self.model_name}"

    def make_a_call(self, number):
        return f"Calling {number}......"


class Smartphone(Phone):
    def __init__(self, brand, model_name, price, ram, internal_memory, rear_camera):
        super().__init__(brand, model_name, price)
        self.ram = ram
        self.internal_memory = internal_memory
        self.rear_camera = rear_camera
    
    def full_name(self):
        return f"{super().full_name()} and price is {self._price}"

# Example of Multilevel Inheritence
class FlagshipPhone(Smartphone):
    def __init__(self, brand, model_name, price, ram, internal_memory, rear_camera, front_camera):
        super().__init__(brand, model_name, price, ram, internal_memory, rear_camera)


flagshipphone = FlagshipPhone(
    'Realme', 'C2', 6000, '2GB', '256GB', '20MP', '8MP')
print(flagshipphone.full_name())

# Method Resolution Order(MRO)---> order of how the classes are being called
# print(help(flagshipphone))
# Method resolution order:
#  |      FlagshipPhone
#  |      Smartphone
#  |      Phone
#  |      builtins.object 
# So this is the order in which Classes are executing. builtins.object
# builtins.object is the base class for all classes in Python. It's defined in the builtins module and serves as the root of the class hierarchy. All other classes in Python, whether built-in or user-defined, inherit from object.

# In Python, everything is an object, including numbers, strings, functions, modules, and classes. This means that they all inherit methods and attributes from the object class, such as __str__, __repr__, __hash__, __eq__, __class__, and many more.

# If you define a new class in Python and don't specify a parent class explicitly, it will automatically inherit from object. For example:


# class MyClass:
#     pass
# is equivalent to:


# class MyClass(object):
#     pass
# In both cases, MyClass inherits from object.

# So when we are executing flagshipphone.full_name() then it first refers the FlagshipPhone class but it does not get it here then it refers to Smartphone class here also it does not get the method and then finally it gets it in Phone class

#Refer to method overriding example.
smartphone=Smartphone('Oneplus','11gen',64000,'3GB','64GB','15MP')
print(smartphone.full_name()) #---> Oneplus 11gen and price is 64000 . This executes according to the method resolution orders.


# isinstance() function is used to check whether an object belongs to the mentioned class. Returns a boolean value. 
# Syntax:- isinstance(objectName,ClassName)
print(isinstance(smartphone,Smartphone))
print(isinstance(smartphone,Phone))
print(isinstance(smartphone,FlagshipPhone)) #False--> As Smartphone does not inherits FlagshipPhone

# issubclass() function is used to check whether a particular class is a subclass of another class or not
print(issubclass(Smartphone,Phone)) #---> True