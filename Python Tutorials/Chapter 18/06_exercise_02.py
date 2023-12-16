# Extract all the links from the html file

with open('06_exercise_02.html', 'r') as webpage:
    with open('06_exercise_02_output.txt', 'w') as wf:
        for line in webpage.readlines():
            if '<a href=' in line:
                pos = line.find('<a href= ')
                first_quote = line.find('\"', pos)
                second_quote = line.find('\"', first_quote+1)
                url = line[first_quote+1:second_quote]
                wf.write(url+'\n')
