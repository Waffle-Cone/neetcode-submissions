class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

         let mem = new Map()

         for(let i = 0; i<nums.length;i++){
            mem.set(nums[i],i)
         }



        while(nums.length >0){

            let halfIndex = Math.floor(nums.length/2)
            console.log('\n',nums[halfIndex])

            if(target === nums[halfIndex]){return mem.get(nums[halfIndex])}

            if(target > nums[halfIndex]){

                nums = nums.slice(halfIndex+1, nums.length)
                console.log('greater than half so: ', nums)
            }else if(target < nums[halfIndex] ){

                nums = nums.slice(0, halfIndex)
                console.log('less than half so: ', nums)

            }else if(target === nums[halfIndex]){return mem.get(nums[halfIndex])}

        } 

        return -1
      
    }
}
