class Person:
    count_instance = 0  # ---> Class variable/attribute

    def __init__(self, first_name, last_name, age):
        Person.count_instance = Person.count_instance+1
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    @classmethod
    def from_string(cls,string):
        first,last,age=string.split(",")
        return cls(first,last,age) #---> So here we are creating the object of the class. __init__ method is actually an instance method which automatically gets invoked when the object of the class is created. But from_string being a class method we have to create the object like this.
    


    @classmethod #--> This decorator is used to create class methods
    def count_instances(cls): #--> cls refers to the name of the class i.e. Person
        return f"You have created {cls.count_instance} instances of {cls.__name__} class"

    def full_name(self): #---> Instance methods
        return f"{self.first_name} {self.last_name}"

    def is_above_18(self): #---> Instance methods
        return self.age > 18


p1 = Person('Himanish','Das',20)
p2 = Person('Harshit','Vashishth',17) #---> So whenever we write like this the init method gets invoked. If we look at the arguments we will see that the arguments are in the same way as the parameters are passed in __init__ method. Suppose we create a variable p3
# p3=Person('Himanish,Das,24') #---> So this tells us we will create a constructor that accepts a string---> NOTE: Do not write like this otherwise __init__ method gets called
p3=Person.from_string('Himanish,Das,24')
# print(p3) <__main__.Person object at 0x000001DD5712FB50>
print(p3.first_name)

# The print statement is printing "Himanish" because we have used the class method from_string() to create the object p3 by passing a string "Himanish,Das,24".

# Inside the from_string() method, we are splitting the string using comma as a delimiter and then creating a new object of the class Person using the values obtained from the split operation. In this case, the first_name of the new object is "Himanish", which is assigned to the attribute self.first_name of the object p3.

# Therefore, when we print p3.first_name, it returns the value "Himanish".

# The __init__() method gets invoked indirectly when we create an object of the class using the class method from_string().

# When we create an object using from_string() method, it returns a new instance of the class Person. The cls(first, last, age) statement inside the from_string() method creates a new instance of the class Person by invoking the __init__() method with the arguments first, last, and age.

# Therefore, even though we are not explicitly calling the __init__() method, it gets called indirectly when we create an object of the class using from_string() method.