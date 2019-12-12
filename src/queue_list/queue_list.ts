import { LinkedList } from '../linked_list/linked_list';

export class QueueList<T> {
    private list: LinkedList<T>;

    public constructor() {
        this.list = new LinkedList<T>();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public enqueue(item: T): void {
        this.list.insertLast(item);
    }

    public dequeue(): T | null {
        return this.list.removeFirst();
    }

    public peek(): T | null {
        return this.list.getFirst();
    }

    public queueContents(): void {
        this.list.listContents();
    }
}