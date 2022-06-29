const store = require("./store");

function addMessage(chat,user,message){
    return new Promise((resolve,reject) => {
        if(!chat || !user || !message){
            console.error("[messageController] No hay chat, usuario o mensaje")
            reject("Datos faltantes")
            return false
        } 
        const fullMessage = {
            chat:chat,
            user: user,
            message: message, 
            date:new Date()
        }
        
        console.log(fullMessage)

        store.add(fullMessage)
        resolve(fullMessage)
        
    })
    
}


function getMessage(filterChat){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterChat))

    })
}

function updateMessage(id, message){
    return new Promise( async (resolve,reject)=> {
        if(!id || !message){
            reject("invalid data")
            return false
        }
        const result = await store.updateText(id,message)
        resolve(result);
    })
}

function deleteMessage(id){
    return new Promise((resolve,reject)=>{
        if(!id){
            reject("ID invalido")
            return false
        }


        store.remove(id)
            .then(()=>{
                resolve()
            })
            .catch(e =>{
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}