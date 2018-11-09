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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let nodeA = headA;
    let nodeB = headB;

    let listARerun = 0;
    let listBRerun = 0;

    while (nodeA && nodeB) {
        if (nodeA === nodeB) {
            return nodeA;
        }

        if (!nodeA.next && listARerun === 0) {
            nodeA = headB;
            listARerun += 1;
        } else {
            nodeA = nodeA.next;
        }
        if (!nodeB.next && listBRerun === 0) {
            nodeB = headA;
            listBRerun += 1;
        } else {
            nodeB = nodeB.next;
        }
    }
    return null;
};

let node1 = new ListNode('a1');
let node2 = new ListNode('a2');
let node3 = new ListNode('b1');
let node4 = new ListNode('b2');
let node5 = new ListNode('b3');
let node6 = new ListNode('c1');
let node7 = new ListNode('c2');
let node8 = new ListNode('c3');
node1.next = null;
node2.next = null;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

let result = getIntersectionNode(node1, node3);
console.log(result);