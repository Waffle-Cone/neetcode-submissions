class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length -1
        console.log(right)

        //console.log(nums[left], nums[right])
        if(nums.length <= 2){
            for(let i = 0; i<nums.length; i++){
                if(nums[i] === target){
                    return i
                }
            }
        }else{
            while(left < right){
                let half = Math.floor((left + right)/2)
                //console.log('\nhalf index: ',half)
                

                
                if(nums.slice(left,right+1).length > 2){
                    if(target < nums[half]){
                        right = half
                        //console.log('moving right',nums.slice(left,right+1))
                    
                    }else if(target >nums[half]){
                        left = half
                        //console.log('moving left',nums.slice(left,right+1))
                    
                    }else if(target === nums[half]){return half}
                }else{
                    //console.log("yolo")
                    if(nums.slice(left,right+1)[0] === target){return left}
                    else if(nums.slice(left,right+1)[1] === target){return right}
                    else{return -1}
                }
                
                
            
            }
        }
        return -1
    }
}
