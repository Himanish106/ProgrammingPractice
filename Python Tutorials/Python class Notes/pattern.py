n=3
for i in range(1,n+1):
    # print("",end=" ")
    for k in range(n,i,-1):
        print("",end=" ")
    for j in range(1,i+1):
        print("*",end=" ")
    print("\n")