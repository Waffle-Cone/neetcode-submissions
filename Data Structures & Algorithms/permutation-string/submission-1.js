const checkAllZero = (map)=>{
    for(let i of map.values()){
        if(i > 0){
            return false
        }
    }
    return true
}


class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map()
        for(let i = 0; i< s1.length; i++){
            if(map.has(s1[i])){
                map.set(s1[i], map.get(s1[i]) + 1)
            }else{
                map.set(s1[i], 1)
            }
        }

        let left = 0
        let right = 0
        let answer = false
        
        while(left < s2.length){
            
            if(map.has(s2[left])){
                //console.log(left,'start expanding window')
                
                while(right<s2.length){
                    console.log(left,right,s2[left],s2[right])
                    if(map.has(s2[right])){
                        if(map.get(s2[right]) > 0){
                            //console.log('its good to go')
                            map.set(s2[right], map.get(s2[right]) -1 )
                        }else{
                            //console.log('nope we gotta reset. ran out of letters')
                            break;
                        }
                    }else{break;}
                    right++
                }

            }else{
                //console.log(left,'dont expand window and move both')
                right++
            }
            
            console.log('move left and add the letters back if need be',map)
            if(checkAllZero(map)){
                console.log('end while loop and finish')
                answer = true
                break;
            }
            if(map.has(s2[left])){
                map.set(s2[left], map.get(s2[left]) + 1)
                console.log('updated map: ',map)
            }
            
            left++

        }

        return answer

    }
}
