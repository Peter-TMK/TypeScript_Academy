// 1. Generic Queue Implementation
// Implement a generic Queue<T> class that follows the first-in-first-out (FIFO) principle.
// The class should include methods for enqueuing items, dequeuing items, checking if the queue is full,
// and checking if the queue is empty.
// Test the Queue class with different data types, such as numbers, strings, or objects,
// to ensure it works correctly with all types.

class Queue<T> {
  private items: T[] = [];

  constructor(private maxSize: number) {}

  // Enqueue an item
  enqueue(item: T): void {
    if (this.isFull()) {
      throw new Error("Queue is full!");
    }
    this.items.push(item);
  }

  // Dequeue an item
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Queue is empty!");
    }
    return this.items.shift();
  }

  // Check if the queue is full
  isFull(): boolean {
    return this.items.length >= this.maxSize;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Test with numbers
const numberQueue = new Queue<number>(3);
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(numberQueue.dequeue()); // 10

// Test with strings
const stringQueue = new Queue<string>(2);
stringQueue.enqueue("hello");
console.log(stringQueue.dequeue()); // "hello"

// 2. Type-Safe Generic Linked List
// Create a generic LinkedList<T> class that allows you to add and remove nodes from the list.
// Each node should store a value of type T and a reference to the next node.
// Implement methods for adding a node to the end, removing a node from the start, and checking if the list is empty.
// Test the LinkedList with various types, including custom objects.

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;

  // Add a node to the end
  add(value: T): void {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node from the start
  remove(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  // Check if the list is empty
  isEmpty(): boolean {
    return this.head === null;
  }
}

// Test with numbers
const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(20);
console.log(numberList.remove()); // 10

// Test with custom objects
const objectList = new LinkedList<{ id: number; name: string }>();
objectList.add({ id: 1, name: "Alice" });
console.log(objectList.remove()); // { id: 1, name: "Alice" }

// 3. Generic Map with Constraints
// Develop a generic Map<K extends string, V> class that stores key-value pairs where the keys are strings.
// The class should provide methods to set, get, and delete key-value pairs, as well as check if a key exists.
// Ensure that the class can handle any value type V, and test it with different types of values, including arrays and objects.

class Map<K extends string, V> {
  private items: Record<K, V> = {} as Record<K, V>;

  // Set key-value pair
  set(key: K, value: V): void {
    this.items[key] = value;
  }

  // Get value by key
  get(key: K): V | undefined {
    return this.items[key];
  }

  // Delete a key
  delete(key: K): void {
    delete this.items[key];
  }

  // Check if a key exists
  has(key: K): boolean {
    return key in this.items;
  }
}

// Test with string values
const stringMap = new Map<string, string>();
stringMap.set("name", "Alice");
console.log(stringMap.get("name")); // "Alice"

// Test with object values
const objectMap = new Map<string, { age: number }>();
objectMap.set("profile", { age: 30 });
console.log(objectMap.get("profile")); // { age: 30 }

// 4. Generic Stack with Max Size Constraint
// Modify the Stack<T> class to include a generic constraint that limits the stack to accept only numbers or strings as elements.
// Implement methods to push, pop, check if the stack is empty, and check if the stack is full.
// Test the class with valid and invalid types to ensure the constraint is enforced properly.

class Stack2<T extends number | string> {
  private items: T[] = [];
  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  // Push an item onto the stack
  push(item: T): void {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    this.items.push(item);
  }

  // Pop an item off the stack
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  // Check if the stack is full
  isFull(): boolean {
    return this.items.length >= this.maxSize;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Test with numbers
const numberStack = new Stack2<number>(2);
numberStack.push(100);
numberStack.push(200);
console.log(numberStack.pop()); // 200

// Test with strings
const stringStack = new Stack2<string>(2);
stringStack.push("hello");
console.log(stringStack.pop()); // "hello"

// Invalid types (uncomment for compile-time error)
// const invalidStack = new Stack<boolean>(2); // Error: boolean is not assignable to T

// 5. Generic Dictionary with Key Constraints
// Implement a generic Dictionary<K extends string | number, V> class that allows you to store key-value pairs where
// the keys can only be strings or numbers. Provide methods to add, retrieve, update, and remove entries in the dictionary.
// Test the Dictionary class with both string and number keys, ensuring that it handles key collisions and updates correctly.

class Dictionary<K extends string | number, V> {
  private items: Record<K, V> = {} as Record<K, V>;

  // Add or update an entry
  set(key: K, value: V): void {
    this.items[key] = value;
  }

  // Retrieve an entry
  get(key: K): V | undefined {
    return this.items[key];
  }

  // Remove an entry
  remove(key: K): void {
    delete this.items[key];
  }

  // Check if a key exists
  has(key: K): boolean {
    return key in this.items;
  }
}

// Test with string keys
const stringDictionary = new Dictionary<string, number>();
stringDictionary.set("age", 25);
console.log(stringDictionary.get("age")); // 25

// Test with number keys
const numberDictionary = new Dictionary<number, string>();
numberDictionary.set(1, "one");
console.log(numberDictionary.get(1)); // "one"
