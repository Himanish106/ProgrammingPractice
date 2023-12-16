class Overload:
    def __init__(self, name, price):
        self.name = name
        self.__price = price

    def get_name(self):
        return self.name

    def __add__(self, other):
        return self.__price+other.__price

    def __mul__(self, other):
        return self.__price*other.__price

    def __len__(self):
        return len(self.name)


l1 = Overload('Himanish', 24)
l2 = Overload('Ashish', 30)
print(l1+l2)
print(l1*l2)
print(len(l1))
