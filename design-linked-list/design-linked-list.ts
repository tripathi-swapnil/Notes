class MyLinkedList {

  head: ListNode | null = null;

  constructor() {
  }

  get(index: number): number {
    let count = 0, current = this.head;
    while (count < index && current) {
      count++;
      current = current.next;
    }
    return current ? current.val : -1;
  }

  addAtHead(val: number): void {
    this.head = new ListNode(val, this.head);
  }

  addAtTail(val: number): void {
    const dummy = new ListNode(-1, this.head);

    let current = dummy;
    while (current.next) {
      current = current.next;
    }

    current.next = new ListNode(val);

    this.head = dummy.next;
  }

  addAtIndex(index: number, val: number): void {
    const dummy = new ListNode(-1, this.head);
    let current = dummy, count = 0;

    while (count < index && current.next) {
      current = current.next;
      count++;
    }
    
    if (count === index && current) {
      current.next = new ListNode(val, current.next);
    }

    this.head = dummy.next;
  }

  deleteAtIndex(index: number): void {
    const dummy = new ListNode(-1, this.head);
    let current = dummy, count = 0;

    while (count < index && current.next) {
      current = current.next;
      count++;
    }
    
    if (count === index && current && current.next) current.next = current.next.next;

    this.head = dummy.next;
  }
  
  print(current?: ListNode): void {
    current = current ?? this.head;
    const items = [];
    while (current) {
      items.push(current.val);
      current = current.next;
    }
   // console.log(items.join(' -> '));
  }
}