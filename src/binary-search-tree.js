const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    let node = new Node(data);
    let pointer = this._root;
    let parent = this._root;
    while(pointer != null) {
        parent = pointer;
        if(data <= pointer.data)
          pointer = pointer.left;
        else pointer = pointer.right;
    } 
    if (parent === null)
      this._root = node;
    else if (data <= parent.data)
      parent.left = node;
    else
      parent.right = node;
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let pointer = this._root;
    while(pointer && pointer.data != data) {
        if(data < pointer.data)
          pointer = pointer.left;
        else pointer = pointer.right;
    }
    return pointer;
  }

  remove(data) {
    let pointer = this._root;
    let parent = this._root;
    while(pointer && pointer.data != data) {
        parent = pointer;
        if(data < pointer.data)
          pointer = pointer.left;
        else pointer = pointer.right;
    } 
    let rightPointer = pointer.right;
    if (rightPointer) {
      while(rightPointer.left) {
        rightPointer = rightPointer.left;
      }
      rightPointer.left = pointer.left;
    } else {
      pointer.right = pointer.left;
    }
    if (pointer === this._root) {
      this._root = pointer.right;
    } else if (pointer === parent.left) {
      parent.left = pointer.right;
    }
    else if (pointer === parent.right) {
      parent.right = pointer.right;
    };
    
  }

  min() {
    let pointer = this._root;
    while (pointer.left != null)
      pointer = pointer.left;
    return pointer.data;
  }

  max() {
    let pointer = this._root;
    while (pointer.right != null)
      pointer = pointer.right;
    return pointer.data;
  }
}

module.exports = {
  BinarySearchTree
};