function isPossible(target: number[]): boolean {
    const pq = new MaxPriorityQueue({priority: x => x});
    let sum = 0;

    for (let num of target) {
      sum += num;
      pq.enqueue(num);
    }

    while (pq.front().element !== 1) {
        let num = pq.dequeue().element;
        sum -= num;
      
        if (num <= sum || sum < 1) return false;
      
        num %= sum;
        sum += num;
        pq.enqueue(num || sum);
    }
    return true;
};