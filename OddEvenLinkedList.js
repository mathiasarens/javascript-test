/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let oddIndexesList = null;
    let evenIndexesList = null;
    let lastOddIndexNode = null;
    let lastEvenIndexNode = null;
    
    i = 1;
    let node = head;
    while (node) {
        if (i%2==0) {
            if (evenIndexesList == null) {
                evenIndexesList = node;
            }
            if (lastEvenIndexNode != null) {
                lastEvenIndexNode.next = node;
            }
            lastEvenIndexNode = node;
        }
        if (i%2!=0) {
            if (oddIndexesList == null) {
                oddIndexesList = node;
            }
            if (lastOddIndexNode != null) {
                lastOddIndexNode.next = node;
            }
            lastOddIndexNode = node;
        }
        i+=1;
        node = node.next;
    }
    if (lastOddIndexNode) {
        lastOddIndexNode.next = evenIndexesList;
    }
    if (lastEvenIndexNode) {
        lastEvenIndexNode.next = null
    }
    return oddIndexesList;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

let result = oddEvenList(null);
let node = result
while(node) {
    if (node.next) {
        console.log(node.val, "->");
    } else {
        console.log(node.val);
    }
    node = node.next;
}