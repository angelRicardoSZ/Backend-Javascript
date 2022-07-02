const TABLA = "user";

module.exports = function (injectedStore) {
    let store = injectedStore;
    if(!store){
        store = require("../../../store/dummy");
    }
    
    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA,id)
    }
    
    function upsert(body) {
        console.log(body)
        const user = {
            id:body.id,
            name: body.name,
            // username: body.username,
        }
        return store.upsert(TABLA, user);
    }


    return {
        list,
        get,
        upsert
    }
}

