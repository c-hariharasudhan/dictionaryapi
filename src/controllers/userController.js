import mongoose from 'mongoose';
import userSchema from '../models/user.model'

const User = mongoose.model('User', userSchema)

export function AddUser(req, res){
    console.log(req.body);
    let newUser = new User(req.body)
    newUser.save((error, user) => {
        if(error) {res.json(error)}
        res.json(user)
    })
}