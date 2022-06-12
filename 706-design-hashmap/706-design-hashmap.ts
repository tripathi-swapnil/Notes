class MyHashMap {
    hash = {};
    constructor() {
        
    }

    put(key: number, value: number): void {
        this.hash[key] = value;
    }

    get(key: number): number {
        if(this.hash.hasOwnProperty(key)) return this.hash[key];
        return -1;
    }

    remove(key: number): void {
        delete this.hash[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */