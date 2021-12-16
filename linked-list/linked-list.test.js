const {LinkedList} = require('./linkedList')

function init() {
    const list = new LinkedList();

    list.append('a').append('b').append('c');

    return list;
}

describe('Linked List', () => {

    test('Append', () => {
        let list = init();

        expect(list.append('x').toString()).toBe('a,b,c,x');
        expect(list.head.value).toBe('a');
        expect(list.tail.value).toBe('x'); 
    });

    test('Prepend', () => {
        let list = init();

        expect(list.prepend('x').toString()).toBe('x,a,b,c');
        expect(list.head.value).toBe('x');
        expect(list.tail.value).toBe('c');
    });

    test('Prepend in empty list', () => {
        let list = new LinkedList();

        expect(list.prepend('x').toString()).toBe('x');
        expect(list.head.value).toBe('x');
        expect(list.tail.value).toBe('x');
    });

    test('Find', () => {

        let list = init();

        expect(list.find('b').toString()).toBe('b');
        expect(list.find('x')).toBe(null);
    });

    test('Delete', () => {
        let list = init();

        expect(list.delete('x')).toBe(null);
        expect(list.delete('b').toString()).toBe('b');
        expect(list.toString()).toBe('a,c');
        expect(list.delete('a').toString()).toBe('a');
        expect(list.toString()).toBe('c');
        expect(list.head.value).toBe('c');
        expect(list.tail.value).toBe('c');

    });

    test('Delete multiply', () => {
        let list = init();

        list.append('a');

        expect(list.delete('a').toString()).toBe('a');
        expect(list.toString()).toBe('b,c');
        expect(list.head.value).toBe('b');
        expect(list.tail.value).toBe('c');

    });

    test('Inser in the middle', () => {
        let list = init();
        let prev = list.find('b');

        list.insertAfter('x', prev);

        expect(list.toString()).toBe('a,b,x,c');
    });

    test('Inser in the end', () => {
        let list = init();
        let prev = list.find('c');

        list.insertAfter('x', prev);

        expect(list.toString()).toBe('a,b,c,x');
        expect(list.tail.value).toBe('x');
    });

});