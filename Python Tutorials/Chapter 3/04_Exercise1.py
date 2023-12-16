# EXERCISE :- Number Guessing game
# Make a variable like winning_number and assign any number to it
# Ask user to guess a number
# If user guessed correctly then print "YOU WIN!!!!"
# If user did'nt print correctly then:
#    If user guessed lower than the actual number then print "Too low"
#    If user guessed higher than the actual number then print "Too high"

# Google: "How to generate a random number in python" to generate random winning number

import random
winning_number = random.randint(1, 100)
no_of_guesses = 0
while True:
    guessed_number = int(input("Guess a number\n"))
    if winning_number == guessed_number:
        print("YOU WIN!!!")
        print("Total no of guesses: "+str(no_of_guesses+1))
        break
    # elif winning_number < guessed_number:
    #     print("Too High")
    #     no_of_guesses = no_of_guesses+1
    else:
        if winning_number < guessed_number:
            print("Too High")
            # no_of_guesses = no_of_guesses+1

        else:
            print("Too Low")
            # no_of_guesses = no_of_guesses+1
    no_of_guesses = no_of_guesses+1 #According to DRY principal instead of writing this statement in both if and else statements we can write it only once.


# So here we have learned about the concept of nested if else
# You can use seperately else if or simply elif as per your choice.
