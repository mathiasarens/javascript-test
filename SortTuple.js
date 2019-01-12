let arr = [
    {prio:true, id:83},
    {prio:false, id:3},
    {prio:false, id:63},
    {prio:true, id:88},
    {prio:true, id:47},
    {prio:false, id:52},
    {prio:false, id:36},
    {prio:true, id:29},
    {prio:false, id:17},
    {prio:true, id:25},
]

arr.sort((a,b) => {
    if (a.prio === b.prio) {
        return a.id-b.id
    } else {
        return a.prio === true ? -1 : 1
    }
})

console.log("[\n"+arr.map(tuple => `{prio: ${tuple.prio}, id: ${tuple.id}}`).join(',\n')+"\n]")