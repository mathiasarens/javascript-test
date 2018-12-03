'use strict';

var fs = require("fs")
let readline = require("readline")
var assert = require('assert')


function shortestReachInGraph(graphNodes, graphFrom, graphTo, startNode) {
    let distanceArray = new Array(graphNodes+1)
    distanceArray.fill(Number.MAX_SAFE_INTEGER)
    let visitedArray = new Array(graphNodes+1)
    visitedArray.fill(false)
    let nodeMap = createNodeMap(graphFrom, graphTo)
    // bfs
    let queue = []
    queue.push(startNode)
    distanceArray[startNode] = 0
    while (queue.length > 0) {
        let node = queue.shift()
        if (!visitedArray[node]) {
            visitedArray[node]=true
            if (nodeMap.has(node)) {
                let nextNodeArray = nodeMap.get(node)
                for (let nextNode of nextNodeArray) {
                    distanceArray[nextNode] = Math.min(distanceArray[nextNode], distanceArray[node]+6)
                    if (!visitedArray[nextNode]) {
                        queue.push(nextNode)
                    }
                }
            }
        }
    }
    let result = distanceArray.slice(1).map(number => number === Number.MAX_SAFE_INTEGER ? -1 : number)
    result.splice(startNode-1,1)
    return result
}

function createNodeMap(graphFrom, graphTo) {
    let nodeMap = new Map()
    for(let i = 0; i< graphFrom.length; i++) {
        if (!nodeMap.has(graphFrom[i])) {
            nodeMap.set(graphFrom[i],[])
        }
        nodeMap.get(graphFrom[i]).push(graphTo[i])
        if (!nodeMap.has(graphTo[i])) {
            nodeMap.set(graphTo[i],[])
        }
        nodeMap.get(graphTo[i]).push(graphFrom[i])
    }
    return nodeMap
}

// testcase(0);
testcase(5);

function testcase(id) {
    readFileLineByLine(`BFS Shortest Reach in Graph-TestCase${id}.txt`, (testcaseStrings)=>{
        readFileLineByLine(`BFS Shortest Reach in Graph-Solution${id}.txt`, (solutionStrings) => {
            main(testcaseStrings, solutionStrings)
        })
    })
}

function readFileLineByLine(filename, callback) {
    let inputString = []
    var lineReader = readline.createInterface({
        input: fs.createReadStream(filename)
    });

    lineReader.on('line', function (line) {
        inputString.push(line);
    });

    lineReader.on('close', function () {
        callback(inputString)
    });
}



function main(inputStrings, expectedResultStrings) {
    let currentLine = 0

    function readLine() {
        return inputStrings[currentLine++];
    }

    const queries = parseInt(readLine(),10)
    for(let i = 0; i < queries; i++) {
        const graphNodesEdges = readLine().split(' ');
        const graphNodes = parseInt(graphNodesEdges[0], 10);
        const graphEdges = parseInt(graphNodesEdges[1], 10);
    
        let graphFrom = [];
        let graphTo = [];
    
        for (let i = 0; i < graphEdges; i++) {
            const graphFromTo = readLine().split(' ');
    
            graphFrom.push(parseInt(graphFromTo[0], 10));
            graphTo.push(parseInt(graphFromTo[1], 10));
        }

        const startNode = parseInt(readLine(), 10);
    
        const ans = shortestReachInGraph(graphNodes, graphFrom, graphTo, startNode);
    
        assert(ans.join(' ') == expectedResultStrings[i]);
    }
}


