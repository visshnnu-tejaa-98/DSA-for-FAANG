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

function traverse(ll) {
  let curr = ll;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  console.log(arr);
}

function reverse(ll) {
  let curr = ll;
  let prev = null;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
  return this.head;
}

function checkPalindrome(ll) {
  let slow = ll;
  let fast = ll;
  while (slow && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== null) slow = slow.next;
  let reversedList = reverse(slow);
  while (reversedList) {
    if (reversedList.val !== ll.val) return false;
    else {
      reversedList = reversedList.next;
      ll = ll.next;
    }
  }
  return true;
}

let ll = new SLL();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(30);
ll.push(20);
ll.push(10);
traverse(ll.head);
console.log(checkPalindrome(ll.head));
