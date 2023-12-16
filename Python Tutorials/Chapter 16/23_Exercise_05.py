# Write a Python class called Student that represents a student. The class should have the following attributes and methods:

# Attributes:

# name (string): representing the name of the student.
# age (integer): representing the age of the student.
# grades (list): representing the grades of the student.
# Methods:

# add_grade(grade): adds a grade to the student's list of grades.
# get_average_grade(): calculates and returns the average grade of the student.
# Your task is to implement the Student class with the specified attributes and methods. Test your class by creating an instance of Student, adding some grades using the add_grade() method, and retrieving the average grade using the get_average_grade() method.

class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def add_grade(self, grade):
        self.grades.append(grade)

    def get_average_grade(self):
        return sum(self.grades)/len(self.grades)


name = input("Enter the name of the student:")
age = int(input("Enter the age of the student:"))
student = Student(name, age, [])
print("Enter grades of students in 5 subjects:")
for i in range(0, 5):
    grade = int(input("Enter the grade:"))
    student.add_grade(grade)

print("The average grade of student is:", student.get_average_grade())