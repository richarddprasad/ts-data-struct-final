import { LinkedList } from '../linked_list/linked_list';

export class StackList<T> {
    private list: LinkedList<T>;

    public constructor() {
        this.list = new LinkedList<T>();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public push(item: T): void {
        this.list.insertFirst(item);
    }

    public pop(): T | null {
        return this.list.removeFirst();
    }

    public top(): T | null {
        return this.list.getFirst();
    }

    public stackContents(): void {
        this.list.listContents();
    }
}