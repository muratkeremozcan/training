def average(numbers):    #calculate the average
    total = 0

    for num in numbers:
        total += num
    avg = total/len(numbers)
    return avg

numbersforFun = [1,2,3,4,5]
my_average = average(numbersforFun)
print(my_average)