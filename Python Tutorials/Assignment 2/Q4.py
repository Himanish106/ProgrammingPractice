purchase_amount = float(input("Enter the purchase amount:"))
item_type = input("Enter the type of the item (Mill Cloth or Handloom):")
if purchase_amount > 0 and purchase_amount <= 100:
    mill_cloth_discount = 0.0
    handloom_discount = 0.05
elif purchase_amount <= 200:
    mill_cloth_discount = 0.05
    handloom_discount = 0.075
elif purchase_amount <= 300:
    mill_cloth_discount = 0.075
    handloom_discount = 0.10
else:
    mill_cloth_discount = 0.1
    handloom_discount = 0.15

if item_type.lower() == 'mill cloth':
    discount = mill_cloth_discount
elif item_type.lower() == 'handloom':
    discount = handloom_discount
else:
    print("Invalid item type")

net_amount = purchase_amount-(purchase_amount*discount)
print("Net amount to be paid is:₹%.2f" % net_amount)
