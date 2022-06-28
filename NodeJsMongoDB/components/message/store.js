const db = require("mongoose") 
const Model = require("./model")

db.Promise = global.Promise;
db.connect("mongodb+srv://nodeuser:53Pp43Ul@cluster0.jflta.mongodb.net/test", {
    useNewUrlParser: true,
})
console.log("[db] conectada exitosamente")
// list = []
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save()
    // list.push(message)
}

async function getMessage(filterUser){
    let filter ={}
    if (filterUser !==null){
        filter = {user:filterUser}
    }
    const messages = await Model.find(filter);
    return messages
}   


async function updateText(id,message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText:updateText,
    remove:removeMessage
}