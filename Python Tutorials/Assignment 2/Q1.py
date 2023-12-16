print("Please enter 10 persons age...")
count = 0
for i in range(1, 11):
    age = int(input(f"{i} person age:"))
    if age >= 50 and age <= 60:
        count += 1
print("Number of persons in the age group 50 to 60 is:", count)
