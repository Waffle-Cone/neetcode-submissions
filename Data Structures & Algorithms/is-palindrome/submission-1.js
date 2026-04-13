class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // a-z 97 - 122
        //0-9  48 - 57

        let left = 0
        let right = s.length - 1
        s = s.toLowerCase()

        while(left < right){
            while( !((s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 57) || (s.charCodeAt(left) >= 97 && s.charCodeAt(left) <= 122)) && left < right){
                console.log('not',s[left],s.charCodeAt(left))
                left++
            }
            
            while( !((s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57) || (s.charCodeAt(right) >= 97 && s.charCodeAt(right) <= 122)) && left < right ){
                console.log('not',s[right],s.charCodeAt(right))
                right--
            }

            console.log(s[left], s[right])
            if(s[left] != s[right]){
                return false
            }else{
                left++
                right--
            }
        }

        return true
    }
}
