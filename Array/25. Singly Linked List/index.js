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

  pop() {
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  shift() {
    this.head = this.head.next;
  }

  insert(val, idx) {
    let newNode = new Node(val);
    if (!this.head) {
      this.push(val);
    } else {
      let index = 0;
      let curr = this.head;

      while (index < idx) {
        curr = curr.next;
        index++;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }

  remove(idx) {
    let index = 0;
    let curr = this.head;
    let prev = null;
    while (index < idx) {
      prev = curr;
      curr = curr.next;
      index++;
    }
    prev.next = curr.next;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  detectLoop() {
    let tortoise = this.head;
    let hare = this.head;
    console.log(111);
    while (tortoise && hare && hare.next) {
      tortoise = tortoise.next;
      hare = hare.next.next;
      if (hare === tortoise) {
        return true;
      }
    }
    return false;
  }

  set(val, idx) {
    if (!this.head) {
      return;
    } else {
      let index = 0;
      let curr = this.head;
      let prev = null;
      let newNode = new Node(val);
      while (index < idx) {
        prev = curr;
        curr = curr.next;
        index++;
      }
      newNode.next = curr.next;
      prev.next = newNode;
    }
  }

  get(idx) {
    if (!this.head) {
      return;
    }
    let index = 0;
    let curr = this.head;
    while (index < idx) {
      curr = curr.next;
      index++;
    }
    return curr.val;
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

  traverse() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

let ll = new SLL();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
ll.unshift(60);
ll.insert(100, 3);
ll.reverse();
ll.set(200, 3);
// console.log(ll.get(2));
ll.pop();
ll.remove(1);
// console.log(ll.getLength());
ll.shift();
ll.traverse();
