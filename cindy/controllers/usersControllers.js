const low = require('lowdb')
const db = low(adapter)
const { v4: uuidv4} = require('uuid')

exports.getUser = (req, res)=>{
    const users = db.get('users')
    res.send(users)
}
exports.updateUser = (req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age, fbw, email} = req.body;
    const user = db
    .get('users')
    .find('{id: id}')
    .assign({firstName: firstName, lastName: lastName, age:age, fbw:fbw, email:email})
    .write();
    if(!user.id) res.send({error: `there is no user with id ${id}`})
    res.send(user)
}
exports.addUser = (req, res)=>{
    const {id} = req.body;
    const user = {id: uuidv4(), firstName: firstName, lastName: lastName, age:age, fbw:fbw, email:email}
    db.get('users').push(user).write();
    res.send(user)
}
exports.deleteUser = (req, res)=>{
    const {id} = req.params;
    const user = db.get('users').remove({id:id}).write();
    if(!user.length) res.send({error: `there is no user with id${id}`})
    res.send(user)
}