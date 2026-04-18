const check = (map)=>{
   
    for(let value of map.values()){
        if(value > 0){return false}
    }
    return true
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


        if(s.length != t.length){return false}
        let mem = new Map()


        for(let letter of s){
            
            if(mem.has(letter)){
                mem.set(letter,mem.get(letter) + 1)
            }else{
                mem.set(letter,1)
            }
        }
        //console.log(mem)
        

        for(let letter of t){
            
            if(mem.has(letter)){
                if(mem.get(letter) > 0){
                    mem.set(letter,mem.get(letter) - 1)
                }else{
                    return false
                    }         
            }else{
                return false
            }
        }
        
        return check(mem)
    }
}
