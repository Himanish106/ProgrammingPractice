# Creating a class where 10% discount is applied on each and every laptops
class Laptop:
    discount_percentage = 10

    def __init__(self, brand_name, model_name, price):
        # Instance Variables
        self.brand_name = brand_name  # ---> self refers to the address and brand_name is the object
        self.model_name = model_name
        self.price = price
        self.laptop_name = brand_name+' '+model_name

    def apply_discount(self):
        off_price = (Laptop.discount_percentage*self.price)/100
        return self.price-off_price

# Laptop.discount_percentage=20 ---> In this way we can overwrite the value in class variable
laptop1 = Laptop('HP', 'Pavillion', 63000)
laptop2 = Laptop('Dell', '1xcd811', 230000)
print(laptop2.__dict__) #---> Used to give details of the laptop2 object. It returns a dictionary. Basically shows all the details of the instance variable of a class
print(laptop2.apply_discount())
