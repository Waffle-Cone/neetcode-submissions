class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0
        let right = 0
        let mem = new Set()
        let max = 0

        while(left < s.length){
            console.log('yo')
            while(right < s.length){
                console.log('yo2')
                if(!mem.has(s[right])){
                    mem.add(s[right])
                    
                    let size = mem.size
                    if(size > max){
                        max = size
                    }

                    right++
                }else{
                    console.log(mem)
                    mem.delete(s[left])
                    break;
                }
            }

            left++
        }

        return max
    }
}
