class A:
    def class_a_method(self):
        return "I am just a class A method"

    def hello(self):
        return "Hello from class A"


class B:
    def class_b_method(self):
        return "I am just a class B method"

    def hello(self):
        return "Hello from class B"


class C(A, B):  # ---> Multilevel inheritence
    pass


instance_c = C()
# print(instance_c.class_a_method())
# print(instance_c.class_b_method())

# print(instance_c.hello()) #---> So here the question arises which method is going to be printed. So for that we can check the method resolution order
print(help(C))
# Method resolution order:
#  |      C
#  |      A
#  |      B
#  |      builtins.object

print(instance_c.hello()) #---> So according to method resolution order hello method of A class is being printed. If you have written class C(B,A) then the method resolution order would have been:
# Method resolution order:
#  |      C
#  |      B
#  |      A
#  |      builtins.object
# There are some other ways to check the MRO:
print(C.mro()) #----> [<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>]<--- Returns a list
print(C.__mro__) #---> (<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>)<---- Returns a tuple