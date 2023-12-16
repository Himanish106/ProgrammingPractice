class Laptop:
    def __init__(self, brand_name, model_name, price):
        self.brand = brand_name
        self.model = model_name
        self.price = price

# So now define a function that calculates the discount
    def discount(self, discount_percent):
        return self.price-(self.price*(discount_percent/100))


p1 = Laptop('HP', 'Pavillion', 85000)
print(f"After Discount price is {p1.discount(4)}")
