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

  lengthLL() {
    let curr = this.head;
    let index = 0;
    while (curr) {
      curr = curr.next;
      index++;
    }
    return index;
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
}

let l1 = new SLL();
let l2 = new SLL();

l1.push(10);
l1.push(20);
l1.push(30);
l1.push(40);
l1.push(50);

l2.push(15);
l2.push(25);
l2.push(35);
l2.push(45);
l2.push(55);

l1.traverse();
l2.traverse();

l3 = new SLL();

function merge(l1, l2) {
  let res = null;
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  if (l1.val <= l2.val) {
    res = l1;
    res.next = merge(l1.next, l2);
  } else {
    res = l2;
    res.next = merge(l1, l2.next);
  }
  return res;
  // console.log(l1, l2);
}
l3.head = merge(l1.head, l2.head);
l3.traverse();
// console.log(l3);
