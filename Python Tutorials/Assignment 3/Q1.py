basic_pay = float(input("Enter Salary of the employee:"))
hra_percent = 10
ta_percent = 5
hra = (basic_pay*hra_percent)/100
ta = (basic_pay*ta_percent)/100
print("The total salary is:", basic_pay+hra+ta)
