const notZero = (map)=>{
    for(let value of map.values()){
        if(value > 0){return true}
    }
    return false
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need = new Map()

        for(let letter of t){
            if(need.has(letter)){
                need.set(letter, need.get(letter) +1)
            }else{
                need.set(letter, 1)
            }
        }

        let left = 0
        let right = 0
        let ans = ""
         
        

        while(left < s.length){
            //console.log('\n',s[left],need)
            

            while(notZero(need) && right < s.length ){
                
                if(need.has(s[right])){
                    need.set(s[right], need.get(s[right]) - 1)
                }
                
                right++
                
            }



            let sub = s.slice(left,right)
            //console.log(sub)

            if(notZero(need) === false){
                if(ans === ""){
                    ans = sub
                }else if( sub.length < ans.length){
                    ans = sub
                }
            }

            if(need.has(s[left])){
                need.set(s[left], need.get(s[left]) + 1)
            }

            //console.log('end: ',need)
            left++
            
            
        }

        return ans
        

    }
}
