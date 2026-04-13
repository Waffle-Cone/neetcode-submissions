class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        
        
        for(let i =0 ; i <tokens.length; i++){
            if(Number.isInteger(parseInt(tokens[i]))){
                stack.push(parseInt(tokens[i]))
            }else{
                let operator = tokens[i]
                
                let num1 = stack.pop()
                let num2 = stack.pop()
                console.log(stack, num2,operator,num1)

                let math = 0;
                if(operator === '+'){math = num2 + num1}
                else if(operator === '-'){math = num2 - num1}
                else if(operator === '*'){math = num2 * num1}
                else if(operator === '/'){math = Math.trunc( num2 / num1)}

                stack.push(math)


            }
        }

        console.log(stack[0])
        return stack[0]
    }
}
