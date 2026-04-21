class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let mem = new Map()

        for(let i = 0; i<nums.length;i++){
            
            let diff = target - nums[i]

            if(mem.has(diff)){
                let getIndex = mem.get(diff)
                return [getIndex, i]
            }
            else{
                mem.set(nums[i], i)
            }

        }
    }
}
