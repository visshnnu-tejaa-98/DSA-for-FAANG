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
}

function sort(ll) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;
  let curr = ll;
  while (curr) {
    if (curr.val === 0) zeros++;
    if (curr.val === 1) ones++;
    if (curr.val === 2) twos++;
    curr = curr.next;
  }
  curr = ll;
  while (curr) {
    if (zeros > 0) {
      curr.val = 0;
      curr = curr.next;
      zeros--;
      continue;
    }
    if (ones > 0) {
      curr.val = 1;
      curr = curr.next;
      ones--;
      continue;
    }
    if (twos > 0) {
      curr.val = 2;
      curr = curr.next;
      twos--;
      continue;
    }
  }
}

function traverse(ll) {
  let curr = ll;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  console.log(arr);
}

let ll = new SLL();
ll.push(2);
ll.push(2);
ll.push(1);
ll.push(1);
ll.push(0);
ll.push(1);
// traverse(sort(ll.head));
sort(ll.head);
traverse(ll.head);
