/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row= matrix.length
    let col = matrix[0].length
    let rowZ = false
    let colZ = false

    for(let r = 0;r<row;r++){
        if(matrix[r][0]=== 0){
            colZ = true
        }
    }
    for(let c =0;c<col;c++){
        if(matrix[0][c]=== 0){
            rowZ =true
        }
    }
    for(let r=1;r<row;r++){
        for(let c=1;c<col;c++){
            if(matrix[r][c] === 0){
                matrix[r][0] =0
                matrix[0][c] = 0
            }
        }
    }
    for(let r=1;r<row;r++){
        for(let c=1;c<col;c++){
            if(matrix[0][c] === 0 || matrix[r][0] === 0 ){
                matrix[r][c] =0
            }
        }
    }
    if(colZ){
        for(let r =0;r<row;r++){
            matrix[r][0] =0
        }
    }
    if(rowZ){
        for(let c =0;c<col;c++){
            matrix[0][c] =0
        }
    }
};