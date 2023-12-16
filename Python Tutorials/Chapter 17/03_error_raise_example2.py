# NotImplementedError

class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        # return "Meow Meow"
        raise NotImplementedError('you have to define this method in the subclasses')


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed


class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed


doggy = Dog('bony', 'pug')
# print(doggy.sound()) #---> Before raising the error we were defining sound method where we were getting sound of the dog class as 'Meow Meow'. But this is not possible. So we have to create a case where we have to create individual sound methods for each and every subclasses of Animal. So we can do it by raising an error known as NotImplementedError. So if we do not define the methods in the subclasses automatically the sound method of animal class will get called and we getting the error which we have raised purposefully.
print(doggy.sound())