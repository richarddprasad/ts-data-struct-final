import { Stack } from '../stack/stack';

describe('stack', () => {
    const stack = new Stack<number>(5);

    test('is newly-created, empty and not full', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.isFull()).toBe(false);
    });

    test('has element with value of 1 pushed into it', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.isFull()).toBe(false);
    });

    test('returns a value of 1 after top operation and is not emptied', () => {
        expect(stack.top()).toBe(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test('is emptied after popping lone element', () => {
        expect(stack.pop()).toBe(1);
        expect(stack.isEmpty()).toBe(true);
    });

    test('is full after pushing 5 elements', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.isFull()).toBe(false);

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        expect(stack.isEmpty()).toBe(false);
        expect(stack.isFull()).toBe(true);
    });

    test('is empty after popping 5 times, returning 5, 4, 3, 2, 1', () => {
        expect(stack.isEmpty()).toBe(false);
        expect(stack.isFull()).toBe(true);

        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);

        expect(stack.isEmpty()).toBe(true);
        expect(stack.isFull()).toBe(false);
    });
});

describe('reverse a string using a stack', () => {
    const text = 'Hello, World!';

    // Create a stack large enough to hold our text
    const stack = new Stack<string>(text.length);

    test('text is reversed', () => {
        // Add each character from the text to the stack
        text.split('').forEach(c => stack.push(c));

        let reversed: string[] = [];

        // Remove each character from the stack until the stack is empty
        while (!stack.isEmpty()) {
            reversed = reversed.concat(stack.pop());
        }

        // Run our test
        expect(reversed.join('')).toBe('!dlroW ,olleH');
    });
});