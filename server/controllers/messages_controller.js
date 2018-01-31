

let messages = [];

let id = 0; //will increment  after every creation // 

const read = (req,res,next) => {
        res.status(200).json( messages );
};

const create = (req,res,next) => {
    const {text , time} = req.body;
    messages.push({text,time,id})
    return res.json( messages)
    id++;
};



const update = (req,res,next) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex( current => current.id == updateID );
    let message = messages[ messageIndex ];
    console.log(messageIndex)
    messages[ messageIndex ] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    
};
return res.json(messages);
}

const destroy = (req,res,next) => {
    const deleteID = req.params.id;    
    messageIndex = messages.findIndex( message => message.id == deleteID );
    messages.splice(messageIndex, 1);
    res.status(200).send( messages );
  };



module.exports = {
    create:create,
    read:read,
    update:update,
    destroy: destroy
}