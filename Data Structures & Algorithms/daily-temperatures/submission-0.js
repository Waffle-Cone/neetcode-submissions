class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        let stack = []
        let ans = temps.slice().fill(0)

        for(let i=0; i<temps.length;i++){
            console.log('\n',i,'------')
            while(stack.length > 0 && temps[i] > stack[stack.length - 1][0]){
                console.log(temps[i], stack)
                const [t,x] = stack.pop()
                console.log(temps[i], i,'|', t,x)

                let days = i - x
                ans[x] = days
                console.log(ans)
            }
            stack.push([temps[i],i])

        
            

        }
        console.log(stack,ans)
        return ans

    }
}
