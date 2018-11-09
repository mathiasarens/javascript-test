var fs = require('fs');

function beautifulPath(edges, A, B) {
    let edgeAndCostMap = {}
    for (let edge of edges) {
        if (!edgeAndCostMap[edge[0]]) {
            edgeAndCostMap[edge[0]] = {}
        }
        if (!edgeAndCostMap[edge[0]][edge[1]]) {
            edgeAndCostMap[edge[0]][edge[1]] = []
        }
        edgeAndCostMap[edge[0]][edge[1]].push(edge[2])

        if (!edgeAndCostMap[edge[1]]) {
            edgeAndCostMap[edge[1]] = {}
        }
        if (!edgeAndCostMap[edge[1]][edge[0]]) {
            edgeAndCostMap[edge[1]][edge[0]] = []
        }
        edgeAndCostMap[edge[1]][edge[0]].push(edge[2])
    }

    let nodeAndCostMap = {}

    function dfs(node, cost) {
        if (edgeAndCostMap[node]) {
            Object.keys(edgeAndCostMap[node]).forEach((targetNode, index) => {
                edgeAndCostMap[node][targetNode].forEach((edgeCost) => {
                    if (targetNode != A) {
                        if (!nodeAndCostMap[targetNode]) {
                            nodeAndCostMap[targetNode] = {}
                        }
                        let targetCost = cost | edgeCost
                        if (!nodeAndCostMap[targetNode][targetCost]) {
                            nodeAndCostMap[targetNode][targetCost] = true
                            if (targetNode != B) {
                                dfs(targetNode, targetCost);
                            }
                        }
                    }
                });
            });
        }
    }

    dfs(A, 0)

    if (nodeAndCostMap[B]) {
        let min = 1025;
        Object.keys(nodeAndCostMap[B]).forEach((element, index) => min = Math.min(min, element));
        return min;
    } else {
        return -1;
    }
}

function main() {

    let inputString = '';
    let currentLine = 0;

    function readLine() {
        return inputString[currentLine++];
    }

    fs.readFile('MinimumPenaltyPath-Test6.txt', 'utf8', function (err, contents) {
        inputString = contents.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));

        const nm = readLine().split(' ');
        const n = parseInt(nm[0], 10);
        const m = parseInt(nm[1], 10);
        let edges = Array(m);
        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const AB = readLine().split(' ');
        const A = parseInt(AB[0], 10);
        const B = parseInt(AB[1], 10);
        let result = beautifulPath(edges, A, B);
        console.log(result);
    });
}

main();

// console.log(beautifulPath([[1, 2, 1], [1, 2, 1000], [2, 3, 3], [1, 3, 100]], 1, 3));
// console.log(beautifulPath([[1, 2, 1], [1, 2, 1000], [2, 3, 1022], [1, 3, 1022]], 1, 3));
// console.log(beautifulPath([[1, 2, 1], [1, 2, 1000]], 1, 3));