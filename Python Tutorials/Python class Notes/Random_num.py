import random
number1 = random.randint(0, 9)
number2 = random.randint(0, 9)

answer = eval(input("What is "+str(number1)+" + "+str(number2) + "? "))

# Display Result
print(number1, "+", number2, "=", answer, "is",
      "Right" if number1+number2 == answer else "Wrong")
