const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  _head = {};
  _tail = {};
  _length = 0;

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this._length != 0) {
      this._tail.next = newNode;
    } else {
      this._head = newNode;
    }
    this._tail = newNode;
    this._length++;
  }

  dequeue() {
    let head = this._head.value;
    if (this._length != 0) {
      this._head = this._head.next;
    }
    this._length--;
    return head;
  }
}

module.exports = {
  Queue
};
