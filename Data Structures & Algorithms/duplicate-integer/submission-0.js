class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         nums.sort((a,b)=>{return a -b})
         console.log(nums)

         let left = 0
         let right = left +1 

         while(left < right && right < nums.length){

            console.log(nums[left],nums[right])
            if(nums[left] === nums[right]){return true}
            left++
            right++
         }
         return false


    }
}
