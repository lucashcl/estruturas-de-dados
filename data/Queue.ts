export class Queue<T> {
    private _items: Array<T> = []
    queue(item: T) {
        this._items.unshift(item)
    }
    deque(): T | undefined {
        return this._items.pop()
    }

    get items(): Readonly<Array<T>> {
        return Object.seal(this._items)
    }
}