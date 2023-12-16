# Write a program to determine whether a person is eligible to vote or not.If he is not eligible ,display how many years are left to be eligible.

class Voter:
    eligibility_age = 18

    def __init__(self, age):
        self.age = age

    def voting_eligibility_check(self):
        if self.age >= Voter.eligibility_age:
            return 1
        else:
            return 0

    def eligibilty_years_left(self):
        return Voter.eligibility_age-self.age


age = int(input("Enter age to check voting rights:"))
voter = Voter(age)
if voter.voting_eligibility_check() == 1:
    print("Eligible")
else:
    print(
        f"Not eligible. Can vote after {voter.eligibilty_years_left()} years")
