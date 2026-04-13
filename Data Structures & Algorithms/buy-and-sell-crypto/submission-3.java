class Solution {
    public int maxProfit(int[] prices) {
        int left = 0;
        int right = 0;
        int max = 0;
        

        while(left < prices.length){
            while(right < prices.length && prices[right] >= prices[left]){
                int diff = prices[right] - prices[left];
            
                /*System.out.println("L " + prices[left]);
                System.out.println("R "+prices[right]);

                System.out.println("_____");*/
                if(diff > max){
                    max = diff;
                }

                right++;
            }
            left++;
        }
        
        return max;
    }
}
