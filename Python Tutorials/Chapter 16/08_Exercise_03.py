# class Person:
#     pass

# p1=Person()
# p2=Person()
# print(Person.count_instance)
# So here count_instance is actually a variable that you have to create. No of times you call the class value of count_instance should increase. NOTE: In the above example it is just a demo how you would be doing the program. There is no such inbuilt variable or function called count_instance

class Person:
    count_instance = 0

    def __init__(self):
        Person.count_instance = Person.count_instance+1


# Whenever the object of the class is created constructor is called
p1 = Person()
p2 = Person()
print(Person.count_instance)
