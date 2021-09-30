// Creating a class for node that will be the building block for our linked list.
// Each element in the linked list will be stored in a node.
class Node{
    constructor(data = null, next = null){  // The node will have two attributes: the data it has and the pointer to next node
        this.data = data;
        this.next = next;
    }
}

// Creating the linked list class
class linkedlist {
    constructor(){    // The main attributes of the linked list are the head and its size.
        this.head = null;
        this.size = 0;
    }
    // Method to insert data at the start of the linked list
    insert(data){
        this.head = new Node(data, this.head); // Assigning the new data to the head of the linked list. And whatever is in the head is assigned to the next parameter.
        this.size++; // Increase the size to keep track.
        }
    
    // Method to insert data at end
        insertEnd(data){
       
        let current = this.head; // Use current to traverse through the linked list. setting it to head.
        while(current.next != null){  // Using a while loop to traverse through the linked list.
            current = current.next; // Going all the way to the end. when the next becomes null we will exit the while loop indicating we reached the end.
        }
     
        current.next = new Node(data); // Now that we reached the end we assign the next to the new node.
        this.size++; // Increase size to keep track.
    }

    // Method to insert data at a particular index
    
    insertAt(index, data){
             
        if(this.size < index){  // Cheking if the index requested is in bounds
            return console.log('Out of bounds');
        }
        else{
            var current = this.head; // Using current to traverse the linked list and initializing it to the head.
            var previous; // Initializing another variable previous.
            let i = 0;
            while(i < index){ // Using a while loop to traverse to the index.
                    previous = current; // Assigning current to previous so that we can have a record of previous and next element in the linked list.
                    i++;
                    current = current.next;  // Traversing the linked list.
                  
                    
                }
                
            // While loop will exit once we reach the node just before the index where we want insert the data.   
            const node = new Node(data); // Creating a new node with the new data.
            node.next = current; // So the current node will be assigned as the next since it is at the index we want to insert the data.
            previous.next = node; // The previous which has the data of the node before the index will get the new node as its next.
            this.size++; // Increase size to keep track.
        }

    }

    // Method to remove element from an index
    removeat(index){
        let count = 0, previous; // Initializing some variables.
        let current = this.head; // setting current to head to be able to traverse the linked list.
        if (index > this.size){ // Checking if the index is out of bounds
            console.log("Index out of bounds"); 
        }
        else{
        while(count < index){ // Using while loop to traverse through the linked list till the index
            previous = current; // Assigning current node to previous to keep track of consecutive nodes.
            current = current.next;
            count++;
        }
        // While loop exits when we reach the index where we want to remove the data from.
            previous.next = current.next; // To remove the node at the index assign the next of the previous node to the next of the current node. Thus removing the pointer to the current node.
        }
        this.size--; // Decrementing to keep track of size.

    } 

    // Method to clear all the elements from the linked list
    clear(){
        this.head = null; // Assigning the head to null automatically clears all the data in the linked list cos it will have no reference to any elements in the list anymore.
        this.size = 0; // Updating the size of the linked list.
    }
    
    // Method to display all the data in the linked list
    show(){
        let current = this.head; // Initializing current to head to traverse through the linked list.
               
        while(current){ // While current not null.           
            console.log(current.data); // Printing the data to the console.                       
            current = current.next;            
        }
    }
}


let ll = new linkedlist();
ll.insert(100);
ll.insert(200);
ll.insert(300);
ll.insertEnd(400);
ll.insertAt(2,500);
ll.removeat(4);
// ll.clear();
ll.show();
