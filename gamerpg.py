#game rpg
import random

HPplayer = 100
HPmonter = 100
print("welcome to my game")

while HPplayer > 0 and HPmonter > 0:
    print(f"HP player {HPplayer} | HP monter {HPmonter}")
    action = input("choose attack or run ")

    if action == "attack":
        hero_dmg = random.randint(1,15)
        monter_dmg = random.randint(1,15)

        HPmonter -=hero_dmg
        print(f"you hit monter {hero_dmg} dmg, HPmonter now is {HPmonter}")
  
        if HPmonter < 0:
          break
        HPplayer -=monter_dmg
        print(f"monter hit you {monter_dmg} dmg, HPplyer now is {HPplayer}")

    elif action == "run":
         print("you run away gameover")
         break
    else:
     print("Invalid action. Please choose attack or run.")

if HPplayer <= 0:
   print("gameover")
elif HPmonter <= 0:
   print("you win")
      
 


    