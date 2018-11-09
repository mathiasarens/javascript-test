function connectedCell(matrix) {
    let visitedMatrix = Array(matrix.length).fill().map(()=>Array(matrix[0].length).fill());
    let regionMaxSize = 0
    for (let row = 0; row < matrix.length; row++) {
       for(let column = 0; column < matrix[0].length; column++) {
            regionMaxSize = Math.max(regionMaxSize, findRegion(matrix, visitedMatrix, row, column));
       } 
    }
    return regionMaxSize;
}

function findRegion(matrix, visitedMatrix, row, column) {
    let result = 0;
    if (!visitedMatrix[row][column]) {
        visitedMatrix[row][column] = true;
        if (matrix[row][column] == 1) {
            // top
            if (row>0) {
                result += findRegion(matrix, visitedMatrix, row-1, column);
            }
            // top left
            if (column>0 && row > 0) {
                result += findRegion(matrix, visitedMatrix, row-1, column-1);
            }
            // left
            if (column>0) {
                result += findRegion(matrix, visitedMatrix, row, column-1);
            }
            // bottom left
            if (column>0 && row < matrix.length-1) {
                result += findRegion(matrix, visitedMatrix, row+1, column-1);
            }
            // bottom
            if (row < matrix.length-1) {
                result += findRegion(matrix, visitedMatrix, row+1, column);
            }
            // bottom right
            if (row < matrix.length-1 && column < matrix[0].length-1) {
                result += findRegion(matrix, visitedMatrix, row+1, column+1);
            }
            // right
            if (column < matrix[0].length-1) {
                result += findRegion(matrix, visitedMatrix, row, column+1);
            }
            // top right
            if (row > 0  && column < matrix[0].length-1) {
                result += findRegion(matrix, visitedMatrix, row-1, column+1);
            }
            result += 1;
        }
    }
    return result;
}

console.log(connectedCell([[1,1,0,0],[0,1,1,0],[0,0,1,0],[1,0,0,0]]));
console.log(connectedCell([[1,1,0],[1,0,0],[0,0,1]]));
console.log(connectedCell([[1]]));
console.log(connectedCell([[]]));
console.log(connectedCell([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]));
console.log(connectedCell([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]));
console.log(connectedCell([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]));
console.log(connectedCell([[1,1,1,0,1],[1,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1]]));
console.log(connectedCell([[0,1,1,1,1],[1,0,0,0,1],[1,1,0,1,0],[0,1,0,1,1],[ 0,1,1,1,0]]));
