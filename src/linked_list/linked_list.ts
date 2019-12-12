import { DS } from './node';

export class LinkedList<T> {
    private head: DS.Node<T>;
    private tail: DS.Node<T>;

    constructor() {
        this.head = new DS.Node<T>();
        this.tail = new DS.Node<T>();
        this.head.next = this.tail;
    }

    public isEmpty(): boolean {
        throw new Error('Method not implemented');
    }

    public insertFirst(item: T): void {
        throw new Error('Method not implemented');
    }

    public insertLast(item: T): void {

    }

    public removeFirst(): T | null {
        throw new Error('Method not implemented');
    }

    public remove(searchKey: T): T | null {
        throw new Error('Method not implemented');
    }

    public contains(searchItem: T): boolean {
        throw new Error('Method not implemented');
    }

    public getFirst(): T | null {
        throw new Error('Method not implemented');
    }

    public listContents(): void {
        let cur = this.head.next;

        while (cur && cur !== this.tail) {
            console.log(`${cur.item}`);
            cur = cur.next;
        }
    }
}