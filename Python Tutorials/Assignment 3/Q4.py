while True:
    string = input("Enter the string:")
    if string.upper() == 'QUIT':
        break
    else:
        print("Length of the string is:", len(string))
