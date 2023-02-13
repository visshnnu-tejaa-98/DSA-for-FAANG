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
  let i = 0;
  let j = 0;
  let res = new SLL();
  l1.traverse();
  while (i < l1.lengthLL() && j < l2.lengthLL()) {
    if (l1.get(i) < l2.get(j)) {
      res.push(l1.get(i));
      i++;
    } else {
      res.push(l2.get(j));
      j++;
    }
  }
  while (i < l1.lengthLL()) {
    res.push(l1.get(i));
    i++;
  }
  while (j < l2.lengthLL()) {
    res.push(l2.get(j));
    j++;
  }
  return res;
}
l3 = merge(l1, l2);
l3.traverse();
