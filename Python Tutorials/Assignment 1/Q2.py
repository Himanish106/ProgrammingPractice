gender = input("Enter the sex of the employee (m or f):")
salary = int(input("Enter the salary of the employee:"))
print("Salary=", salary)
if salary < 10000:
    bonus = (salary*2)//100
    salary = salary+bonus
if gender == 'm':
    bonus = float((salary*5)//100)
    print("Bonus=", bonus)
    print("********************")
    amount = salary+bonus
    print("\n")
    print("Amount to be paid:", amount)
elif gender == 'f':
    bonus = float((salary*10)//100)
    print("Bonus=", bonus)
    print("********************")
    amount = salary+bonus
    print("\n")
    print("Amount to be paid:", amount)
else:
    print("Wrong gender input")
