class node<T> {
    public next?: node<T> = undefined
    constructor(public value: T) {}
}

export class LinkedList<T> {
    public head?: node<T> = undefined
    add(item: T) {
        const newNode = new node(item);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let aux: node<T> = this.head;
        while (aux.next) {
            aux = aux.next;
        }
        aux.next = newNode;
    }

    addMany(...items: Array<T>) {
        items.forEach(item => this.add(item))
    }

    remove(item: T): boolean {
        if(!this.head) {
            return false;
        }

        if(this.head.value === item) {
            this.head = this.head.next
            return true
        }

        let aux = this.head
        while(aux.next) {
            if (aux.next.value === item) {
                aux.next = aux.next.next
                return true
            }
            aux = aux.next
        }

        return false
    }

    get length(): number {
        let count = 0
        let aux = this.head
        while(aux) {
            count++
            aux = aux.next
        }
        return count
    }

    get items(): Readonly<Array<T>> {
        const list: Array<T> = []
        let aux = this.head
        while(aux) {
            list.push(aux.value)
            aux = aux.next
        }

        return Object.seal(list)
    }
}