#battle rules

num_knights = int(input('Enter the number of knights '))  #int function converts the string to int
day = input('What day is it? ')
enemy = input('Enter the type of enemy ')

if enemy == 'Killer Bunny':
    print('Throw HOLY HAND GRENADE!')
else:
    if (num_knights < 3) or (day == 'Monday') :    
        print('Retreat!')
        print('Raise the white flag!')
    elif (num_knights >= 10) and (day == 'Wednesday'):
        print('Trojan Rabbit')
    elif day == 'Tuesday':
        print('Taco Night')
    else:
        print('Truce?')