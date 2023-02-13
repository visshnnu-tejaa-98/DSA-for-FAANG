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

  detectLoop() {
    let tortoise = this.head;
    let hare = this.head;
    while (tortoise && hare && hare.next) {
      tortoise = tortoise.next;
      hare = hare.next.next;
      if (hare === tortoise) {
        return true;
      }
    }
    return false;
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

  lengthLL() {
    let curr = this.head;
    let index = 0;
    while (curr) {
      curr = curr.next;
      index++;
    }
    return index;
  }
}

const convertSLLToCLL = (ll) => {
  let curr = ll;
  let prev = null;
  while (curr) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = ll;
};

let ll = new SLL();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
ll.traverse();
console.log(ll.detectLoop());
console.log(ll.detectLoop(convertSLLToCLL(ll.head)));
