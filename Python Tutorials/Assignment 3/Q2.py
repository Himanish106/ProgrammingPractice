item1_name, item1_quantity, item1_price = input(
    "Enter the name of the first item,the quantity of the item and the price of the item:").split(",")
item2_name, item2_quantity, item2_price = input(
    "Enter the name of the second item,the quantity of the item, and the price of the item:").split(",")
item3_name, item3_quantity, item3_price = input(
    "Enter the name of the third item,the quantity of the item, and the price of the item:").split(",")
print("*****************BILL***************")
print("Item Name  Item Quantity  Item Price")
print(f"{item1_name} \t\t {item1_quantity} \t\t {item1_price}")
print(f"{item2_name} \t\t {item2_quantity} \t\t {item2_price}")
print(f"{item3_name} \t\t {item3_quantity} \t\t {item3_price}")
total_price = ((float(item1_price)*int(item1_quantity))+(float(item2_price)
               * int(item2_quantity))+(float(item3_price)*int(item3_quantity)))
print("**************************************")
print("Total Amount to be paid:", total_price)
print("**************************************")