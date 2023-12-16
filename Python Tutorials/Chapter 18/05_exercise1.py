# Refer to file8.txt. Now in a new file your output should be:
# Harshit's salary is 100
# Mohit's salary is 50

with open('file8.txt', 'r') as rf:
    with open('file8_output.txt', 'w') as wf:
        for line in rf.readlines():
            name, salary = line.split(',')
            wf.write(f'{name}\'s salary is {salary}')
