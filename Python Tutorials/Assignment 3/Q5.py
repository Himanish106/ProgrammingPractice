words = []
for i in range(1, 6):
    while True:
        word = input("Enter a word:")
        if len(word) < 6:
            print("Length less than 6! So enter again")
        else:
            words.append(word)
            break

for i in words:
    print(i)
