function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1]);
  
  let total = 0;
  const pq = new MaxPriorityQueue({ priority: (x) => x });

  for (let [dur, end] of courses) {
    if (dur + total <= end) {
      total += dur;
      pq.enqueue(dur);
    } else if (pq.front() && pq.front().element > dur) {
      total += dur - pq.dequeue().element;
      pq.enqueue(dur);
    }
  }

  return pq.size();
}