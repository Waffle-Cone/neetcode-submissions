class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 0
        let res = 0

        while(left < prices.length ){
            while(prices[right] >= prices[left]){
                console.log(prices[left],prices[right])

                let diff = prices[right] - prices[left]
                if(diff > res){
                    res = diff
                }
                
                right++
            }
            left++
        }
        console.log(res)
        return res
    }
}
