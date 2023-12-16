class Person:
    count_instance = 0  # ---> Class variable/attribute

    def __init__(self, first_name, last_name, age):
        Person.count_instance = Person.count_instance+1
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    @classmethod
    def from_string(cls, string):
        first, last, age = string.split(",")
        return cls(first, last, age)

    @classmethod
    def count_instances(cls):  # --> cls refers to the name of the class i.e. Person
        return f"You have created {cls.count_instance} instances of {cls.__name__} class"

    def full_name(self):  # ---> Instance methods
        return f"{self.first_name} {self.last_name}"

    def is_above_18(self):  # ---> Instance methods
        return self.age > 18

    @staticmethod
    def hello():
        print("Hello World")


p1 = Person('Himanish', 'Das', 20)
p2 = Person('Harshit', 'Vashishth', 17)
p3 = Person.from_string('Himanish,Das,24')
p3.hello()

# In Python, a static method is a method that belongs to a class rather than an instance of the class. Unlike instance methods, static methods do not have access to the instance state or class state. They are defined using the @staticmethod decorator and do not take the self parameter.

# Static methods can be used when you need to define a method that does not depend on the state of the instance or class. For example, if you want to define a utility function that performs some operation and returns a result, you can define it as a static method of a class. This way, you can group related functions together in a single class and use them as needed.

# class MyClass:
#     @staticmethod
#     def my_static_method(arg1, arg2):
#         # Perform some operation
#         result = arg1 + arg2
#         return result
# In this example, my_static_method is a static method of the MyClass class. It takes two arguments, arg1 and arg2, performs some operation on them, and returns the result. Note that the method does not have access to the instance state or class state.

# A static method is also an object of the class. When you define a static method in a class, Python creates a staticmethod object that wraps the original method. You can access the static method object using the class or the instance of the class.
