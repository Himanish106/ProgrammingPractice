class Phone:
    def __init__(self, brand, model_name, price):
        self.brand = brand
        self.model_name = model_name
        self._price = max(price, 0)

    def full_name(self):
        return f"{self.brand} {self.model_name}"

    def make_a_call(self, number):
        return f"Calling {number}......"


class Smartphone(Phone):
    def __init__(self, brand, model_name, price, ram, internal_memory, rear_camera):
        super().__init__(brand, model_name, price)
        self.ram = ram
        self.internal_memory = internal_memory
        self.rear_camera = rear_camera


super_class = Phone('Nokia', '1100', 1300)
print(super_class.full_name())
print(super_class.make_a_call(9073889463))

child_class = Smartphone('Realme', 'C2', 6000, '2GB', '256GB', '20MP')
print(child_class.full_name())
print(child_class.make_a_call(7890024586))
