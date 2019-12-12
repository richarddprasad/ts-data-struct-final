export class Queue {
    // private queue: [];
    private length: number; // number of elements currently in the queue
    private readonly maxSize: number; // maximum number of elements queue can contain

    public constructor(maxSize: number) {
        // Make sure maxSize is at least 1
        this.maxSize = maxSize > 0 ? maxSize : 10;
        this.length = 0;
    }

    public isEmpty() {

    }

    public isFull() {
        
    }
    
    public enqueue() {

    }

    public dequeue() {

    }

    public peek() {

    }
    
    public queueContents(): void {
        
    }
}