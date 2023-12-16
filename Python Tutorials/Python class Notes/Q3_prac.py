tuple1 = tuple(input("Enter the elements:").split(","))
if all(items == tuple1[0] for items in tuple1):
    print("All items are same.")
else:
    print("All items are not same.")
