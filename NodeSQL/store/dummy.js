const db = {
    "user": [
        {
            id:"1",
            name:"carlos"
        }
    ],
}

async function list(tabla) {
    return db[tabla] || []
}

async function get(tabla,id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0]  || null
}

async function upsert(tabla,data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }
    db[tabla].push(data)
    return db
}

async function remove(tabla,id) {
    return true
}

async function query(tabla,query){
    let col = await list(tabla);
    let keys = Object.keys(query)
    console.log("keys - query ",keys)
    let key = keys[0]
    console.log("key - query ",key)
    return col.filter(item => item[key] === query[key])[0]  || null;
}


module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}