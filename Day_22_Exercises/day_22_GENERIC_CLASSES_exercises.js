// 1. Generic Queue Implementation
// Implement a generic Queue<T> class that follows the first-in-first-out (FIFO) principle.
// The class should include methods for enqueuing items, dequeuing items, checking if the queue is full,
// and checking if the queue is empty.
// Test the Queue class with different data types, such as numbers, strings, or objects,
// to ensure it works correctly with all types.
var Queue = /** @class */ (function () {
    function Queue(maxSize) {
        this.maxSize = maxSize;
        this.items = [];
    }
    // Enqueue an item
    Queue.prototype.enqueue = function (item) {
        if (this.isFull()) {
            throw new Error("Queue is full!");
        }
        this.items.push(item);
    };
    // Dequeue an item
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }
        return this.items.shift();
    };
    // Check if the queue is full
    Queue.prototype.isFull = function () {
        return this.items.length >= this.maxSize;
    };
    // Check if the queue is empty
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
// Test with numbers
var numberQueue = new Queue(3);
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(numberQueue.dequeue()); // 10
// Test with strings
var stringQueue = new Queue(2);
stringQueue.enqueue("hello");
console.log(stringQueue.dequeue()); // "hello"
// 2. Type-Safe Generic Linked List
// Create a generic LinkedList<T> class that allows you to add and remove nodes from the list.
// Each node should store a value of type T and a reference to the next node.
// Implement methods for adding a node to the end, removing a node from the start, and checking if the list is empty.
// Test the LinkedList with various types, including custom objects.
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.next = null;
        this.value = value;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    // Add a node to the end
    LinkedList.prototype.add = function (value) {
        var newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    // Remove a node from the start
    LinkedList.prototype.remove = function () {
        if (!this.head)
            return undefined;
        var value = this.head.value;
        this.head = this.head.next;
        return value;
    };
    // Check if the list is empty
    LinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    return LinkedList;
}());
// Test with numbers
var numberList = new LinkedList();
numberList.add(10);
numberList.add(20);
console.log(numberList.remove()); // 10
// Test with custom objects
var objectList = new LinkedList();
objectList.add({ id: 1, name: "Alice" });
console.log(objectList.remove()); // { id: 1, name: "Alice" }
// 3. Generic Map with Constraints
// Develop a generic Map<K extends string, V> class that stores key-value pairs where the keys are strings.
// The class should provide methods to set, get, and delete key-value pairs, as well as check if a key exists.
// Ensure that the class can handle any value type V, and test it with different types of values, including arrays and objects.
var Map = /** @class */ (function () {
    function Map() {
        this.items = {};
    }
    // Set key-value pair
    Map.prototype.set = function (key, value) {
        this.items[key] = value;
    };
    // Get value by key
    Map.prototype.get = function (key) {
        return this.items[key];
    };
    // Delete a key
    Map.prototype["delete"] = function (key) {
        delete this.items[key];
    };
    // Check if a key exists
    Map.prototype.has = function (key) {
        return key in this.items;
    };
    return Map;
}());
// Test with string values
var stringMap = new Map();
stringMap.set("name", "Alice");
console.log(stringMap.get("name")); // "Alice"
// Test with object values
var objectMap = new Map();
objectMap.set("profile", { age: 30 });
console.log(objectMap.get("profile")); // { age: 30 }
// 4. Generic Stack with Max Size Constraint
// Modify the Stack<T> class to include a generic constraint that limits the stack to accept only numbers or strings as elements.
// Implement methods to push, pop, check if the stack is empty, and check if the stack is full.
// Test the class with valid and invalid types to ensure the constraint is enforced properly.
var Stack2 = /** @class */ (function () {
    function Stack2(maxSize) {
        this.items = [];
        this.maxSize = maxSize;
    }
    // Push an item onto the stack
    Stack2.prototype.push = function (item) {
        if (this.isFull()) {
            throw new Error("Stack is full");
        }
        this.items.push(item);
    };
    // Pop an item off the stack
    Stack2.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    };
    // Check if the stack is full
    Stack2.prototype.isFull = function () {
        return this.items.length >= this.maxSize;
    };
    // Check if the stack is empty
    Stack2.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack2;
}());
// Test with numbers
var numberStack = new Stack2(2);
numberStack.push(100);
numberStack.push(200);
console.log(numberStack.pop()); // 200
// Test with strings
var stringStack = new Stack2(2);
stringStack.push("hello");
console.log(stringStack.pop()); // "hello"
// Invalid types (uncomment for compile-time error)
// const invalidStack = new Stack<boolean>(2); // Error: boolean is not assignable to T
// 5. Generic Dictionary with Key Constraints
// Implement a generic Dictionary<K extends string | number, V> class that allows you to store key-value pairs where
// the keys can only be strings or numbers. Provide methods to add, retrieve, update, and remove entries in the dictionary.
// Test the Dictionary class with both string and number keys, ensuring that it handles key collisions and updates correctly.
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
    }
    // Add or update an entry
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value;
    };
    // Retrieve an entry
    Dictionary.prototype.get = function (key) {
        return this.items[key];
    };
    // Remove an entry
    Dictionary.prototype.remove = function (key) {
        delete this.items[key];
    };
    // Check if a key exists
    Dictionary.prototype.has = function (key) {
        return key in this.items;
    };
    return Dictionary;
}());
// Test with string keys
var stringDictionary = new Dictionary();
stringDictionary.set("age", 25);
console.log(stringDictionary.get("age")); // 25
// Test with number keys
var numberDictionary = new Dictionary();
numberDictionary.set(1, "one");
console.log(numberDictionary.get(1)); // "one"
