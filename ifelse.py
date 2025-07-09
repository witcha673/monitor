newplayer = input(f"welcome to the game, please enter your name: ")
classhero = input(f"choose your class hero (warrior, mage, archer): ")

if classhero == "warrior":
    print(f"{newplayer} You have chosen the path of the Warrior")
    print("you power is strong and defense is high")
elif classhero == "mage":
    print(f"{newplayer} You have chosen the path of the Mage")
    print("you power is magic and attack is high")
elif classhero == "archer":
    print(f"{newplayer} You have chosen the path of the Archer")
    print("you power is speed and attack is high")
else:
    print(f"{newplayer} Invalid class selection. Please choose from Warrior, Mage, or Archer.")


