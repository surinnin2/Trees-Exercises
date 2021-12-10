/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0
    }

    let toVisitQueue = [this.root]
    let nodeCount = 0
    while (toVisitQueue.length) {
      nodeCount += 1
      let current = toVisitQueue.shift()

      if (!current.left && !current.right) {
        return nodeCount
      }

      if (current.left) {
        toVisitQueue.push(current.left)
      }

      if (current.right) {
        toVisitQueue.push(current.right)
      }

      
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0
    }

    let nextLevelNode = null
    let deepest = 0
    let toVisitQueue = [this.root]
    let levelCount = 1
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift()

      if (current == nextLevelNode) {
        levelCount += 1
      }

      if (current.left) {
        toVisitQueue.push(current.left)
        nextLevelNode = current.left
      } else if (current.right) {
        toVisitQueue.push(current.right)
        nextLevelNode = current.right
      } else {
        deepest = deepest > levelCount ? deepest : levelCount
      }

      if (current.left && current.right) {
        toVisitQueue.push(current.right)
      }

    }
    return deepest
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(sum = 0) {
    let max = 0
    
    function nodeSum(node) {
      if (node === null) return 0
      const leftSum = nodeSum(node.left)
      const rightSum = nodeSum(node.right)
      max = Math.max(max, node.val + leftSum + rightSum)
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }

    nodeSum(this.root)
    return max
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let toVisitQueue = [this.root]
    let closest = null

    if (!this.root) {
      return null
    }

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift()
      
      let larger = current.val > lowerBound
      let newClosest = current.val < closest || closest === null
      
      if(larger && newClosest) {
        closest = current.val
      }
    }

    if (current.left) {
      toVisitQueue.push(current.left)
    }
    if (current.right) {
      toVisitQueue.push(current.right)
    }
    
    return closest
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
