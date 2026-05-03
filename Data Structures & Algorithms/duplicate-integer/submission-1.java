

class Solution {
    public boolean hasDuplicate(int[] nums) {

        Set<Integer> mem = new HashSet<>();

        for(int i = 0; i<nums.length;i++){
            if(mem.contains(nums[i])){
                return true;
            }else{
                mem.add(nums[i]);
            }
        }
        return false;
    }
}