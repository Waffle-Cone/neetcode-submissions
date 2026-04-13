//left has to be bigger than right
//if right is >= left move left to rigt and right++
//as left is bigger than right. add the difference of height to stack
//once left is no longer bigger than right. pop the stack until emptyt and add numbers together 

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let left = 0
        let right = 1
        let stack = []
        let total = 0

        while(left + 1 < height.length){
            //console.log('\nout---', height[left], height[right])
            let smallWall = height[left]

            while(height[left] > height[right] && right <= height.length){
                
                if(height[right] != 0 && height[right] <smallWall && (right + 1 >= height.length) ){
                    smallWall = height[right]
                }
                else if(right + 1 >= height.length && height[right] === 0  ){smallWall = 0}
                
                //console.log('in---', height[left], height[right], 'Small Wall: ',smallWall)

                if(right + 1 < height.length){stack.push(height[right])}
                
                
                right++
                //console.log('After right++: ',height[right])

                
            }
            
            //console.log('_____Stack_____')
            //console.log('stack: ', stack, 'Wall: ', smallWall)
            let amount = 0 
            while(stack.length > 0){
                let diff = smallWall - stack.pop()
                
                if(diff > 0){
                    amount = amount + diff
                    left++
                }
                
            }
            
            //console.log('amount: ',amount)
            total = total + amount

            if(right >= height.length){
                left++
                right = left + 1
            }else{
                left = right
                right++
            }
    

        }

        //console.log('\n____', total )
        return total
    }
}
