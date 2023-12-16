vehicle = input("Enter c for car or b for bus:")
hours = int(input("Total hours of parking:"))
if vehicle == 'c':
    print("Total charge of parking the car is:", 10*hours)
elif vehicle == 'b':
    print("Total charge of parking the bus is:", 20*hours)
else:
    print("Wrong vehicle input")
