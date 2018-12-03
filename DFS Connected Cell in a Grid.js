function maxRegion(grid) {
    let maxRegion = 0
    if (grid.length > 0 && grid[0].length > 0) {
        let visited = new Array(grid.length)
        for (let row = 0; row < grid.length; row++) {
            visited[row] = new Array(grid[0].length)
            visited[row].fill(false)
        }
        for (let row = 0; row < grid.length; row++) {
            for(let column = 0; column < grid[0].length; column++) {
                maxRegion = Math.max(maxRegion, dfs(grid, visited, row, column, 0))
            }
        }
    }
    return maxRegion
}

function dfs(grid, visited, row, column, count) {
    if (visited[row][column] || grid[row][column] == 0) {
        return count
    } else {
        visited[row][column] = true
        count++
        if (row-1>=0) {
            count = dfs(grid, visited, row-1, column, count)
        }
        if (row-1>=0 && column+1 < grid[0].length) {
            count = dfs(grid, visited, row-1, column+1, count)
        }
        if (column+1 < grid[0].length) {
            count = dfs(grid, visited, row, column+1, count)
        }
        if (row+1<grid.length && column+1 < grid[0].length) {
            count = dfs(grid, visited, row+1, column+1, count)
        }
        if (row+1<grid.length) {
            count = dfs(grid, visited, row+1, column, count)
        }
        if (row+1<grid.length && column-1 >=0) {
            count = dfs(grid, visited, row+1, column-1, count)
        }
        if (column-1 >=0) {
            count = dfs(grid, visited, row, column-1, count)
        }
        if (row-1 >=0 && column-1 >=0) {
            count = dfs(grid, visited, row-1, column-1, count)
        }
        return count
    }
}


console.log(maxRegion([[1,1,0,0],[0,1,1,0],[0,0,1,0],[1,0,0,0]]))