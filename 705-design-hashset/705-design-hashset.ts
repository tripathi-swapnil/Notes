class MyHashSet {
    hash = {};
    constructor() {
        this.hash = {}
    }

    add(key: number): void {
        this.hash[key] = 1;
    }

    remove(key: number): void {
        delete this.hash[key];
    }

    contains(key: number): boolean {
        return this.hash[key] ? true : false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */