class Solution:
    def romanToInt(self, st: str) -> int:
        dict = {
            'I':{
                'value': 1,
                'pattern':['X','V']
            },
            'V':{
                'value': 5,
                'pattern': []
            },
            'X':{
                'value': 10,
                'pattern':['L', 'C']
            },
            'L':{
                'value': 50,
                'pattern':[]
            },
            'C':{
                'value': 100,
                'pattern':['D','M']
            },
            'D':{
                'value': 500,
                'pattern':[]
            },
            'M':{
                'value': 1000,
                'pattern':[]
            }
        }
        sum = 0
        for i, s in enumerate(st):
            # print(sum, dict.get(s)['value'], dict.get(s)['pattern'])
            val = dict.get(s)['value']
            # try:
            if i >= len(st) -1:
                index = -1
            else:
                index = 1 if st[i+1] in dict.get(s)['pattern'] else -1
            # except ValueError:
            #     index = -1
            
            if index > -1:
                sum -= val
            else:
                sum += val
        return sum
        
        