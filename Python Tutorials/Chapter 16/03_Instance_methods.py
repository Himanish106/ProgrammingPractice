# Instance Methods
class Person:
    def __init__(self, first_name, last_name, age):
        # Instance Variables
        self.first = first_name
        self.last = last_name
        self.age = age
        print(self)

    def full_name(self):
        return f"{self.first} {self.last}"
    def is_above_18(self):
        return self.age>18


p1 = Person('Himanish', 'Das', 24)
# print(p1.full_name)
print(p1)
# print(Person.full_name(p1))

# p1 and self are same thing. Both contains the same address of the class. That is when we are calling the method with the help of class name then we are passing p1. That is we are passing the address of the class. But if we call the methods or objects with the help of the address then we don't need to pass any address as automatically the address get passed to self

print(p1.is_above_18())