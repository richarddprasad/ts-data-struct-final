import { QueueList } from '../queue_list/queue_list';

describe('queue', () => {
    const max = 5;
    const queue = new QueueList<number>();

    test('is newly-created and empty', () => {
        expect(queue.isEmpty()).toBe(true);
    });

    test('is not empty and not full after insertion of a single element (1)', () => {
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('returns a value of 1 after peeking', () => {
        expect(queue.peek()).toBe(1);
    });

    test('is emptied out', () => {
        expect(queue.dequeue()).toBe(1);
        expect(queue.isEmpty()).toBe(true);
    });

    test('has 5 elements inserted into it', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
    });

    test('is torn down until it is empty, returning values 1, 2, 3, 4, 5', () => {
        expect(queue.isEmpty()).toBe(false);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe(4);
        expect(queue.dequeue()).toBe(5);

        expect(queue.isEmpty()).toBe(true);
    });
});