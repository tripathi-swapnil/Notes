class MyHashSet:
    
    hash = []

    def __init__(self):
        self.hash = {}
        

    def add(self, key: int) -> None:
        self.hash[key] = 1
        

    def remove(self, key: int) -> None:
        if self.hash.get(key):
            self.hash.pop(key)
        

    def contains(self, key: int) -> bool:
        return self.hash.get(key, False)
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)