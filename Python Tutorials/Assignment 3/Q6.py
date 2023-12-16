consumption_units = int(input("Enter the consumption units: "))
if consumption_units <= 150:
    bill = consumption_units * 3
elif consumption_units <= 350:
    bill = 100 + (consumption_units - 150) * 3.75
elif consumption_units <= 450:
    bill = 250 + (consumption_units - 350) * 4
elif consumption_units <= 600:
    bill = 300 + (consumption_units - 450) * 4.25
else:
    bill = 400 + (consumption_units - 600) * 5
print("Electricity Bill: $", bill)
