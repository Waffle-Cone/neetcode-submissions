class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        let pickedRow = null

        for(let row of matrix){
            let end = row[row.length-1]
            if(target <= end){
                pickedRow = row
                break;
            }
        }
        
        //console.log(pickedRow)
        if(pickedRow === null){return false}

        let left = 0
        let right = pickedRow.length - 1

        while(left <= right){
            let half = Math.floor((left + right)/2)

            if(pickedRow.slice(left,right+1).length > 2){
                if(target < pickedRow[half]){right = half}
                else if(target > pickedRow[half]){left = half}
                else if(target === pickedRow[half]){return true}
            }else{
                let array = pickedRow.slice(left,right+1)

                if(array[0] === target || array[1] === target){return true}
                else{return false}
            }

        }
        return false
    }
}
