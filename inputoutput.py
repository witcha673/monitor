# ลองๆๆเ
#playername = input("enter name")
#print("player name is " + playername + "agee" + playerage + "you are proplayer")


#ให้เขียนโปรแกรมรับข้อมูลจากผู้ใช้:
#ชื่อของฮีโร่
#อายุของฮีโร่
#อาชีพของฮีโร่ (เช่น นักรบ, นักเวท, นักธนู)

#playername = input("enter your name: ")
#agehero = input("enter hero age: ")
#classhero = input("enter class hero: ")

#print(f"player name is {playername} age hero is {agehero} classhero is {classhero} ")

np = input(f"Welcome to the game, please enter your name: ")
classhero = input(f"Choose your class hero (warrior, mage, archer): ")

if classhero == "warrior":
    print(f"{np} You have chosen the path of the Warrior 20 dmg")
    print("Your power is strong and defense is high")
elif classhero == "mage":
    print(f"{np} You have chosen the path of the Mage 5 dmg")
    print("Your power is magic and attack is high")
elif classhero == "archer":
    print(f"{np} You have chosen the path of the Archer 10 dmg")
    print("Your power is speed and attack is high")
else:
    print(f"{np} Invalid class selection. Please choose from Warrior, Mage, or Archer")

damage = int(input("enter your bonus dmg for choose class hero: "))
xTWO = 2

mutiple = damage * xTWO

print(f"you class hero total damage is {mutiple}")





