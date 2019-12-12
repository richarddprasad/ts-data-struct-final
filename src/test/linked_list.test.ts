import { DS } from '../linked_list/node';
import { LinkedList } from '../linked_list/linked_list';

describe('linked list', () => {
    const list = new LinkedList<string>();

    test('is created and empty', () => {
        expect(list.isEmpty()).toBe(true);
    });

    test(`insertFirst and getFirst return "hello"`, () => {
        list.insertFirst("hello");

        const item = list.getFirst();
        expect(item).toEqual("hello");

        // list.listContents();
    });

    test(`insertFirst again with value "good-bye" and getFirst to return "good-bye"`, () => {
        list.insertFirst("good-bye");

        const item = list.getFirst();
        expect(item).toEqual("good-bye");

        // list.listContents();
    });

    test(`contains "hello"`, () => {
        expect(list.contains("hello")).toBe(true);
    });

    test(`does not contain "hola"`, () => {
        expect(list.contains("hola")).toBe(false);
    });

    test(`has node with "hello" removed`, () => {
        const item = list.remove("hello");

        expect(item).toEqual("hello");

        // list.listContents();
    });

    test(`has node with "good-bye" removed and is left empty`, () => {
        expect(list.isEmpty()).toBe(false);
        const item = list.remove("good-bye");

        expect(item).toEqual("good-bye");
        expect(list.isEmpty()).toBe(true);

        // list.listContents();
    });

    test('throws an error when using getFirst on an empty list', () => {
        expect(() => {
            list.getFirst();
        }).toThrowError();
    });

    test(`removeFirst removes element with value "C" after insertFirst "A", "B", "C"`, () => {
        list.insertFirst("A");
        list.insertFirst("B");
        list.insertFirst("C");

        expect(list.removeFirst()).toBe("C");
    });

    test(`removeFirst remaining items until list is empty, returning "B", "A"`, () => {
        expect(list.isEmpty()).toBe(false);
        expect(list.removeFirst()).toBe("B");
        expect(list.removeFirst()).toBe("A");
        expect(list.isEmpty()).toBe(true);
    });

    test(`insertLast("A", "B", "C"), removeFirst() x 3 returns "A", "B", "C"`, () => {
        expect(list.isEmpty()).toBe(true);
        list.insertLast("A");
        list.insertLast("B");
        list.insertLast("C");
        expect(list.isEmpty()).toBe(false);

        expect(list.removeFirst()).toBe("A");
        expect(list.removeFirst()).toBe("B");
        expect(list.removeFirst()).toBe("C");
        expect(list.isEmpty()).toBe(true);
    });

    test(`throw an error when calling remove("apple") on empty list`, () => {
        expect(() => {
            list.remove("apple");
        }).toThrowError();
    });

    test(`return null when calling remove("apple") on non-empty list`, () => {
        list.insertFirst("banana");
        expect(list.remove("apple")).toBeNull();
    });

    test(`return "apple" when calling remove("apple") on non-empty list containing "apple"`, () => {
        list.insertFirst("apple");
        expect(list.remove("apple")).toBe("apple");
    });
});