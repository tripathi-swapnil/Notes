function randomBoolean(): boolean {
  return Boolean(Math.floor(Math.random() * 2));
}

class SkipNode {
  val: number;
  next?: SkipNode;
  down?: SkipNode;

  constructor(val: number, next?: SkipNode, down?: SkipNode) {
    this.val = val;
    this.next = next;
    this.down = down;
  }
}

class Skiplist {
  head?: SkipNode = new SkipNode(-1);

  constructor() {}

  search(target: number): boolean {
    let current = this.head;

    while (current) {
      while (current.next && current.next.val < target) {
        current = current.next;
      }

      if (current.next && current.next.val == target) return true;
      current = current.down;
    }
    return false;
  }

  add(num: number): void {
    const stack: SkipNode[] = [];
    let current = this.head;
    while (current) {
      while (current.next && current.next.val < num) {
        current = current.next;
      }
      stack.push(current);
      current = current.down;
    }
    let insert = true,
      down;
    while (insert && stack.length !== 0) {
      current = stack.pop() as SkipNode;
      current.next = new SkipNode(num, current.next, down);
      down = current.next;
      insert = randomBoolean();
    }
    if (insert) this.head = new SkipNode(-1, undefined, this.head);
  }

  erase(num: number): boolean {
    let current = this.head,
      found = false;
    while (current) {
      while (current.next && current.next.val < num) {
        current = current.next;
      }
      if (current.next && current.next.val == num) {
        found = true;
        current.next = current.next.next;
      }
      current = current.down;
    }
    return found;
  }
}