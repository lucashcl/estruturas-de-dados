type type = number

function addWhiteSpace(length: number) {
    let str = ""
    for(let i = 0; i < length; i++) {
        str += "  "
    }
    return str

}

class Leaf<type> {
    public left?: Leaf<type>
    public right?: Leaf<type>
    constructor(public value: type) {}

    add(item: type) {
        if(item < this.value) {
            if(this.left === undefined) {
                this.left = new Leaf(item)
                return
            }
            this.left.add(item)
            return
        } else {
            if(this.right === undefined) {
                this.right = new Leaf(item)
                return
            }
            this.right.add(item)
            return
        }
    }

    show(indentation: number = 0) {
        console.log(`${addWhiteSpace(indentation)}${this.value}${this.left || this.right ? ":" : ""}`)
        if(this.left !== undefined) {
            this.left.show(indentation+1)

        }
        if(this.right !== undefined) {
            this.right.show(indentation+1)
        }
    }
}

export class BinaryTree {
    public root?: Leaf<type> = undefined
    add(item: type) {
        if(this.root === undefined) {
            this.root = new Leaf(item)
            return
        }
        this.root.add(item)
    }

    addMany(...items: Array<type>) {
        items.forEach(item => this.add(item))
    }

    show() {
        if(this.root === undefined) {
            console.log("{}")
            return
        }
        this.root.show()
    }

    find(item: type): type | undefined {
        if(this.root === undefined) {
            return undefined
        }

        let current: Leaf<type> | undefined = this.root
        while(current !== undefined) {
            if(current.value === item) {
                return  current.value
            }
            if(item < current.value) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return undefined

    }
}