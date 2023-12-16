# So we have created a file named as file6.txt which has some data written to it and file7.txt which is empty. So our job is read the data from file6.txt and write the same data to file7.txt which we had read in file6.txt

with open('file6.txt','r') as rf:
    with open('file7.txt','w') as wf:
        wf.write(rf.read())