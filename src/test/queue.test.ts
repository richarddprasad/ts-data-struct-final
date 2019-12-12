import { Queue } from '../queue/queue';

describe('queue', () => {
    const max = 5;
    const queue = new Queue<number>(max);

    test('is newly-created, empty and not full', () => {
        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);
    });

    test('is not empty and not full after insertion of a single element (1)', () => {
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.isFull()).toBe(false);
    });

    test('returns a value of 1 after peeking', () => {
        expect(queue.peek()).toBe(1);
    });

    test('is emptied out', () => {
        expect(queue.dequeue()).toBe(1);
        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);
    });

    test('has 5 elements inserted into it so that it is full', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        expect(queue.isFull()).toBe(true);
    });

    test('is torn down until it is empty, returning values 1, 2, 3, 4, 5', () => {
        expect(queue.isEmpty()).toBe(false);
        expect(queue.isFull()).toBe(true);
        
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe(4);
        expect(queue.dequeue()).toBe(5);

        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);
    });
});