class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        //nums.sort((a,b)=>{return a-b})
        //console.log(nums)

        let left = 0
        let right = left + 1

        let mem = new Map()

        while(left < right && right < nums.length){
            let added = nums[left] + nums[right]
            console.log(added)

            if(added === target){
                return [left,right]
            }

            let diff = target - nums[right]
            console.log('diff: ', nums[left],nums[right], diff)

            if(mem.has(diff)){
                let getIndex = mem.get(diff)
                if(getIndex != right){
                    console.log(left,right,'|', getIndex)
                    return [getIndex,right]
                }else{console.log('SAME: ',left,right,'|', getIndex)}
                
            }

            if(mem.has(nums[right])){
                console.log('moving left')
                left++
            }else{
                console.log('moving right')
                mem.set(nums[right], right)
                right++
            }

            

        
        }
    }
}
