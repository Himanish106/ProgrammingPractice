# Creating a class where 10% discount is applied on each and every laptops but on laptop2 special discount of 50 percent is applied
class Laptop:
    discount_percentage = 10

    def __init__(self, brand_name, model_name, price):
        # Instance Variables
        # ---> self refers to the address and brand_name is the object
        self.brand_name = brand_name
        self.model_name = model_name
        self.price = price
        self.laptop_name = brand_name+' '+model_name

    def apply_discount(self):
        # off_price = (Laptop.discount_percentage*self.price)/100
        off_price = (self.discount_percentage*self.price)/100
        return self.price-off_price


laptop1 = Laptop('HP', 'Pavillion', 63000)
laptop2 = Laptop('Dell', '1xcd811', 230000)
# You may think that if we write like this we will be able to apply special discount
# laptop2.discount_percentage=50---> If we are doing it only a seperate instance variable is being created(You can check in laptop2.__dict__). But the price is coming of 10% discount which is quite obvious as in apply discount method we have done Class.Class_variable(Laptop.discount_percentage). The solution is simple. YES we have to write laptop2.discount_percentage=50 but since instance variable is being created as we have seen in laptop2.__dict__ in apply_discount method we have to change it to self.
laptop2.discount_percentage = 50
# So how this is working:- Python first checks if discount_percentage is present as an object. If not then class variable will be used
print(laptop2.__dict__)
print(laptop2.apply_discount())
