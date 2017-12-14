import random

prices = [2.50, 3.50, 4.50]
total = 0

for an_item in prices:
    print('Price is', an_item)
    total = total + an_item
    print('total is \t', total)

average = total / len(prices)
print('average is', average)

for i in range(10):   #array of 10 items 
    random_ticket = random.randint(1, 1000)   #random number between 1 and 1000
    print(random_ticket)

for i in range (2005, 2016, 2):   # from 2005 to 2016 range, every 2 
    print(i)