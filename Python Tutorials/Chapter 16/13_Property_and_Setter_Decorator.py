class Phone:
    def __init__(self, brand, model_name, price):
        self.brand = brand
        self.model_name = model_name
        self._price = max(price,0) #---> If even by chance we set the price as negative we get 0. So it will not allow to pass negative value
        # self.complete_specification = f"{self.brand} {self.model_name} and price is {self.price}" ---> Problem 2 solution can be instead of creating a seperate variable create a seperate function
    
    # def complete_specification(self):
    #     return f"{self.brand} {self.model_name} and price is {self.price}"

    @property #---> This decorator is used to deal a function as a property or more appropriately as an attribute
    def complete_specification(self):
        return f"{self.brand} {self.model_name} and price is {self._price}"

    def make_a_call(self, phone_number):
        print(f"calling {phone_number}")

    def full_name(self):
        return f"{self.brand} {self.model_name}"
    
    @property #---> This behaves as my getter (Problem 3 solution)
    def price(self):
        return self._price
    
    @price.setter
    def price(self,new_price):
        self._price=max(new_price,0) #--> Here -500 is passed but 0 is set


# phone1 = Phone('Nokia', '1100', -1000)---> Problem 1-> You can set the price to negative but it is practically not possible
phone1=Phone('Nokia','1100',1000)
print(phone1.brand)
print(phone1.model_name)
# phone1.price=500 <-- Use this variable upto problem 2
phone1.price=-500 #---> No problem is being created. But it is practically not possible.(Problem 3)
print(phone1.price)
# print(phone1.complete_specification) #---> Problem 2- As here the price remains 1000 as when we create the object of the class the constructor gets invoked. So the value 1000 is passed
# print(phone1.complete_specification())
print(phone1.complete_specification)