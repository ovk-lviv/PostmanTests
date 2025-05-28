print("Each element of array:")
testArray=[4, 4, 8, 3, 3, 3, 2, 4, 4]
for element in testArray:
    print (element)

print ("The first three elements of array:")
for i in range(3):
    print (testArray[i])

sum = 0
print("The sum of elements in array:")
for i in range(len(testArray)):
    sum+=testArray[i]

print(sum)

sum1 = 0
print("The sum of elements in array that do not equal 4:")
for i in range(len(testArray)):
    if testArray[i]!=4:
        sum1+=testArray[i]

print(sum1)