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
    })

    test('Prepend', () => {
        let list = init();

        expect(list.prepend('x').toString()).toBe('x,a,b,c');
        expect(list.head.value).toBe('x');
        expect(list.tail.value).toBe('c');
    })

    test('Prepend in empty list', () => {
        let list = new LinkedList();

        expect(list.prepend('x').toString()).toBe('x');
        expect(list.head.value).toBe('x');
        expect(list.tail.value).toBe('x');
    })

    test('find', () => {
        let list = init();

        expect(list.find('b').toString()).toBe('b');
        expect(list.find('x')).toBe(null);
    })

    test('delete', () => {
        let list = init();

        expect(list.delete('b').toString()).toBe('b');
        expect(list.toString()).toBe('a,c');
        expect(list.delete('a').toString()).toBe('a');
        expect(list.toString()).toBe('c');
        expect(list.head.value).toBe('c');
        expect(list.tail.value).toBe('c');

    })

    test('delete multiply', () => {
        let list = init();

        list.append('a');

        expect(list.delete('a').toString()).toBe('a');
        expect(list.toString()).toBe('b,c');
        expect(list.head.value).toBe('b');
        expect(list.tail.value).toBe('c');

    })

})