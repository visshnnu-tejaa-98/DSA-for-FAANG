class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  traverse() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }

  pop() {
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  getLength() {
    let curr = this.head;
    let index = 0;
    while (curr) {
      curr = curr.next;
      index++;
    }
    return index;
  }

  shift() {
    this.head = this.head.next;
  }

  deleteNthNodeFromEnd(n) {
    let fast = this.head;
    let slow = this.head;
    if (n === 0) {
      this.pop();
      return;
    }
    if (n === this.getLength()) {
      this.shift();
      return;
    }
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
  }
}

let ll = new SLL();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
ll.traverse();
ll.deleteNthNodeFromEnd(5);
ll.traverse();
