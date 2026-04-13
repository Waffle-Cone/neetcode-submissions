class MinStack {
    constructor() {
        this.stack = []
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
       
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log(this.stack)
        let min = this.stack.toSorted((a,b)=>{return a-b})
        console.log('sorted',min,this.stack)
        return min[0]
    }
}
