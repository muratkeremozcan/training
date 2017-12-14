price = input ("Enter the price: ")

try:
    price = float(price)
    print('Price =', price)
    
except ValueError:   # if it's a string 
    print('not a number')