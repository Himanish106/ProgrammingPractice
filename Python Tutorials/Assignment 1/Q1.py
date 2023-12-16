quantity = int(input("Enter the quantity of item sold:"))
value = int(input("Enter the value of item:"))
discountPercentage = int(input("Enter the discount percentage:"))
tax = int(input("Enter the TAX:"))
print("\n\n")
print("***************BILL*********************")
print("Quantity Sold: ", quantity)
print("Price per item:", value)
amount = quantity*value
print("\t...............")
print("Amount: \t", amount)
discount = quantity*discountPercentage
print("Discount: \t-", discount)
discountedTotal = amount-discount
print("\t..............")
print("Discounted Total: ", discountedTotal)
taxAmount = (discountedTotal*tax)/100
print("Tax:\t\t +", taxAmount)
totalAmount = discountedTotal+taxAmount
print("\t..................")
print("Total amount to be paid", totalAmount)
