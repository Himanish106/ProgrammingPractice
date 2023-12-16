days_late = int(input("Enter the no. of days late: "))
if days_late > 0 and days_late <= 5:
    fine = 50/100
    print(f"No of days late is={days_late},so the fine is {fine} rupees")
elif days_late <= 10:
    fine = 1
    print(f"No of days late is={days_late},so the fine is {fine} rupees")
elif days_late > 10 and days_late <= 30:
    fine = 5
    print(f"No of days late is={days_late},so the fine is {fine} rupees")
elif days_late > 30:
    print("Membership Cancelled")
else:
    print("Invalid days input")
