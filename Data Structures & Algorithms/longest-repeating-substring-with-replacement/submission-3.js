const getMostFreq = (map) =>{
    let max = 0
    for (let x of map.values()) {
        if(x > max){
            max = x
        }
    }
    return max
}



class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let mem = new Map()

        let left = 0
        let right = 0 
        let count = 0
        let max = 0

        while(left < s.length){
            while(right < s.length){
                if(mem.has(s[right])){
                    mem.set(s[right], mem.get(s[right]) +1)
                }else{
                    mem.set(s[right], 1)
                }
                count++
                right++
                let mostFreq = getMostFreq(mem)
                let validCheck =  count - mostFreq
                
                if(validCheck <= k){
                    console.log(count, mem, validCheck, true)
                     if(count > max){
                        max = count
                     }
                }else{
                    console.log(count, mem, validCheck, false)
                    break;
                    
                }
                
                
                
            }
            console.log(count,' move left and remove from mem and count--')
            mem.set(s[left], mem.get(s[left])-1)
            count--
            left++
        }
        return max
    }
}
