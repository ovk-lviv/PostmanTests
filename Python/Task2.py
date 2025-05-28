import json 

with open('testFile.json', 'r') as test_file:
    data = json.load(test_file)

    lists = data['lists']
 
    for i in range (len(lists)):
        print ("List ID:" + str(data['lists'][i]['id']))    
        print("List name:" + str(data['lists'][i]['name']))