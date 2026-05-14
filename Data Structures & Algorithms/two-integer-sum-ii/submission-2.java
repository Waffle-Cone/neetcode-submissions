class Solution {
    public int[] twoSum(int[] numbers, int target) {
        
        int[] ans = new int[2];

        int left = 0;
        int right = numbers.length-1;
        

        while(left < right){
            int addition = numbers[left] + numbers[right];
            
            if(addition > target){
                right--;
            }else if(addition < target){
                left++;
            }else{
                //add 1 to make it 1 indexed
                ans[0] = left + 1;
                ans[1] = right + 1;
                break;
            }

        }
        

        return ans;
    }
}
