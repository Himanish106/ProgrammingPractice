income = int(input("Enter your income: "))

if income <= 150000:
    tax = 0
elif income >= 150001 and income <= 300000:
    tax = 0.1 * (income - 150000)
elif income >= 300001 and income <= 500000:
    tax = 15000 + 0.2 * (income - 300000)
else:
    tax = 55000 + 0.3 * (income - 500000)

print("Tax to be paid: ", tax)
