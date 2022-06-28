const db = require("mongoose") 
const Model = require("./model")

db.Promise = global.Promise;
db.connect("mongodb+srv://nodeuser:@cluster0.jflta.mongodb.net/test", {
    useNewUrlParser: true,
})
console.log("[db] conectada exitosamente")
// list = []
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save()
    // list.push(message)
}

async function getMessage(){
    const messages = await Model.find();
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

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText:updateText
}