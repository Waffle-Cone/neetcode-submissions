class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let index = null

        for(let i = 0; i <numbers.length; i++){
            let diff = target - numbers[i]
            index = numbers.findIndex((a)=>{return a === diff})
            if(index != i && numbers[index] === diff){
                return [i+1,index+1]
            }
        }

        
        
    }
}
