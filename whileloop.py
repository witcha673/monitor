import random

random_num = random.randint(1,10)
loop = 5
print("welcome to the game random number between  1-10")

while loop > 0:
    startnum = int(input("enter your number: "))
    if startnum == random_num:
        print("you win")
        break
    else:
        loop -= 1
        print("you lose try again")
        print(f"you have {loop} if loop = 0 you lose")

if loop == 0:
    print("you lose") 

    

        