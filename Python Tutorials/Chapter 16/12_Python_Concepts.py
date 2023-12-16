# Here we will talk about:
# Encapsulation
# Abstraction
# Some special naming convention
# Name Mangling: __name (Remember it is not a convention)

class Phone:
    def __init__(self, brand, model_name, price):
        self.brand = brand
        self.model_name = model_name
        self.__price = price

    def make_a_call(self, phone_number):
        print(f"calling {phone_number}")

    def full_name(self):
        return f"{self.brand} {self.model_name}"

# So if we look here all the methods are wrapped up in a single class. So this is encapsulation


l = [3, 5, 1, 2, 7, 11]
l.sort()
print(l) #---> So the list gets sorted but we do not know what algorithm is being used here. Basically Python use tim sort. But we cannot see here how it is getting applied. So this is an example of Abstraction

# In Python there is nothing as such private,protected etc. Everything in python is public. _name is a way to denote a variable as private. Although it is a public method but it is a way to tell the developers that the variable is private and not to do anything in it.

# __name__ --> This is known as magic method or dunder methods. We will learn about this later

phone1=Phone('nokia','1100',1300)
# print(phone1.__price) #AttributeError: 'Phone' object has no attribute '__price'. So the error has occured due to Name Mangling.
print(phone1.__dict__) #---> {'brand': 'nokia', 'model_name': '1100', '_Phone__price': 1300}. So if we see this then we can see the name price has been changed to _Phone__price. This is known as Name Mangling.
print(phone1._Phone__price) #---> So here we get the result
