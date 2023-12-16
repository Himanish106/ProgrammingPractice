# Write a Python class called ListManager that represents a list manager. The class should have the following methods:

# Methods:

# __init__(self): initializes an empty list.
# add_item(self, item): adds the given item to the list.
# remove_item(self, item): removes the given item from the list if it exists.
# get_list(self): returns the current list.
# Your task is to implement the ListManager class with the specified methods. Test your class by creating an instance of ListManager, adding and removing items from the list, and retrieving the list.

# Remember to handle any necessary input validation and consider edge cases, such as removing an item that doesn't exist or getting the list when it's empty.

class ListManager:
    def __init__(self, l1):
        self.l1 = l1

    def add_item(self, item):
        self.l1.append(item)

    def remove_item(self, item):
        if item in self.l1:
            self.l1.remove(item)
        else:
            print("Element does not exists")

    def get_list(self):
        return self.l1


list_manager = ListManager([])
n = int(input("Enter the number of elements you want to enter in the list:"))
for i in range(0, n):
    item = input(f"Enter item {i+1}:")
    list_manager.add_item(item)
print(list_manager.get_list())
remove_item = input("Enter an item to remove:")
list_manager.remove_item(remove_item)
print(list_manager.get_list())
