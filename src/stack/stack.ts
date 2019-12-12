export class Stack<T> {
    private stack: T[];
    private length: number;
    private readonly maxSize: number;

    public constructor(maxSize: number) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array<T>(this.maxSize);
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public isFull(): boolean {
        return this.length === this.maxSize;
    }

    public push(newItem: T): void {
        throw new Error('Implementation not provided');
    }

    public pop(): T {
        throw new Error('Implementation not provided');
    }

    public top(): T {
        throw new Error('Implementation not provided');
    }

    public stackContents(): void {
        console.log('Stack Contents');
        for (let i = 0; i < this.length; ++i) {
            console.log(`stack[${i}]: ${this.stack[i]}`);
        }
    }
}