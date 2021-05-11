// Hamza chabchoub contribution for a university project
function DoubleLinkedList () {
    const Node = function (element) {
      this.element = element
      this.next = null
      this.prev = null
    }
  
    let length = 0
    let head = null
    let tail = null
  
    // Add new element
    this.append = function (element) {
      const node = new Node(element)
  
      if (!head) {
        head = node
        tail = node
      } else {
        node.prev = tail
        tail.next = node
        tail = node
      }
  
      length++
    }
  
    // Add element
    this.insert = function (position, element) {
      // Check of out-of-bound values
      if (position >= 0 && position <= length) {
        const node = new Node(element)
        let current = head
        let previous = 0
        let index = 0
  
        if (position === 0) {
          if (!head) {
            head = node
            tail = node
          } else {
            node.next = current
            current.prev = node
            head = node
          }
        } else if (position === length) {
          current = tail
          current.next = node
          node.prev = current
          tail = node
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }
  
          node.next = current
          previous.next = node
  
          // New
          current.prev = node
          node.prev = previous
        }
  
        length++
        return true
      } else {
        return false
      }
    }
  
    // Remove element at any position
    this.removeAt = function (position) {
      // look for out-of-bounds value
      if (position > -1 && position < length) {
        let current = head
        let previous = 0
        let index = 0
  
        // Removing first item
        if (position === 0) {
          head = current.next
  
          // if there is only one item, update tail //NEW
          if (length === 1) {
            tail = null
          } else {
            head.prev = null
          }
        } else if (position === length - 1) {
          current = tail
          tail = current.prev
          tail.next = null
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }
  
          // link previous with current's next - skip it
          previous.next = current.next
          current.next.prev = previous
        }
  
        length--
        return current.element
      } else {
        return null
      }
    }
  
    // Get the indexOf item
    this.indexOf = function (elm) {
      let current = head
      let index = -1
  
      // If element found then return its position
      while (current) {
        if (elm === current.element) {
          return ++index
        }
  
        index++
        current = current.next
      }
  
      // Else return -1
      return -1
    }
  
    // Find the item in the list
    this.isPresent = (elm) => {
      return this.indexOf(elm) !== -1
    }
  
    // Delete an item from the list
    this.delete = (elm) => {
      return this.removeAt(this.indexOf(elm))
    }
  
    // Delete first item from the list
    this.deleteHead = function () {
      this.removeAt(0)
    }
  
    // Delete last item from the list
    this.deleteTail = function () {
      this.removeAt(length - 1)
    }
  
    // Print item of the string
    this.toString = function () {
      let current = head
      let string = ''
  
      while (current) {
        string += current.element + (current.next ? '\n' : '')
        current = current.next
      }
  
      return string
    }
  
    // Convert list to array
    this.toArray = function () {
      const arr = []
      let current = head
  
      while (current) {
        arr.push(current.element)
        current = current.next
      }
  
      return arr
    }
  
    // Check if list is empty
    this.isEmpty = function () {
      return length === 0
    }
  
    // Get the size of the list
    this.size = function () {
      return length
    }
  
    // Get the head
    this.getHead = function () {
      return head
    }
  
    // Get the tail
    this.getTail = function () {
      return tail
    }
  }
  

  function MyDoubleLinkedList () {
    const Node = function (element) {
      this.element = element
      this.next = null
      this.prev = null
    }
  
    let length = 0
    let head = new Node('head')
    let tail = head
  
    // Add new element
    this.append = function (element) {
      const node = new Node(element)
  
      node.prev = tail
      tail.next = node
      tail = node
      
  
      length++
    }
  
    // Add element
    this.insert = function (position, element) {
      // Check of out-of-bound values
      if (position >= 0 && position <= length) {
        const node = new Node(element)
        let current = head;
        let index = 0;
        
        while(index < position){
            current = current.next;
            index++ ;
        }
        node.next = current.next;
        if (node.next !== null){
            node.next.prev = node;
        }
        node.prev = current;  
        current.next = node;

        length++
        return true
      } else {
        return null
      }
    }
  
    // Remove element at any position
    this.removeAt = function (position) {
      // look for out-of-bounds value        

      if (position > -1 && position < length) {

        let current = head;
        let index = 0;
        
        while(index < position){
            current = current.next;
            index++ ;
        }
        if (current.next.next !== null){
            current.next.next.prev = current
        }
        
        current.next = current.next.next
       
        length--
        return current.element
      } else {
        return null
      }
    }
  
    // Get the indexOf item
    this.indexOf = function (elm) {
      let current = head
      let index = -1
  
      // If element found then return its position
      while (current) {
        if (elm === current.element) {
          return ++index
        }
  
        index++
        current = current.next
      }
  
      // Else return -1
      return -1
    }
  
    // Find the item in the list
    this.isPresent = (elm) => {
      return this.indexOf(elm) !== -1
    }
  
    // Delete an item from the list
    this.delete = (elm) => {
      return this.removeAt(this.indexOf(elm))
    }
  
    // Delete first item from the list
    this.deleteHead = function () {
      this.removeAt(0)
    }
  
    // Delete last item from the list
    this.deleteTail = function () {
      this.removeAt(length - 1)
    }
  
    // Print item of the string
    this.toString = function () {
      let current = head
      let string = ''
  
      while (current) {
        string += current.element + (current.next ? '\n' : '')
        current = current.next
      }
  
      return string
    }
  
    // Convert list to array
    this.toArray = function () {
      const arr = []
      let current = head.next
  
      while (current) {
        arr.push(current.element)
        current = current.next
      }
  
      return arr
    }
  
    // Check if list is empty
    this.isEmpty = function () {
      return length === 0
    }
  
    // Get the size of the list
    this.size = function () {
      return length
    }
  
    // Get the head
    this.getHead = function () {
      return head
    }
  
    // Get the tail
    this.getTail = function () {
      return tail
    }
  }

  testData1 = [];
  testData2 = [];
  testData3 = [];

  for (let i = 0; i<1000; i++){
    testData1.push(Math.floor(Math.random()*1000));
    testData2.push([Math.floor(Math.random()*1000), Math.floor(Math.random()*1000)]);
    testData3.push(Math.floor(Math.random()*1000));
  }
  let newDoubleLinkedList
  let newDoubleLinkedList2
  newDoubleLinkedList = new DoubleLinkedList()
  newDoubleLinkedList2 = new MyDoubleLinkedList()

  for (let i = 0; i<testData1.length; i++){
    newDoubleLinkedList.append(testData1[i])
    newDoubleLinkedList2.append(testData1[i])    
  }
  console.log(JSON.stringify(newDoubleLinkedList.toArray())===JSON.stringify(newDoubleLinkedList2.toArray()) ) // returns 2
  newDoubleLinkedList = new DoubleLinkedList()
  newDoubleLinkedList2 = new MyDoubleLinkedList()

  for (let i = 0; i<testData2.length; i++){
    newDoubleLinkedList.insert(testData2[i][0], testData2[i][1])
    newDoubleLinkedList2.insert(testData2[i][0], testData2[i][1])
  }

  console.log(JSON.stringify(newDoubleLinkedList.toArray())===JSON.stringify(newDoubleLinkedList2.toArray()) ) // returns 2

  newDoubleLinkedList = new DoubleLinkedList()
  newDoubleLinkedList2 = new MyDoubleLinkedList()

  for (let i = 0; i<testData2.length; i++){
    newDoubleLinkedList.insert(testData1[i][0], testData1[i][1])
    newDoubleLinkedList2.insert(testData1[i][0], testData1[i][1])

    newDoubleLinkedList.removeAt(testData3[i])
    newDoubleLinkedList2.removeAt(testData3[i]) 
  }

  console.log(JSON.stringify(newDoubleLinkedList.toArray())===JSON.stringify(newDoubleLinkedList2.toArray()) ) // returns 2