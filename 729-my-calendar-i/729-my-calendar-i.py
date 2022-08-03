class MyCalendar:

    def __init__(self):
        self.bookings = []

    def book(self, start: int, end: int) -> bool:
        
        index = bisect_left(self.bookings, (start, end))
        
        if index > 0 and self.bookings[index-1][1] > start:
            return False
        
        if index < len(self.bookings) and self.bookings[index][0] < end:
            return False
        
        self.bookings.insert(index, (start, end))
        return True
        


# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)