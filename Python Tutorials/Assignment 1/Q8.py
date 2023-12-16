Cost_price = int(input("Enter the cost price of the item:"))
Sell_price = int(input("Enter the sale price of the item:"))
resultant = Sell_price-Cost_price
if resultant == 0:
    print("No Profit or no loss incurred. Result=", resultant)
elif resultant > 0:
    print("Profit is=", resultant)
else:
    print("Loss is=", abs(resultant))
