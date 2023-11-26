export class Stack<T> {
    private _items: Array<T> = []
    push(item: T) {
        this._items.push(item)
    }
    pop(): T | undefined {
        return this._items.pop()
    }

    get items(): Readonly<Array<T>> {
        return Object.seal(this._items)
    }
    
    get length() {
        return this._items.length
    }
}