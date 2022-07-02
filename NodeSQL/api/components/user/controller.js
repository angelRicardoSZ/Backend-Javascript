// const nanoid = require('nanoid');
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
        // console.log(body)

        const user = {
            name: body.name,
            id:body.id
            // username: body.username,
        }
        // if(body.id){
        //     user.id = body.id
        // } else {
        //     user.id = nanoid()
        // }


        return store.upsert(TABLA, user);
    }


    return {
        list,
        get,
        upsert
    }
}

