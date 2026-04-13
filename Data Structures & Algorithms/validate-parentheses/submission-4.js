class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bracket = new Map([['(',')'],['{','}'],['[',']']])
        

        let stack = []


        for(let i = 0; i < s.length; i++){
            if(bracket.has(s[i])){
                stack.push(s[i])
            }else{
                let pop = stack.pop()
                console.log(s[i], pop)
                if(s[i] != bracket.get(pop)){
                    return false
                }
            }

        }
        if(stack.length > 0){return false}
        else{return true}
        

        

      
    }
}
