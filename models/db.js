let  contacts =[];
let inbox =[]; 
let sent = []; 
let group = [];
let group_members = [];
let read_messages = [];

let unread_messages = [];
let users = [{id : 1, name : "Lafiagi"}];
let messages = [ {
    id : 1,
    createdOn : new Date() ,
    subject : "Hello World" ,
    message: "My First Message",
    parentMessageId : 3,
    status:"Recieved",
    },
    {
        id : 2,
        createdOn : new Date() ,
        subject : "Hello World" ,
        message: "My Second Message",
        parentMessageId : 3,
        status:"Recieved",
        },
        {
            id : 3,
            createdOn : new Date() ,
            subject : "Hello World" ,
            message: "My Third Message",
            parentMessageId : 3,
            status:"Recieved",
            },
    ]

module.exports.users = users;
module.exports.contacts = contacts;
module.exports.inbox = inbox;
module.exports.sent = sent;
module.exports.group = group;
module.exports.messages = messages;
module.exports.unread_messages = unread_messages;
module.exports.group_members = group_members;
module.exports.read_messages = read_messages;