# To be frank we use class methods very less but we need to know it properly

class Person:
    count_instance = 0  # ---> Class variable/attribute

    def __init__(self, first_name, last_name, age):
        Person.count_instance = Person.count_instance+1
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    @classmethod #--> This decorator is used to create class methods
    def count_instances(cls): #--> cls refers to the name of the class i.e. Person
        return f"You have created {cls.count_instance} instances of {cls.__name__} class"

    def full_name(self): #---> Instance methods
        return f"{self.first_name} {self.last_name}"

    def is_above_18(self): #---> Instance methods
        return self.age > 18


p1 = Person('Himanish','Das',20)
p2 = Person('Harshit','Vashishth',17)
print(Person.count_instances())
# In place of Person you can use object name it will also work as Python checks for instance methods first. Here it does not get any instance method but automatically gets the class methods. But preferred is you mention the class name.