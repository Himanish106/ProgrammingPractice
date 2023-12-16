import random
correct_num = random.randint(1, 100)
no_of_guesses = 0
while True:
    guess_number = int(input("Enter a number to guess:"))
    if guess_number == correct_num:
        print(f"{correct_num} guessed in {no_of_guesses} attempt")
        break
    elif guess_number < correct_num:
        print("Please enter a higher number")
        no_of_guesses += 1
    elif guess_number > correct_num:
        print("Please enter a lower number")
        no_of_guesses += 1
    else:
        print("Wrong choice")
