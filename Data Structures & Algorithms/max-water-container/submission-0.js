//start on either end. calcuclate it. smaller one of the two getss moved towards center

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0;
        let right = heights.length -1
        let max = 0

        while(left <= right){
            let length = right - left
            let chosenHeight = Math.min(heights[left], heights[right])
            let amount = length * chosenHeight
            if(amount > max){max=amount}

            console.log(length, amount, " | ", heights[left],heights[right])
            
            if(heights[right] >= heights[left]){
                left++
            }else{
                right--
            }
        }

        return max
    }
}
