# Create a Laptop class with attributes brand_name,model_name,price
# Create two objects/instance of your laptop class

class Laptop:
    def __init__(self, brand_name, model_name, price):
        # Instance Variables
        self.s1 = brand_name #---> self refers to the address and s1 is the object 
        self.s2 = model_name
        self.s3 = price
        self.laptop_name=brand_name+' '+model_name


laptop1 = Laptop('HP', 'Pavillion', 85000)
laptop2 = Laptop('Dell', '1xcd811', 95000)
print(f"Brand Name:{laptop1.s1}")
print(f"Price of {laptop2.laptop_name} is {laptop2.s3}")